'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const RecipesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const defaultRecipes = [
      { id: 1, name: "계란말이", ingredients: "계란, 물, 대파, 소금", steps: '계란 4개와 물을 섞는다. 대파를 썰어 파기름을 낸다. 약불에 계란물을 풀어준다. 익은 계란을 말고 나머지 계란물을 풀어주며 말아준다.', likes: 0 },
      { id: 2, name: "어묵볶음", ingredients: "어묵, 양파, 당근, 참깨, 식용유, 고춧가루, 간장, 참기름, 굴소스, 올리고당, 다진 마늘", steps: '양념장을 만든다. 어묵, 양파, 당근을 기름에 볶는다. 양념장과 함께 볶고 참깨를 뿌린다.', likes: 0 },
      { id: 3, name: "김치찌개", ingredients: '김치, 포도씨유, 김치국물, 대파, 두부, 물, 참치, 설탕, 고춧가루, 다진 마늘, 멸치육수', steps: '김치 반포기를 썰어 넣고 포도씨유와 함께 볶는다. 이때 김치 국물과 고춧가루를 넣는다. 다진 마늘을 첨가하고 볶는다. 볶은 김치에 물(또는 멸치 육수)를 넣고 익힌다. 참치 또는 돼지고기를 넣고 끓인다. 두부와 대파를 넣는다.', likes: 0 }
    ];

    const savedRecipes = JSON.parse(localStorage.getItem('recipe')) || [];
    setPosts([...defaultRecipes, ...savedRecipes]);
  }, []);

  const deleteRecipe = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('recipe', JSON.stringify(updatedPosts.filter(post => post.id > 3))); // 기본 레시피 제외
  };

  const likeRecipe = (id) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('recipe', JSON.stringify(updatedPosts.filter(post => post.id > 3))); // 기본 레시피 제외
  };

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-3xl font-bold mb-6 text-center">등록된 레시피 목록</h1>

      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.name}</h3>
            <p className="text-lg text-gray-700 mb-2"><strong>재료:</strong> {post.ingredients}</p>
            <p className="text-lg text-gray-700"><strong>조리 방법:</strong></p>
            <ul className="list-decimal pl-6 space-y-2 text-gray-600">
              {post.steps.split('. ').map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => likeRecipe(post.id)}
                className="text-blue-600 hover:underline"
              >
                👍 좋아요 {post.likes}
              </button>
              
              <button
                onClick={() => deleteRecipe(post.id)}
                className="text-red-600 hover:underline"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center mt-6">
        <Link href="/mine" className="text-blue-800 hover:underline font-medium">
          레시피 등록하러 가기
        </Link>
      </div>
      <div className='text-center mt-6'>
        <Link href="/" className='text-blue-800 hover:underline font-medium'>
          홈으로 가기
        </Link>
      </div>
    </div>
  );
};

export default RecipesPage;
