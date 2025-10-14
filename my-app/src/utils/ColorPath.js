import { MAIN_PATH, HOME_PATHS, START_INDEX } from './path';

export const getFullPath = (color) => {
  const startIndex = START_INDEX[color];
  const rotatedPath = [
    ...MAIN_PATH.slice(startIndex),
    ...MAIN_PATH.slice(0, startIndex),
  ];
  return [...rotatedPath, ...HOME_PATHS[color]];
};

// --- Prebuild all paths for convenience ---
export const PATHS = {
  red: getFullPath("red"),
  green: getFullPath("green"),
  yellow: getFullPath("yellow"),
  blue: getFullPath("blue"),
};
