import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import productsReducer from "./features/products/productsSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export const wrapper = createWrapper(store);
