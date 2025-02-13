import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png"; // Assuming the image is in the 'public' folder or properly imported

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-200 shadow-md w-full mx-auto flex justify-center items-center">
      <div className=" w-[80%] px-5 lg:px-0 flex justify-between py-3 items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Learn with Sumit"
            width={400}  
            height={400} 
            className="w-full h-auto"
          />
        </Link>
        <Link
          href="/videos/add"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          + Add Video
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
