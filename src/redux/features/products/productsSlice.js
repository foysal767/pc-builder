const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    return product;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allProducts: (state) => {
      state.products;
    },
    allCategories: (state) => {
      state.categories;
    },
  },
});

export const { allProducts, allCategories } = productsSlice.actions;
export default productsSlice.reducer;
