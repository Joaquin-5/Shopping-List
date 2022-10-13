import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, ShopCartItem } from "../../interfaces";

export interface CartState {
  items: ShopCartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      console.log(action.payload);
      state.items = [...state.items.map((i) => {
        if (action.payload._id === i._id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return { ...action.payload, quantity: 1 };
        // state.items = [...state.items, { ...action.payload, quantity: 1 }];
      })];

      // state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
