import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import productRecuer from './ProductSlice'

export const Store = configureStore({
  reducer: {
    card: cardReducer,
    // product:productRecuer,
  },
});
