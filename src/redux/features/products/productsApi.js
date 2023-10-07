const { api } = require("@/redux/api/apiSlice");

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});
export const { useGetAllProductsQuery } = booksApi;
