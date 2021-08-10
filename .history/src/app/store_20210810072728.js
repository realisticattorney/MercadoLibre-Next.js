import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//here we'll talk of slices to refer to reducers before 
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
