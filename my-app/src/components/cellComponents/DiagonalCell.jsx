// src/components/CellComponents/DiagonalCell.jsx
import React from "react";
import { COLORS } from "../../utils/constants";

export default function DiagonalCell({ color1, color2, direction }) {
  let angle = "135deg"; // default top-left → bottom-right
  switch (direction) {
    case "tl-br": angle = "135deg"; break;
    case "tr-bl": angle = "45deg"; break;
    case "bl-tr": angle = "315deg"; break;
    case "br-tl": angle = "225deg"; break;
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(${angle}, ${COLORS[color1]} 50%, ${COLORS[color2]} 50%)`
      }}
    />
  );
}
