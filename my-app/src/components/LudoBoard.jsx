// src/components/LudoBoard.jsx
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { players, HOME_SLOT_COORDS, cellSize, GRID } from "../utils/constants";
import { PATHS } from "../utils/ColorPath";
import { nextTurn } from "../Store/TurnSlice";
import BoardGrid from "./BoardGrid";
import AnimatedToken from "../AnimationTokenWrapper";

export default function LudoBoard() {
  const dispatch = useDispatch();

  // --- Tokens from local state ---
  const initialTokens = useMemo(() => {
    const t = {};
    players.forEach((p) => {
      t[p] = Array.from({ length: 4 }).map((_, i) => ({
        id: `${p}-${i}`,
        player: p,
        status: "home",       // 'home' | 'onboard' | 'completed'
        homeIndex: i,
        stepsMoved: 0,        // steps along PATHS[player]
      }));
    });
    return t;
  }, []);

  const [tokens, setTokens] = useState(initialTokens);
  const [dice, setDice] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);

  // --- Current turn from Redux ---
  const turn = useSelector((state) => state.turn.currentPlayer);

  // --- Roll Dice ---
  const rollDiceHandler = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    setSelectedToken(null);

    // Check if any token can move
    const playerTokens = tokens[turn];
    const canMove = playerTokens.some(
      (t) => (t.status === "home" && roll === 6) || t.status === "onboard"
    );

    if (!canMove) {
      // No movable token → skip turn automatically
      setTimeout(() => {
        dispatch(nextTurn());
        setDice(null); // hide dice for next player
      }, 500);
    }
  };

  // --- Token click handler ---
  const handleTokenClick = (token) => {
    if (token.player !== turn) return;
    if (token.status === "completed") return;

    if (token.status === "home") {
      if (dice !== 6) return;

      setTokens((prev) => {
        const copy = { ...prev, [token.player]: [...prev[token.player]] };
        const idx = copy[token.player].findIndex((t) => t.id === token.id);
        copy[token.player][idx] = { 
          ...copy[token.player][idx], 
          status: "onboard",
          stepsMoved: 0
        };
        return copy;
      });

      setDice(null);
      dispatch(nextTurn());
      return;
    }

    if (token.status === "onboard") {
      setTokens((prev) => {
        const copy = { ...prev, [token.player]: [...prev[token.player]] };
        const idx = copy[token.player].findIndex((t) => t.id === token.id);
        let newSteps = copy[token.player][idx].stepsMoved + dice;

        if (newSteps >= PATHS[token.player].length - 1) {
          copy[token.player][idx] = {
            ...copy[token.player][idx],
            status: "completed",
            stepsMoved: PATHS[token.player].length - 1
          };
        } else {
          copy[token.player][idx] = {
            ...copy[token.player][idx],
            stepsMoved: newSteps
          };
        }

        return copy;
      });

      setDice(null);
      dispatch(nextTurn());
    }
  };

  // --- Home tokens for BoardGrid ---
  const tokensByCell = useMemo(() => {
    const map = {};
    players.forEach((p) => {
      tokens[p].forEach((t) => {
        if (t.status === "home") {
          const slot = HOME_SLOT_COORDS[p][t.homeIndex];
          const key = `${slot.r}-${slot.c}`;
          (map[key] = map[key] || []).push(t);
        }
      });
    });
    return map;
  }, [tokens]);

  // --- Onboard tokens for AnimatedToken ---
  const animatedTokens = useMemo(() => {
    return players.flatMap((p) =>
      tokens[p]
        .filter(t => t.status === "onboard")
        .map((t) => ({
          ...t,
          pathPos: PATHS[p][t.stepsMoved],
        }))
    );
  }, [tokens]);

  return (
    <div style={{ position: "relative", width: GRID * cellSize, height: GRID * cellSize, padding: 18 }}>
      <BoardGrid
        tokensByCell={tokensByCell}
        turn={turn}
        selectedToken={selectedToken}
        onTokenClick={handleTokenClick}
      />

      {animatedTokens.map((t) => (
        <AnimatedToken key={t.id} token={t} turn={turn} onClick={handleTokenClick} />
      ))}
    </div>
  );
}
