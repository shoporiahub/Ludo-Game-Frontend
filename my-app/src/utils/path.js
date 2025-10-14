// each player’s “starting position index” (first step on board)


export const START_INDEX = {
    red: 0,
    green: 13,
    yellow: 26,
    blue: 39,
};

// utils/ludoPaths.js
export const MAIN_PATH = [
    { r: 6, c: 1 }, { r: 6, c: 2 }, { r: 6, c: 3 }, { r: 6, c: 4 }, { r: 6, c: 5 }, //// first path 
    { r: 5, c: 6 }, { r: 4, c: 6 }, { r: 3, c: 6 }, { r: 2, c: 6 }, { r: 1, c: 6 }, { r: 0, c: 6 },  //// second path
    { r: 0, c: 7 }, { r: 0, c: 8 }, //// third path
    { r: 1, c: 8 }, { r: 2, c: 8 }, { r: 3, c: 8 }, { r: 4, c: 8 }, { r: 5, c: 8 }, //// fourth path
    { r: 6, c: 9 }, { r: 6, c: 10 }, { r: 6, c: 11 }, { r: 6, c: 12 }, { r: 6, c: 13 }, { r: 6, c: 14 }, /// fifth path
    { r: 7, c: 14 }, { r: 8, c: 14 }, /// sixth path
    { r: 8, c: 13 }, { r: 8, c: 12 }, { r: 8, c: 11 }, { r: 8, c: 10 }, { r: 8, c: 9 }, /// seventh path
    { r: 9, c: 8 }, { r: 10, c: 8 }, { r: 11, c: 8 }, { r: 12, c: 8 }, { r: 13, c: 8 }, { r: 14, c: 8 }, /// eighth path
    { r: 14, c: 7 }, { r: 14, c: 6 }, // ninth path
    { r: 13, c: 6 }, { r: 12, c: 6 }, { r: 11, c: 6 }, { r: 10, c: 6 }, { r: 9, c: 6 },  /// tenth path
    { r: 8, c: 5 }, { r: 8, c: 4 }, { r: 8, c: 3 }, { r: 8, c: 2 }, { r: 8, c: 1 }, { r: 8, c: 0 }, // eleventh path
    { r: 7, c: 0 }, { r: 6, c: 0 }, // twelfth path
];

export const HOME_PATHS = {
    red: [
        { r: 7, c: 1 }, { r: 7, c: 2 }, { r: 7, c: 3 }, { r: 7, c: 4 },
        { r: 7, c: 5 }, { r: 7, c: 6 }
    ],
    green: [
        { r: 1, c: 7 }, { r: 2, c: 7 }, { r: 3, c: 7 }, { r: 4, c: 7 },
        { r: 5, c: 7 }, { r: 6, c: 7 }
    ],
    yellow: [
        { r: 7, c: 13 }, { r: 7, c: 12 }, { r: 7, c: 11 }, { r: 7, c: 10 },
        { r: 7, c: 9 }, { r: 7, c: 8 },
    ],
    blue: [
        { r: 13, c: 7 }, { r: 12, c: 7 }, { r: 11, c: 7 }, { r: 10, c: 7 },
        { r: 9, c: 7 }, { r: 8, c: 7 },
    ],
};

