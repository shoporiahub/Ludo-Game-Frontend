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
    { r: 2, c: 2},
    { r: 2, c: 3 },
    { r: 3, c: 2 },
    { r: 3, c: 3 },
  ],
  green: [
    { r: 2, c: 11 },
    { r: 2, c: 12 },
    { r: 3, c: 11 },
    { r: 3, c: 12 },
  ],
  yellow: [
    { r: 11, c: 11 },
    { r: 11, c: 12 },
    { r: 12, c: 11 },
    { r: 12, c: 12 },
  ],
  blue: [
    { r: 11, c: 2 },
    { r: 11, c: 3  },
    { r: 12, c: 2 },
    { r: 12, c: 3 },
  ],
};

export const START_COORDS = {
  red: { r: 6, c: 2 },
  green: { r: 2, c: 8 },
  yellow: { r: 8, c: 12 },
  blue: { r: 12, c: 6 },
};

export const SAFE_CELLS = [
  { r: 1, c: 8, color: "green" },
  { r: 3, c: 6, color: "red" },
  { r: 13, c: 6, color: "blue" },
  { r: 8, c: 13, color: "yellow" },
  { r: 6, c: 1, color: "red" },
  { r: 6, c: 12, color: "green" },
  { r: 12, c: 8, color: "yellow" },
  { r: 8, c: 2, color: "blue" },
];

// src/utils/constants.js

export const CUSTOM_CELL_COLORS = [
  { r: 7, c: 6, color: "red" },
  { r: 7, c: 8, color: "yellow" },
  { r: 8, c: 7, color: "blue" },
  { r: 6, c: 7, color: "green" },
  {
    r: 7,
    c: 7,
    fourColors: true,
    color1: "green",
    color2: "blue",
    color3: "red", 
    color4: "yellow"
  },
  { r: 6, c: 6, diagonal: true, color1: "green", color2: "red", diagonalDir: "br-tl" },
  { r: 8, c: 6, diagonal: true, color1: "red", color2: "blue", diagonalDir: "tl-br" },
  { r: 6, c: 8, diagonal: true, color1: "green", color2: "yellow", diagonalDir: "tl-br" },
  { r: 8, c: 8, diagonal: true, color1: "yellow", color2: "blue", diagonalDir: "br-tl" },
];
