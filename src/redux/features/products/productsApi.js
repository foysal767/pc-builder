const { api } = require("@/redux/api/apiSlice");

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    addPcBuilderProduct: builder.mutation({
      query: (product) => ({
        url: "/product",
        method: "POST",
        body: product,
      }),
    }),
  }),
});
export const { useGetAllProductsQuery, useAddPcBuilderProductMutation } =
  booksApi;
