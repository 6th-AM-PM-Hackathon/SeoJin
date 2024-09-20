import Image from "next/image";
import Link from "next/link";

export default function My() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen h-12">
            <h1 className="text-2xl font-bold mb-6">마이페이지</h1>
            <div className="space-y-4 w-full max-w-md">
                <Link href="/login">
                    <button className="w-full h-12 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-200 focus:ring-2 focus:ring-blue-500">
                        개인정보 확인
                    </button>
                </Link>
                <hr />
                <Link href="/">
                    <button className="w-full h-12 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-200 focus:ring-2 focus:ring-blue-500">
                        찜한 레시피
                    </button>
                </Link>
                <hr />
                <Link href="/">
                    <button className="w-full h-12 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-200 focus:ring-2 focus:ring-blue-500">
                        최근 본 레시피
                    </button>
                </Link>
                <hr />
                <Link href="/">
                    <button className="w-full h-12 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-200 focus:ring-2 focus:ring-blue-500">
                        고객센터
                    </button>
                </Link>
            </div>
        </div>
    );
}
