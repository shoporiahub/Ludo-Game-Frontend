import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToken, completeToken } from "../Store/TokenSlice";
import { PATHS } from "../utils/ColorPath";
import { COLORS } from "../utils/constants";

import redIcon from "../assets/redIcon.png";
import greenIcon from "../assets/greenIcon.png";
import yellowIcon from "../assets/yellowIcon.png";
import blueIcon from "../assets/blueIcon.png";

const ICONS = {
  red: redIcon,
  green: greenIcon,
  yellow: yellowIcon,
  blue: blueIcon,
};

export default function Token({ token, turn }) {
  const dispatch = useDispatch();
  const diceValue = useSelector((state) => state.dice.value); // from dice slice
  const playerPath = PATHS[token.player]; // array of board coordinates for each color

  const handleClick = () => {
    console.log("Token clicked:", token);

    // --- Only current player's tokens are clickable ---
    if (token.player !== turn) return;
    if (token.status === "completed") return;

    // --- Case 1: Token is inside home ---
    if (token.status === "home") {
      if (diceValue === 6) {
        // Get first board index of the player path (their start cell)
        const startIndex = 0; // Usually first index of that player's PATH array

        dispatch(
          moveToken({
            player: token.player,
            tokenId: token.id,
            newPos: startIndex,
            stepsMoved: 0,
          })
        );
      } else {
        // Dice is not 6 → token cannot move out
        console.log("Need 6 to move token out of home");
      }
      return;
    }

    // --- Case 2: Token is active (already on board) ---
    if (token.status === "active") {
      const newSteps = token.stepsMoved + diceValue;
      const newPos = newSteps;

      // If token reaches or exceeds final position
      if (newPos >= playerPath.length - 1) {
        dispatch(completeToken({ player: token.player, tokenId: token.id }));
      } else {
        dispatch(
          moveToken({
            player: token.player,
            tokenId: token.id,
            newPos,
            stepsMoved: newSteps,
          })
        );
      }
    }
  };

  const icon = ICONS[token.player];
  console.log("icconnn",icon);
  

  return (
    <div
      onClick={handleClick}
      title={`${token.id} (${token.status})`}
      style={{
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor:
          token.player === turn && token.status !== "completed"
            ? "pointer"
            : "not-allowed",
        border: `2px solid ${COLORS[token.player]}`,
        boxShadow:
          token.player === turn
            ? "0 0 6px rgba(0,0,0,0.3)"
            : "0 0 2px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src={icon}
        alt={token.player}
        style={{
          width: "60%",
          height: "60%",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
