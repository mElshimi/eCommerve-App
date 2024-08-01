import { IProducts } from "@interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";

const initialState: IProducts = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByCatPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const { productsCleanUp } = productsSlice.actions;
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
