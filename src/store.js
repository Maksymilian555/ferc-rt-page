import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/ShopPage/productsSlice"

export default configureStore({
    reducer: {
        products: productsReducer,
    },
});