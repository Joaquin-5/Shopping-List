import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  showCart: boolean;
}

const initialState: UiState = {
  showCart: false,
};

export const uiSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeState: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});

export const { changeState } = uiSlice.actions;
