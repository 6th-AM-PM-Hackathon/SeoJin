'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterRecipePage = () => {
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', steps: '', likes: 0 });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value
    });
  };

  const handleAddRecipe = () => {
    let savedRecipes = JSON.parse(localStorage.getItem('recipe')) || [];
    savedRecipes.push({ ...newRecipe, id: savedRecipes.length + 1 });
    localStorage.setItem('recipe', JSON.stringify(savedRecipes));

    // Reset input values and navigate
    setNewRecipe({ name: '', ingredients: '', steps: '', likes: 0 });
    alert('레시피가 등록되었습니다!');
    router.push('/recipezip');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-black-700 mb-6">나만의 레시피 등록</h1>

        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="레시피 이름"
            value={newRecipe.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="ingredients"
            placeholder="재료 (쉼표로 구분)"
            value={newRecipe.ingredients}
            onChange={handleInputChange}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          <textarea
            name="steps"
            placeholder="조리 방법 (.으로 구분)"
            value={newRecipe.steps}
            onChange={handleInputChange}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black-500"
            rows="5"
          />
          <button
            onClick={handleAddRecipe}
            className="w-full px-4 py-2 bg-sky-500 text-white font-semibold rounded hover:bg-blue-300 transition duration-300"
          >
            레시피 등록
          </button>
        </div>

        <div className="text-center">
          <Link href="/recipezip" className="text-blue-800 hover:underline font-medium">
            등록된 레시피 보기
          </Link>
        </div>
        <div className='text-center mt-6'>
          <Link href="/" className='text-blue-800 hover:underline font-medium'>
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecipePage;
