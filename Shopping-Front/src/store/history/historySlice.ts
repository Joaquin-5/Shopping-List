import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../interfaces";

interface History {
  name: string,
  items: Item,
  status: 'cancelled' | 'completed' | 'pending',
  createdAt: string
}

interface HistoryResponse {
  date: string,
  lists: History[]
}

interface HistoryState {
  histories: HistoryResponse[]
}

const initialState: HistoryState = {
  histories: []
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    /* addList: (state, action) => {
      state.histories.push(action.payload);
    }, */
    getList: (state, action) => {
      state.histories = action.payload;
    }
  },
});

export const { getList } = historySlice.actions;