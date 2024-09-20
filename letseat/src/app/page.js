import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
      {/* 로고 이미지 위에 배치 */}
      <img src="/images/logo.png" alt="로고" className="w-52 mb-2" />
      
      {/* 검색창과 버튼 */}
      <div className="flex items-center mb-2">
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

      {/* 재료 버튼 배치 */}
      <div className="w-full flex justify-center mb-2">
        <Link href="/filter">
          <button className="w-24 h-12 bg-sky-500 text-white rounded-lg hover:bg-sky-300 focus:ring-1 focus:ring-black">
            재료
          </button>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-full h-20 bg-gray-200 rounded-lg flex justify-around items-center mb-10">
          <Link href="/mine">
            <p className="text-lg font-bold hover:underline cursor-pointer">나만의 레시피</p>
          </Link>
          <Link href="/recipezip">
            <p className="text-lg font-bold hover:underline cursor-pointer">레시피 모음</p>
          </Link>
          <Link href="/mypage">
            <p className="text-lg font-bold hover:underline cursor-pointer">마이페이지</p>
          </Link>
        </div>
      </div>

      {/* 오늘의 추천 레시피 섹션 추가 */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">오늘의 추천 레시피</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <img src="/images/kimchi.png" alt="김치찌개" className="w-full h-80 object-cover rounded" />
            <p className="mt-2">김치찌개</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/egg.jpg" alt="계란말이" className="w-full h-80 object-cover rounded" />
            <p className="mt-2">계란말이</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/eomuk.png" alt="어묵볶음" className="w-full h-80 object-cover rounded" />
            <p className="mt-2">어묵볶음</p>
          </div>
        </div>
      </div>
    </div>
  );
}
