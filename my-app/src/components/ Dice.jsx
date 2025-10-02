// src/components/Dice.jsx
import React from "react";

export default function Dice({ dice, onRoll }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <button
        onClick={onRoll}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Roll Dice
      </button>
      <span style={{ marginLeft: 12, fontWeight: "bold" }}>Dice: {dice ?? "-"}</span>
    </div>
  );
}
