import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../interfaces";

interface History {
  name: string,
  items: Item,
  status: 'cancelled' | 'completed' | 'pending',
  createdAt: string
}

interface HistoryState {
  histories: History[]
}

const initialState: HistoryState = {
  histories: []
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.histories.push(action.payload);
    }
  },
});

export const { addList } = historySlice.actions;