// src/Slices/TokenSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialTokens = {
  red: [],
  green: [],
  yellow: [],
  blue: [],
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState: initialTokens,
  reducers: {
    setTokens: (state, action) => {
      return action.payload;
    },
    moveToken: (state, action) => {
      const { player, tokenId, newPos } = action.payload;
      const token = state[player].find(t => t.id === tokenId);
      if (token) token.position = newPos;
    },
  },
});

export const { setTokens, moveToken } = tokenSlice.actions;
export default tokenSlice.reducer;
