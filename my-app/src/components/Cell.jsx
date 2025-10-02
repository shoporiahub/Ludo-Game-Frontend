// src/components/Cell.jsx
import React from "react";
import { COLORS, START_COORDS } from "../utils/constants";
import Token from "./Token";

export default function Cell({ r, c, type, tokens, turn, selectedToken, onTokenClick }) {
  const isHomeCorner = type.startsWith("home-");
  const bg =
    type === "center"
      ? "#ffffff"
      : type === "path"
      ? "#fff"
      : isHomeCorner
      ? COLORS[type.split("-")[1]]
      : "#fff";

  const border = isHomeCorner
    ? "2px solid rgba(0,0,0,0.08)"
    : "1px solid rgba(0,0,0,0.06)";

  return (
    <div
      style={{
        background: bg,
        border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Tokens */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
        {tokens.map((t) => (
          <Token
            key={t.id}
            token={t}
            turn={turn}
            selected={selectedToken === t.id}
            onClick={onTokenClick}
          />
        ))}
      </div>

      {/* Debug: show start markers */}
      {Object.entries(START_COORDS).map(([p, coord]) => {
        if (coord.r === r && coord.c === c) {
          return (
            <div
              key={`start-${p}`}
              style={{
                position: "absolute",
                right: 4,
                bottom: 4,
                fontSize: 10,
                background: "rgba(255,255,255,0.8)",
                padding: "2px 4px",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.06)",
                color: COLORS[p],
              }}
            >
              ↳ {p}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
