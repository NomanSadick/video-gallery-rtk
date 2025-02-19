import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
    //  // Your API base URL
  }),
  tagTypes: ["Videos", "Video", "RelatedVideos"],
  endpoints: (builder) => ({
    // Fetch all videos
    getVideos: builder.query({
      query: () => "/videos",
      providesTags: ["Videos"],
    }),
    // Fetch a specific video by ID
    getVideoById: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }], // Endpoint to fetch video by ID
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideos", id: arg.id },
    ],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: `/videos`,
        method: 'POST',
        body: data,
      }), 
      invalidatesTags: ["Videos"]// Endpoint to fetch video by ID
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
          url: `/videos/${id}`,
          method: "PATCH",
          body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
    ], // Endpoint to fetch video by ID
  })
  }),
});

// Export hooks for both queries
export const { useGetVideosQuery, useGetVideoByIdQuery, useGetRelatedVideosQuery, useEditVideoMutation, useAddVideoMutation } = apiSlice;
