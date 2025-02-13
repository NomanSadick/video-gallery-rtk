import { useGetRelatedVideosQuery } from "@/features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ id, title }) {
    const { data: relatedVideos, isLoading, isError } = useGetRelatedVideosQuery({ id, title });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;
    if (!relatedVideos || relatedVideos.length === 0) return <p>No related videos found!</p>;

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {relatedVideos.map(video => (
                <RelatedVideo key={video.id} video={video} />
            ))}
        </div>
    );
}
