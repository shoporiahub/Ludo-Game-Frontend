// Range check
export function isInRange(x, a, b) {
  return x >= a && x <= b;
}

// Decide cell type
export function getCellType(r, c) {
  // 🏠 Home areas (6×6 corners)
  if (isInRange(r, 0, 5) && isInRange(c, 0, 5)) return "home-red";
  if (isInRange(r, 0, 5) && isInRange(c, 9, 14)) return "home-green";
  if (isInRange(r, 9, 14) && isInRange(c, 9, 14)) return "home-yellow";
  if (isInRange(r, 9, 14) && isInRange(c, 0, 5)) return "home-blue";

  // 🎯 Center (3×3 middle)
  if (isInRange(r, 6, 8) && isInRange(c, 6, 8)) return "center";

  // 🏁 Home paths (final colored stretch to center)
  // Red goes → right from column 0→5 in row 7
  if (r === 7 && isInRange(c, 1, 5)) return "homepath-red";
  // Green goes ↓ down from row 0→5 in column 7
  if (isInRange(r, 1, 5) && c === 7) return "homepath-green";
  // Yellow goes ← left from column 14→9 in row 7
  if (r === 7 && isInRange(c, 9, 13)) return "homepath-yellow";
  // Blue goes ↑ up from row 14→9 in column 7
  if (isInRange(r, 9, 13) && c === 7) return "homepath-blue";

  // 🧭 Regular outer white path
  if (r === 6 || r === 8 || c === 6 || c === 8) return "path";

  // Default
  return "path";
}
