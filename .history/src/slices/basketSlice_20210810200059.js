import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // const { id } = action.payload;
      // if (state.items.indexOf(id) === -1) {
      //   action.payload.quantity = 1;
      //   state.items.push(action.payload);
      // }
      // else {
      //  const item = state.items.splice(state.items.indexOf(id), 1);
      //  item.quantity = item.quantity + 1;
      //  state.items = state.items.map(obj => obj.id === id ? item : i);
      // }
      state.items = state.items.concat(action.payload);
  },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex
      if (index > -1) {
        state.items.splice(index, 1);
      }

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
