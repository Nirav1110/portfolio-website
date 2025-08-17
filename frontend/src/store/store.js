import { configureStore } from "@reduxjs/toolkit";
import travel from "./travelSlice";

export const store = configureStore({
  reducer: {
    travel,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
