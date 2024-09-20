import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-gray-50 overflow-hidden">
      <div className="w-full h-4000 flex justify-center m-12">
        <input type="text" className="w-450 h-12 px-3 border border-gray-400 rounded-lg focus:ring-black" placeholder="검색어를 입력하세요"/>
        <Link href="/recipe">
          <button className="w-24 h-12 bg-sky-500 text-white rounded-lg hover:bg-sky-300 focus:ring-1 focus:ring-black">
            검색
          </button>
        </Link>
      </div>
    </div>
  );
}
