import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 overflow-hidden">
      {/* 검색창과 배너를 상단에 배치 */}
      <div className="w-full flex flex-col items-center mt-8">
        {/* 검색창과 버튼 */}
        <div className="flex justify-center mb-8">

          <input
            type="text"
            className="w-450 h-12 px-3 border border-gray-400 rounded-lg focus:ring-black"
            placeholder="검색어를 입력하세요"
          />
          <Link href="/recipe">
            <button className="w-24 h-12 bg-sky-500 text-white rounded-lg hover:bg-sky-300 focus:ring-1 focus:ring-black ml-2">
              검색
            </button>
          </Link>
        </div>
        
        {/* 하나의 배너 박스에 여러 링크 넣기 */}
        <div className="w-full h-20 bg-gray-200 rounded-lg flex justify-around items-center">
          {/* 나만의 레시피 */}
          <Link href="/mine">
            <p className="text-lg font-bold hover:underline cursor-pointer">나만의 레시피</p>
          </Link>
          {/* 레시피모음 */}
          <Link href="/recipezip">
            <p className="text-lg font-bold hover:underline cursor-pointer">레시피 모음</p>
          </Link>
          {/* 마이페이지 */}
          <Link href="/mypage">
            <p className="text-lg font-bold hover:underline cursor-pointer">마이페이지</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
