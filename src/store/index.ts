import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

export const store:any = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;