import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemButton } from "../../components/itemButton";
import { Category, Item, ShopCartCategory, ShopCartItem } from "../../interfaces";

export interface CartState {
  items: ShopCartCategory[];
}

interface AddItemAction {
  category: Category,
  item: Item
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemAction>) => {
      const category = state.items.find(
        (c) => c._id === action.payload.category._id
      );
      if (category) {
        const item = category.items.find(
          (i) => i._id === action.payload.item._id
        );
        if (item) {
          item.quantity++;
        } else {
          category.items.push({
            ...action.payload.item,
            quantity: 1,
          });
        }
      } else {
        state.items.push({
          ...action.payload.category,
          items: [
            {
              ...action.payload.item,
              quantity: 1,
            },
          ],
        });
      }
    }
    /* addItem: (state, action: PayloadAction<Item>) => {
      console.log(action.payload);
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      // state.items.push(action.payload);
    }, */
  },
});

export const { addItem } = cartSlice.actions;
