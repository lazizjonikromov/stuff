import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice';

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";

const customMiddleware = [apiSlice.middleware];

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
      immutableCheck: false, 
    }).concat(customMiddleware),
  devTools: true,
});
