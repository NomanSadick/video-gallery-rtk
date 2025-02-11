"use client";

import { useGetVideoByIdQuery } from "@/features/api/apiSlice";
import { useParams } from "next/navigation"; // ✅  useParams 
import Video from "@/components/videos/videos/Video";

const VideoDetail = () => {
  const params = useParams(); // ✅ URL থেকে `id` আনছে
  const videoId = params?.id as string; // ✅ `id` কে `string` হিসেবে কনভার্ট করা হচ্ছে

  const { data: video, isLoading, error } = useGetVideoByIdQuery(videoId);

  if (isLoading) return <p>Loading...</p>;
  if (error || !video) return <p>Error loading video.</p>;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[20%]">
        <Video video={video} />
      </div>
    </div>
  );
};

export default VideoDetail;
