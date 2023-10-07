const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allProducts: (state) => {
      state.products;
    },
  },
});
export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
