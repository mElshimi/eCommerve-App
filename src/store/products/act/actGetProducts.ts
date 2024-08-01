import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "@util/baseURL";
import axios from "axios";
import { toast } from "react-toastify";
import { IProduct } from "@interfaces/interfaces";

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<IProduct[]>(
        `${baseURL}/products`
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

export default actGetProducts;
