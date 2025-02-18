"use client";
import { useGetVideoByIdQuery } from "@/features/api/apiSlice";
import Form from "./Form";
import { useParams } from "next/navigation";
import Error from "../ui/Error";

export default function EditVideo() {
  const params = useParams();
    const videoId = params?.id as string; // ✅ `id` কে `string` হিসেবে কনভার্ট করা হচ্ছে
    
    const {
      data: video,
      isLoading,
      isError,
      // error,
      // error,
    } = useGetVideoByIdQuery(videoId);
    if(isLoading) return <p>Loading...</p>
    if ((!isLoading && isError)) {
      return <Error message = "There was an error"/>
      
    }
    if(!isLoading && !isError && video?.videoId)return <p>Video found...</p>
   
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit video
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit video
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Form video={video}/>
        </div>
      </div>
    </div>
  );
}
