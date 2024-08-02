import { ICartState } from "@interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors";

const initialState: ICartState = {
  items: {},
  productFullinfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export { getCartTotalQuantitySelector };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
