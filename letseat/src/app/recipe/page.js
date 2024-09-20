'use client';
import { useEffect, useState } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, name: "계란말이", ingredients: "계란, 물, 대파, 소금", steps: '계란 4개와 물을 섞는다. 대파를 썰어 파기름을 낸다. 약불에 계란물을 풀어준다. 익은 계란을 말고 나머지 계란물을 풀어주며 말아준다.' },
    { id: 2, name: "어묵볶음", ingredients: "어묵, 양파, 당근, 참깨, 식용유, 고춧가루, 간장, 참기름, 굴소스, 올리고당, 다진 마늘", steps: '양념장을 만든다. 어묵, 양파, 당근을 기름에 볶는다. 양념장과 함께 볶고 참깨를 뿌린다' },
    { id: 3, name: "김치찌개", ingredients: '김치, 포도씨유, 김치국물, 대파, 두부, 물, 참치, 설탕, 고춧가루, 다진 마늘, 멸치육수', steps: '김치 반포기를 썰어 넣고 포도씨유와 함께 볶는다. 이때 김치 국물과 고춧가루를 넣는다. 다진 마늘을 첨가하고 볶는다. 볶은 김치에 물(또는 멸치 육수)를 넣고 익힌다. 참치 또는 돼지고기를 넣고 끓인다. 두부와 대파를 넣는다.' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Update the filtered list whenever the search query changes
  useEffect(() => {
    setFilteredPosts(
      posts.filter(post =>
        post.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, posts]);

  return (
    <div className="container mx-auto p-6">
        
      <h1 className="text-2xl font-bold mb-4 flex justify-center">레시피 검색</h1>

      <div className="w-full flex flex-col items-center mt-8">
        {/* 검색창과 버튼 */}
        <div className="flex items-center mb-4">
          <img src="/images/logo.png" alt="로고" className="w-24 mr-4" /> {/* 로고 오른쪽에 여백 추가 */}
          <input
            type="text"
            className="w-96 h-12 px-3 border border-gray-400 rounded-lg focus:ring-black"
            placeholder="검색어를 입력하세요"
            value={searchQuery} // Bind the input to searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          />
          <button
            className="w-24 h-12 bg-sky-500 text-white rounded-lg hover:bg-sky-300 focus:ring-1 focus:ring-black ml-2" // 버튼 왼쪽 여백 추가
            onClick={() => setFilteredPosts(posts.filter(post =>
              post.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}
          >
            검색
          </button>
        </div>
      </div>

      {/* 필터된 레시피 목록 표시 */}
      <ul className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <li key={post.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.name}</h3>
              <p><strong>재료:</strong> {post.ingredients}</p>
              <p><strong>조리 방법:</strong></p>
              <ul className="list-decimal pl-6 space-y-2 text-gray-600">
                {post.steps.split('. ').map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p className="text-gray-500">해당 음식의 레시피를 찾을 수 없습니다.</p>
        )}
      </ul>
      
    </div>
  );
};

export default PostsPage;
