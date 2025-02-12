import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000", // Your API base URL
  }),
  endpoints: (builder) => ({
    // Fetch all videos
    getVideos: builder.query({
      query: () => "/videos",
    }),
    // Fetch a specific video by ID
    getVideoById: builder.query({
      query: (videoId) => `/videos/${videoId}`, // Endpoint to fetch video by ID
    }),
  }),
});

// Export hooks for both queries
export const { useGetVideosQuery, useGetVideoByIdQuery } = apiSlice;
