import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart'
import { uiSlice } from './ui'
import { dataSlice } from './data/dataSlice';
import { historySlice } from './history';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    data: dataSlice.reducer,
    history: historySlice.reducer
  }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch 