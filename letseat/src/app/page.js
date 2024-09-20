import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="w-full h-4000 overflow-hidden">
          <div className="w-full h-110 flex justify-center flex-row m-12">
          <input type="text" className="w-450 h-38 border-2"/>
          <button className="w-68 h-38 outline-black bg-gray-300">
            <Link href={'/recipe'}>검색</Link>
          </button>
          
          </div>
          </div>
  );
}
