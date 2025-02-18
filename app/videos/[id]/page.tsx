"use client";

import { useGetVideoByIdQuery } from "@/features/api/apiSlice";
import { useParams } from "next/navigation"; // ✅  useParams
import Player from "@/components/video/Player";
import Description from "@/components/video/Description";
import RelatedVideos from "@/components/video/related/RelatedVideos";
import PlayerLoader from "@/components/ui/loaders/PlayerLoader";
import DescriptionLoader from "@/components/ui/loaders/DescriptionLoader";
import Error from "@/components/ui/Error";
// import RelatedVideoLoader from "@/components/ui/loaders/RelatedVideoLoader";

const VideoDetail = () => {
  const params = useParams();
  const videoId = params?.id as string; // ✅ `id` কে `string` হিসেবে কনভার্ট করা হচ্ছে
  // console.log("Video ID:", videoId);
  const {
    data: video,
    isLoading,
    isError,
    // error,
    // error,
  } = useGetVideoByIdQuery(videoId);
  // console.log("Fetched Video Data:", video);

  // console.log(error);

  if (isLoading) {
    return (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    return <Error />;
  }

  if (!isLoading && !isError && video?.videoId) {
    return (
      <>
        <Player />
        <Description />
      </>
    );
  }

  // console.log(content);

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <>
              <Player link={video.link} title={video.title} />
              <Description video={video} />
            </>
          </div>
          <RelatedVideos id={video.id} title={video.title}/>
        </div>
      </div>
    </section>
  );
};

export default VideoDetail;
