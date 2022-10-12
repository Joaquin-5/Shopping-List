import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart'
import { uiSlice } from './ui'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch 