"use client";

import { useGetVideosQuery } from "@/features/api/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
import Video from "./videos/Video";
// import Video from "./Video";

// Define TypeScript interface for video data
interface VideoType {
  id: string;
  title: string;
  duration: string;
  author: string;
  views: string;
  date: string;
  thumbnail: string;
}

export default function Videos() {
  // Fetch videos using RTK Query
  const { data: videos, isLoading, isError } = useGetVideosQuery({});
  // console.log(videos);
  // Decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <VideoLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No videos found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video: VideoType) => (
      <Video key={video.id} video={video} />
    ));
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {content}
      </div>
    </div>
  );
}
