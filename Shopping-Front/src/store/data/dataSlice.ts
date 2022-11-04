import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Item } from "../../interfaces";

interface DataState {
  categories: Category[];
  itemsSearch: Category[];
  activeItem: Item | null;
}

const initialState: DataState = {
  categories: [],
  itemsSearch: [],
  activeItem: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setItemsSearch: (state, action: PayloadAction<Category[]>) => {
      state.itemsSearch = action.payload;
    },
    setActiveItem: (state, action: PayloadAction<Item>) => {
      state.activeItem = action.payload;
    }
  },
});

export const { setCategories, setItemsSearch, setActiveItem } = dataSlice.actions;
