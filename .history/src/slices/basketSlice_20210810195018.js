import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log("addToBasket", action);
      console.log("state", state.items);
      const { id } = action.payload;
      if (state.items.indexOf(id) === -1) {
        state.items.push(action.payload);
      }
      else {
      state.items.splice(state.items.indexOf(id), 1);

      }
  },
    removeFromBasket: (state, action) => {
      // console.log("Action", action);
      // const index = state.items.findIndex(item => item.id === action.payload.id);
      
      // state.items = state.items.filter(item => item.id !== action.payload.id);
      // console.log("State.items", state.items);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
