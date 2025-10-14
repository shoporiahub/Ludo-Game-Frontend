// src/components/AnimatedToken.jsx
import React, { useEffect, useState } from "react";
import { COLORS, cellSize } from "./utils/constants";

export default function AnimatedToken({ token, turn, onClick }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Update pixel position whenever pathPos changes
  useEffect(() => {
    if (!token.pathPos) return;

    setPos({
      x: token.pathPos.c * cellSize,
      y: token.pathPos.r * cellSize,
    });
  }, [token.pathPos]);

  return (
    <div
      onClick={() => onClick && onClick(token)}
      style={{
        position: "absolute",
        width: cellSize - 4,
        height: cellSize - 4,
        borderRadius: "50%",
        background: COLORS[token.player],
        left: pos.x + 2,
        top: pos.y + 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: token.player === turn ? "pointer" : "not-allowed",
        transition: "all 0.3s ease", // smooth movement
        zIndex: 10,
      }}
    />
  );
}
