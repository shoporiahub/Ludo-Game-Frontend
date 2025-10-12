// src/components/CellComponents/SingleColorCell.jsx
import React from "react";
import { COLORS } from "../../utils/constants";

export default function SingleColorCell({ color }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: COLORS[color] || color
      }}
    />
  );
}
