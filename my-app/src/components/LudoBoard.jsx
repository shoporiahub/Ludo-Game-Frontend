// src/components/LudoBoard.jsx
import React, { useState, useMemo } from "react";
import { players, COLORS, HOME_SLOT_COORDS, START_COORDS } from "../utils/constants";
import Dice from "./ Dice";
import BoardGrid from "./BoardGrid";

export default function LudoBoard() {
  // initial tokens
  const initialTokens = useMemo(() => {
    const t = {};
    players.forEach((p) => {
      t[p] = Array.from({ length: 4 }).map((_, i) => ({
        id: `${p}-${i}`,
        player: p,
        status: "home",
        homeIndex: i,
        pos: null,
      }));
    });
    return t;
  }, []);

  const [tokens, setTokens] = useState(initialTokens);
  const [dice, setDice] = useState(null);
  const [turn, setTurn] = useState("red");
  const [selectedToken, setSelectedToken] = useState(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    setSelectedToken(null);
  };

  const handleTokenClick = (token) => {
    if (token.player !== turn) return;

    if (token.status === "home") {
      if (dice !== 6) return;
      const start = START_COORDS[token.player];
      setTokens((prev) => {
        const copy = { ...prev, [token.player]: [...prev[token.player]] };
        const idx = copy[token.player].findIndex((t) => t.id === token.id);
        copy[token.player][idx] = { ...copy[token.player][idx], status: "onboard", pos: start };
        return copy;
      });
      setDice(null);
      nextTurn();
      return;
    }

    // onboard logic (to be done in next step with full track)
    setSelectedToken(token.id);
  };

  const nextTurn = () => {
    const idx = players.indexOf(turn);
    setTurn(players[(idx + 1) % players.length]);
  };

  // Map tokens into grid
  const tokensByCell = useMemo(() => {
    const map = {};
    players.forEach((p) => {
      tokens[p].forEach((t) => {
        if (t.status === "home") {
          const slot = HOME_SLOT_COORDS[p][t.homeIndex];
          const key = `${slot.r}-${slot.c}`;
          (map[key] = map[key] || []).push(t);
        } else if (t.status === "onboard" && t.pos) {
          const key = `${t.pos.r}-${t.pos.c}`;
          (map[key] = map[key] || []).push(t);
        }
      });
    });
    return map;
  }, [tokens]);

  return (
    <div style={{ padding: 18 }}>
      <BoardGrid
        tokensByCell={tokensByCell}
        turn={turn}
        selectedToken={selectedToken}
        onTokenClick={handleTokenClick}
      />
    </div>
  );
}
