// src/components/CellComponents/SafeStar.jsx
import React from "react";
import { COLORS } from "../utils/constants";
import StarIcon from "../StarIcon/StarIcon";

export default function SafeStar({ color }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}
    >
      <div
        style={{
          background: COLORS[color],
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StarIcon />
      </div>
    </div>
  );
}
