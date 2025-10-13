// src/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import diceReducer from './DiceSlice.js';
import tokenReducer from './TokenSlice.js';
import turnReducer from './TurnSlice.js';

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    tokens: tokenReducer,
    turn: turnReducer,
  },
});
