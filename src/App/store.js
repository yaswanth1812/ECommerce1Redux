import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/Sliderslice";
import productsReducer from "../features/slices/productSlice";
import cartSlice from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlice"



export const store = configureStore({
    reducer:{
        slider:sliderReducer,
        products:productsReducer,
        cart: cartSlice.reducer,
        user:authReducer,
    },
})