import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API slice
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

// Export hook
export const { useGetPostsQuery } = postsApi;
