  import { createSlice } from "@reduxjs/toolkit";

  // --- Define 4 tokens for each color ---
  const generateInitialTokens = (player) => {
    return Array(4)
      .fill(null)
      .map((_, index) => ({
        id: `${player}_token_${index + 1}`,
        player,
        position: null,   // null = inside home
        status: "home",   // can be 'home', 'active', 'completed'
        stepsMoved: 0,    // number of steps moved on board
      }));
  };

  const initialTokens = {
    red: generateInitialTokens("red"),
    green: generateInitialTokens("green"),
    yellow: generateInitialTokens("yellow"),
    blue: generateInitialTokens("blue"),
  };

  const tokenSlice = createSlice({
    name: "tokens",
    initialState: initialTokens,
    reducers: {
      // Replace all tokens (useful for game reset)
      setTokens: (state, action) => {
        return action.payload;
      },

      // Move one token to a new position
      moveToken: (state, action) => {
        const { player, tokenId, newPos, stepsMoved } = action.payload;
        const token = state[player].find((t) => t.id === tokenId);
        if (token) {
          token.position = newPos;
          token.stepsMoved = stepsMoved ?? token.stepsMoved;
          token.status = "active";
        }
      },

      // Mark a token as completed when it reaches final cell
      completeToken: (state, action) => {
        const { player, tokenId } = action.payload;
        const token = state[player].find((t) => t.id === tokenId);
        if (token) {
          token.status = "completed";
          token.position = null;
        }
      },

      // Reset all tokens to initial home position
      resetTokens: () => initialTokens,
    },
  });

  export const { setTokens, moveToken, completeToken, resetTokens } =
    tokenSlice.actions;

  export default tokenSlice.reducer;
