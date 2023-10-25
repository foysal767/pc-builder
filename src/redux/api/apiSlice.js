import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-web-app-server.vercel.app",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
