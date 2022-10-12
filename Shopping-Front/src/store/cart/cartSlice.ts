import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../interfaces";

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
  },
});

export const { } = cartSlice.actions;
