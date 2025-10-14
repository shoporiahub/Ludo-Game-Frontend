// src/components/LudoBoard.jsx
import React, { useState, useMemo } from "react";
import { players, COLORS, HOME_SLOT_COORDS, cellSize, GRID } from "../utils/constants";
import { PATHS } from "../utils/ColorPath";
import BoardGrid from "./BoardGrid";
import AnimatedToken from "../AnimationTokenWrapper";

export default function LudoBoard() {
  // --- Initial tokens ---
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
  const [turn, setTurn] = useState("red");
  const [selectedToken, setSelectedToken] = useState(null);

  // --- Roll Dice ---
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    setSelectedToken(null);
  };

  // --- Next turn ---
  const nextTurn = () => {
    const idx = players.indexOf(turn);
    setTurn(players[(idx + 1) % players.length]);
  };

  // --- Token click handler ---
  const handleTokenClick = (token) => {
    if (token.player !== turn) return;
    if (token.status === "completed") return;

    // --- Token is in home ---
    if (token.status === "home") {
      if (dice !== 6) return; // must roll 6 to leave home

      // Move token to first step on path
      setTokens((prev) => {
        const copy = { ...prev, [token.player]: [...prev[token.player]] };
        const idx = copy[token.player].findIndex((t) => t.id === token.id);
        copy[token.player][idx] = { 
          ...copy[token.player][idx], 
          status: "onboard",
          stepsMoved: 0 // first step on path
        };
        return copy;
      });

      setDice(null);
      nextTurn();
      return;
    }

    // --- Token is already on path ---
    if (token.status === "onboard") {
      setTokens((prev) => {
        const copy = { ...prev, [token.player]: [...prev[token.player]] };
        const idx = copy[token.player].findIndex((t) => t.id === token.id);
        let newSteps = copy[token.player][idx].stepsMoved + dice;

        // Check if token completes path
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
      nextTurn();
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
      {/* Board grid with home tokens */}
      <BoardGrid
        tokensByCell={tokensByCell}
        turn={turn}
        selectedToken={selectedToken}
        onTokenClick={handleTokenClick}
      />

      {/* Animated tokens on path */}
      {animatedTokens.map((t) => (
        <AnimatedToken key={t.id} token={t} turn={turn} onClick={handleTokenClick} />
      ))}
    </div>
  );
}
