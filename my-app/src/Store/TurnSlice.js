// src/Slices/TurnSlice.js
import { createSlice } from "@reduxjs/toolkit";

const PLAYERS = ["red", "green", "yellow", "blue"];

const turnSlice = createSlice({
  name: "turn",
  initialState: {
    currentPlayer: "red",
  },
  reducers: {
    nextTurn: (state) => {
      const currentIndex = PLAYERS.indexOf(state.currentPlayer);
      state.currentPlayer = PLAYERS[(currentIndex + 1) % PLAYERS.length];
    },
    setTurn: (state, action) => {
      state.currentPlayer = action.payload;
    },
  },
});

export const { nextTurn, setTurn } = turnSlice.actions;
export default turnSlice.reducer;
