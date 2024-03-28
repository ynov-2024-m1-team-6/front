"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PanierState {
  items: string[];
}

const initialState: PanierState = {
  items: [],
};

export const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload.toString());
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item !== action.payload.toString()
      );
    },
    cleanCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, cleanCart } = panierSlice.actions;

export default panierSlice.reducer;
