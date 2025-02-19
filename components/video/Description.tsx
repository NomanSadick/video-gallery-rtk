// "use client";
import Link from "next/link";
import deleteImage from "../../public/images/delete.svg";
import editImage from "../../public/images/edit.svg";
import Image from "next/image";
import { useDeleteVideoMutation } from "@/features/api/apiSlice";
import { useEffect } from "react";
import Error from "../ui/Error";
import { useRouter } from "next/navigation";

export default function Description({ video }) {
  const { title, date, id, description } = video;
  const router = useRouter();
  const [deleteVideo, { isSuccess, isLoading, isError }] = useDeleteVideoMutation();

  const handleDelete = () => {
    if (id) deleteVideo(id);
  };

  useEffect(() => {
    if (isSuccess && router) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <div className="flex gap-1">
            <div className="shrink-0">
              <Link href={`/videos/edit/${id}`}>
                <Image
                  src={editImage}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                  alt="Edit"
                />
              </Link>
            </div>
            <Link href={`/videos/edit/${id}`}>
              <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                Edit
              </span>
            </Link>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
            <div className="shrink-0">
              <Image
                src={deleteImage}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg"
                alt="Delete"
              />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
      {!isLoading && isError && (
        <Error message="There was an error deleting the video!" />
      )}
    </div>
  );
}