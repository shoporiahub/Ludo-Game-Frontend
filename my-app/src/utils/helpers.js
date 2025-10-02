// src/utils/helpers.js

// Range check
export function isInRange(x, a, b) {
  return x >= a && x <= b;
}

// Decide cell type
export function getCellType(r, c) {
  if (isInRange(r, 0, 5) && isInRange(c, 0, 5)) return "home-red";
  if (isInRange(r, 0, 5) && isInRange(c, 9, 14)) return "home-green";
  if (isInRange(r, 9, 14) && isInRange(c, 9, 14)) return "home-yellow";
  if (isInRange(r, 9, 14) && isInRange(c, 0, 5)) return "home-blue";

  if (isInRange(r, 6, 8) && isInRange(c, 6, 8)) return "center";

  if (r === 6 || r === 8 || c === 6 || c === 8) return "path";

  return "path";
}
