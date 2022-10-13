import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemButton } from "../../components/itemButton";
import {
  Category,
  Item,
  ShopCartCategory,
  ShopCartItem,
} from "../../interfaces";

export interface CartState {
  items: ShopCartCategory[];
}

interface AddItemAction {
  category: Category;
  item: Item;
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
    },
    editQuantityItem: (state, action: PayloadAction<ShopCartItem>) => {
      const category = state.items.find(
        (c) => c._id === action.payload.category._id
      );
      if (category) {
        const item = category.items.find((i) => i._id === action.payload._id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      }
    },
    deleteItemCart: (state, action: PayloadAction<ShopCartItem>) => {
      const category = state.items.find(
        (c) => c._id === action.payload.category._id
      );
      if (category) {
        const item = category.items.find((i) => i._id === action.payload._id);
        if (item) {
          category.items = category.items.filter(i => i._id !== action.payload._id);
        }
      }
    },
  },
});

export const { addItem, editQuantityItem, deleteItemCart } = cartSlice.actions;
