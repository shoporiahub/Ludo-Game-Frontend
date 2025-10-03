// src/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slices/DiceValue';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
