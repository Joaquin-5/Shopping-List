import { Dispatch } from "@reduxjs/toolkit";
import { shoppingApi } from "../../api";
import { Item, ShopCartCategory } from "../../interfaces";
import { addList, getList } from "./historySlice";

export const startAddToList = (name: string, items: ShopCartCategory[]) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await shoppingApi.post('lists', {
                name,
                items
            })
            console.log(response);
            
            dispatch(addList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const startGetHistory = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await shoppingApi.get('lists');
            dispatch(getList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}