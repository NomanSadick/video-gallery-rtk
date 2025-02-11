// Video Component
import Link from "next/link";
import Image from "next/image";

interface VideoProps {
  video: {
    id: string;
    title: string;
    duration: string;
    author: string;
    views: string;
    date: string;
    thumbnail: string;
  };
}

export default function Video({ video }: VideoProps) {
  const { id, title, duration, author, views, date, thumbnail } = video;
  console.log(video);

  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <div className="w-[80%]">
        <div className="col-span-1 mt-6">
          <div className="relative">
            <Image
              src={thumbnail}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt={title}
            />
            <div className="absolute bottom-2 right-2 bg-gray-900 text-gray-100 text-xs px-2 py-1 rounded">
              {duration}
            </div>
          </div>

          {/* Video Title and Description */}
          <div className="mt-4">
            <Link href={`/videos/${id}`}>
              <p className="text-slate-900 text-lg font-semibold">{title}</p>
            </Link>
            <span className="text-gray-400 text-sm">{author}</span>
            <p className="text-gray-400 text-xs mt-1">
              {views} views · {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
