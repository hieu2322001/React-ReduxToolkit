import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, createProduct, fetchProduct } from "./productActions"

const initialState = [
];

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return [...action.payload];
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            return [...state, ...action.payload];
        });
    }
})

export const productReducer = productSlice.reducer;