import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tokenSlice from "./functions/token";

const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
