import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export type Products = { [id: string]: Product };
export interface ProductsState {
  products: Products;
}

const initialState: ProductsState = {
  products: {},
};

const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    productsRecieved(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { productsRecieved } = productsSlice.actions;
export default productsSlice.reducer;
