// src/components/HomeArea.jsx
import React from "react";
import { COLORS } from "../../utils/constants";

export default function HomeArea({ color }) {
  const fill = COLORS[color];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      {/* Colored main box */}
      <div
        style={{
          width: "70%",
          height: "70%",
          background: fill,
          borderRadius: "15%",
          border: "3px solid white",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "10%",
          padding: "10%",
          boxSizing: "border-box",
        }}
      >
        {/* 4 token spots */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              border: `2px solid ${fill}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
