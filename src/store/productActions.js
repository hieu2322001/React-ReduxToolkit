import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "productSlice/fetchData",
  async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return error;
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "productSlice/deleteData",
  async ({ url, id }) => {
    console.log(id)
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      return data;
    } catch (error) { }
  }
);

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async ({ url, el }) => {
    try {
      const { data } = await axios.post(
              `${url}`,
              {
                 ...el,
              }
            );
    } catch (error) {}
  }
);

