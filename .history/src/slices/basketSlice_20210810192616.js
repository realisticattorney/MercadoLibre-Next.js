import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //if action.payload.id in state.items, add 1 to quantity

      //else, add new item to state.items
   
      const { id } = action.payload;
      const newItems = state.items.map(item => {
        if (item.id === id) {
          item.quantity++;
        } else {
          state.items = [...state.items, action.payload];
          };
        }
        return item;
    },
    removeFromBasket: (state, action) => {
      console.log("Action", action);
      const index = state.items.findIndex(item => item.id === action.payload.id);
      
      state.items = state.items.filter(item => item.id !== action.payload.id);
      console.log("State.items", state.items);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
