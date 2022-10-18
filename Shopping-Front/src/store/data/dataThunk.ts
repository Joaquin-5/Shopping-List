import { Dispatch } from "@reduxjs/toolkit";
import { setCategories, setItemsSearch } from ".";
import { shoppingApi } from "../../api";
import { Category } from "../../interfaces";
import { RootState } from "../store";

export const startGetCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await shoppingApi.get("categories");
      dispatch(setCategories(response.data as Category[]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchItems = (search: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    if (search.trim().length === 0) {
      dispatch(setItemsSearch([]));
    } else {
      const categories = getState().data.categories;
      const itemsSearch = categories
        .map((category) => {
          return {
            ...category,
            items: category.items
              ? category.items.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              : [],
          };
        })
        .filter((category) => category.items.length > 0);
      dispatch(setItemsSearch(itemsSearch));
    }
  };
};
