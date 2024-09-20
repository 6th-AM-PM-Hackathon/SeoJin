import { useEffect, useState } from 'react';
import Link from 'next/link';

const RecipesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const defaultRecipes = [
      { id: 1, name: "계란말이", ingredients: "계란, 물, 대파, 소금", steps: '...', likes: 0 },
    ];
    setPosts(defaultRecipes);
  }, []);

  return (
    <div>
      <h1>레시피 목록</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.ingredients}</p>
            <p>{post.steps}</p>
          </li>
        ))}
      </ul>
      <Link href="/mine">레시피 등록하러 가기</Link>
      <Link href="/">홈으로 가기</Link>
    </div>
  );
};

export default RecipesPage;
