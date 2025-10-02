// src/components/Token.jsx
import React from "react";
import { COLORS } from "../utils/constants";

export default function Token({ token, turn, selected, onClick }) {
  return (
    <div
      onClick={() => onClick(token)}
      title={`${token.id} (${token.status})`}
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: COLORS[token.player],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 11,
        fontWeight: 700,
        cursor: token.player === turn ? "pointer" : "not-allowed",
        boxShadow: selected ? "0 0 0 3px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {token.id.split("-")[1]}
    </div>
  );
}
