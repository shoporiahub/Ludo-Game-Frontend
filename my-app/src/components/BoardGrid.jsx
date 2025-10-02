// src/components/BoardGrid.jsx
import React from "react";
import { GRID, cellSize } from "../utils/constants";
import { getCellType } from "../utils/helpers";
import Cell from "./Cell";

export default function BoardGrid({ tokensByCell, turn, selectedToken, onTokenClick }) {
  const cells = [];
  for (let r = 0; r < GRID; r++) {
    for (let c = 0; c < GRID; c++) {
      const key = `${r}-${c}`;
      const type = getCellType(r, c);
      const tokens = tokensByCell[key] || [];
      cells.push(
        <Cell
          key={key}
          r={r}
          c={c}
          type={type}
          tokens={tokens}
          turn={turn}
          selectedToken={selectedToken}
          onTokenClick={onTokenClick}
        />
      );
    }
  }

  return (
    <div
      style={{
        width: GRID * cellSize,
        height: GRID * cellSize,
        display: "grid",
        gridTemplateColumns: `repeat(${GRID}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${GRID}, ${cellSize}px)`,
      }}
    >
      {cells}
    </div>
  );
}
