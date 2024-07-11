import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/ShopPage/productsSlice"
import newsReducer from "./features/NewsPage/newsSlice"

export default configureStore({
    reducer: {
        products: productsReducer,
        news: newsReducer,
    },
});