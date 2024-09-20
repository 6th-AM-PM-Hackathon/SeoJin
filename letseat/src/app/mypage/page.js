import Image from "next/image";
import Link from "next/link";

export default function My() {
    return (
        <div>
            <Link href="/">
            <button className="w-50 h-12 rounded-lg hover:bg-gray-200 focus:ring-1 focus:ring-black">
            개인정보 확인
            </button>
        </Link><br></br>
        <hr></hr>
        <Link href="/">
            <button className="w-50 h-12 rounded-lg hover:bg-gray-200 focus:ring-1 focus:ring-black">
            찜한 레시피
            </button>
        </Link><br></br>
        <hr></hr>
        <Link href="/">
            <button className="w-50 h-12 rounded-lg hover:bg-gray-200 focus:ring-1 focus:ring-black">
            최근 본 레시피
            </button>
        </Link><br></br>
        <hr></hr>
        <Link href="/">
            <button className="w-50 h-12 rounded-lg hover:bg-gray-200 focus:ring-1 focus:ring-black">
            고객센터
            </button>
        </Link>
        </div>
    );
}