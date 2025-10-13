// src/components/Token.jsx
import React from "react";
import { COLORS } from "../utils/constants";
import redIcon from "../assets/greenIcon.png";
import greenIcon from "../assets/redIcon.png";
import yellowIcon from "../assets/yellowIcon.png";
import blueIcon from "../assets/blueIcon.png";

const ICONS = {
  red: redIcon,
  green: greenIcon,
  yellow: yellowIcon,
  blue: blueIcon,
};

export default function Token({ token, turn, selected, onClick }) {
  const icon = ICONS[token.player];

  return (
    <div
      onClick={() => onClick(token)}
      title={`${token.id} (${token.status})`}
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: token.player === turn ? "pointer" : "not-allowed",
        boxShadow: selected
          ? "0 0 0 3px rgba(0,0,0,0.15)"
          : "0 0 2px rgba(0,0,0,0.1)",
        border: `2px solid ${COLORS[token.player]}`,
        overflow: "hidden",
      }}
    >
      <img
        src={icon}
        alt={token.player}
        style={{
          width: "50%",
          height: "50%",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
