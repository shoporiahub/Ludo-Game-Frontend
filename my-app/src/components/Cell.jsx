// src/components/Cell.jsx
import React from "react";
import { COLORS, SAFE_CELLS, CUSTOM_CELL_COLORS } from "../utils/constants";
import Token from "./Token";
import FourTriangles from "./cellComponents/fourTriangles";
import DiagonalCell from "./cellComponents/DiagonalCell";
import SingleColorCell from "./cellComponents/SingleColorCell";
import SafeStar from "./SafeStar";
import HomeArea from "./cellComponents/HomeArea";


// Home border helper
const isHomeBorderCell = (color, r, c) => {
  switch(color){
    case "red": return r === 0 || r === 5 || c === 0 || c === 5;
    case "green": return r === 0 || r === 5 || c === 9 || c === 14;
    case "yellow": return r === 9 || r === 14 || c === 9 || c === 14;
    case "blue": return r === 9 || r === 14 || c === 0 || c === 5;
    default: return false;
  }
};

export default function Cell({ r, c, type, tokens, turn, selectedToken, onTokenClick }) {
  const isHomeCorner = type.startsWith("home-");
  
  const homeColor = isHomeCorner ? type.split("-")[1] : null;

  const customCell = CUSTOM_CELL_COLORS?.find(cell => cell.r === r && cell.c === c);

  // Base background
  let backgroundStyle = {
    background: isHomeCorner 
      ? (isHomeBorderCell(homeColor, r, c) ? COLORS[homeColor] : "#fff")
      : type === "center" 
      ? "#fff" 
      : type.startsWith("homepath-") 
      ? COLORS[type.split("-")[1]] 
      : type === "path"
      ? "#fff"
      : "#fff"
  };

  const border = isHomeCorner ? "2px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.06)";
  const safeCell = SAFE_CELLS.find(cell => cell.r === r && cell.c === c);

  const isHomeCenter =
  (type === "home-red" && r === 2 && c === 2) ||
  (type === "home-green" && r === 2 && c === 12) ||
  (type === "home-yellow" && r === 12 && c === 12) ||
  (type === "home-blue" && r === 12 && c === 2);


  return (
    <div
      style={{
        ...backgroundStyle,
        border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box"
      }}
    >
      {/* Custom cell rendering */}
      {customCell?.fourColors && <FourTriangles colors={customCell} />}
      {customCell?.diagonal && !customCell.fourColors && (
        <DiagonalCell color1={customCell.color1} color2={customCell.color2} direction={customCell.diagonalDir} />
      )}
      {customCell && !customCell.diagonal && !customCell.fourColors && (
        <SingleColorCell color={customCell.color} />
      )}

      {/* Tokens */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 1 }}>
        {tokens.map(t => (
          <Token key={t.id} token={t} turn={turn} selected={selectedToken === t.id} onClick={onTokenClick} />
        ))}
      </div>

      {/* Safe Star */}
      {safeCell && <SafeStar color={safeCell.color} />}
      {/* {isHomeCenter && <HomeArea color={type.split("-")[1]} />} */}

    </div>
  );
}
