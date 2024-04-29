import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./features/mainPage/mainSlice";

export default configureStore({
    reducer: {
        refs: mainReducer,
    },
});