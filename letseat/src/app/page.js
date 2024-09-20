import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-1200">
      <button className="w-80 h-38 outline-black ">
        <Link href={'/login'}>로그인하기</Link>
      </button>
    </div>
  );
}
