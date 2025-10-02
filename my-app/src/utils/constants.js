// src/utils/constants.js
export const GRID = 15;

export const players = ["red", "green", "yellow", "blue"];

export const COLORS = {
  red: "#ef4444",
  green: "#10b981",
  yellow: "#f59e0b",
  blue: "#3b82f6",
};

export const cellSize = 24;

// Home token slots inside each 6x6 home area
export const HOME_SLOT_COORDS = {
  red: [
    { r: 1, c: 1 },
    { r: 1, c: 4 },
    { r: 4, c: 1 },
    { r: 4, c: 4 },
  ],
  green: [
    { r: 1, c: 10 },
    { r: 1, c: 13 },
    { r: 4, c: 10 },
    { r: 4, c: 13 },
  ],
  yellow: [
    { r: 10, c: 10 },
    { r: 10, c: 13 },
    { r: 13, c: 10 },
    { r: 13, c: 13 },
  ],
  blue: [
    { r: 10, c: 1 },
    { r: 10, c: 4 },
    { r: 13, c: 1 },
    { r: 13, c: 4 },
  ],
};

// Temporary start coords (later replaced by full track)
export const START_COORDS = {
  red: { r: 6, c: 6 },
  green: { r: 6, c: 8 },
  yellow: { r: 8, c: 8 },
  blue: { r: 8, c: 6 },
};
