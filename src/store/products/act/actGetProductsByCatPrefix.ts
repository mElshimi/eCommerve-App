import { IProduct } from "@interfaces/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<IProduct[]>(
        `/products?cat_prefix=${prefix}`
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          toast.error(error.response?.data.message || error.message)
        );
      } else {
        return rejectWithValue(toast.error("An unexpected error"));
      }
    }
  }
);

export default actGetProductsByCatPrefix;
