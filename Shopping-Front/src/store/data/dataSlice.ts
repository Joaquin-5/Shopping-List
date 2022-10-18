import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../interfaces";

interface CategoryState {
  categories: Category[];
  itemsSearch: Category[];
}

const initialState: CategoryState = {
  categories: [],
  itemsSearch: [],
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
  },
});

export const { setCategories, setItemsSearch } = dataSlice.actions;
