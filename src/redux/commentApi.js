import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://66d4c2b95b34bcb9ab3f682c.mockapi.io/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({ url: API_ENDPOINT }),
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (newComment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;
