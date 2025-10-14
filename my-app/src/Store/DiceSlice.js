import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    rollDice: (state) => {
      state.value = Math.floor(Math.random() * 6) + 1;
    },
    setDiceValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { rollDice, setDiceValue } = diceSlice.actions;
export default diceSlice.reducer;
