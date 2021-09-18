import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import blogsSlice from "../features/blogsSlice";
import filtersSlice from "../features/filtersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    blogs: blogsSlice,
    filters: filtersSlice,
  },
});
