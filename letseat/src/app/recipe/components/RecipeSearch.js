'use client'; // 클라이언트 컴포넌트로 설정

import { useState } from 'react';

export default function RecipeSearch({ recipes }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchedRecipes, setMatchedRecipes] = useState([]);

  const allIngredients = [
    "소금", "맛소금", "미원", "식초", "참기름", "올리브유", "후추", "설탕", "조청", "레몬즙", "국간장", "진간장", "굴소스", "된장", "고추장", "초장", "멸치액젓", "멸치육수", "춘장", 
    "감자", "고구마", "청양고추", "페페론치노", "깻잎", "당근", "마늘", "양파", "양배추", "배추", "숙주나물", "시금치", "오이", "콩나물", "토마토", "청경채", "파프리카", 
    "쌀", "옥수수", "밀가루", "검은콩", "병아리콩", "완두", "소면", "파스타면", "당면", "우동면", 
    "삼겹살", "목살", "등심", "오리훈제", "채끝", "안심", "갈비", "계란", 
    "김", "다시마", "미역", "오징어", "주꾸미", "조개", "꽃게", "새우", "성게", "연어", "고등어", 
    "우유", "생크림", "버터", "치즈"
  ];

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient) ? prev.filter((ing) => ing !== ingredient) : [...prev, ingredient]
    );
  };

  const searchRecipes = () => {
    const filteredRecipes = recipes.filter((recipe) =>
      selectedIngredients.every((ingredient) => recipe.ingredients.includes(ingredient))
    );
    setMatchedRecipes(filteredRecipes);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-sky-500 mb-6">재료에 따른 레시피 검색</h1>

      <h3 className="text-xl font-semibold mb-4">재료 선택</h3>
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-md">
        {allIngredients.map((ingredient) => (
          <label key={ingredient} className="flex items-center space-x-2 cursor-pointer hover:bg-green-50 p-2 rounded">
            <input
              type="checkbox"
              value={ingredient}
              className="form-checkbox h-5 w-5 text-green-500"
              onChange={() => handleIngredientChange(ingredient)}
            />
            <span className="text-gray-800">{ingredient}</span>
          </label>
        ))}
      </div>

      <button
        onClick={searchRecipes}
        className="mt-6 px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-500 transition duration-300"
      >
        레시피 검색
      </button>

      <h3 className="text-xl font-semibold mt-8 mb-4">결과</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {matchedRecipes.length > 0 ? (
          matchedRecipes.map((recipe) => (
            <div key={recipe.name} className="mb-6 border-b pb-4">
              <h4 className="text-2xl font-bold text-sky-500 mb-2">{recipe.name} {recipe.is_verified && '✅'}</h4>
              <p className="text-gray-600 mb-2">{recipe.description}</p>
              <h5 className="text-lg font-semibold">재료:</h5>
              <ul className="list-disc list-inside mb-4">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="text-gray-800">{ing}</li>
                ))}
              </ul>
              <h5 className="text-lg font-semibold">조리 순서:</h5>
              <ol className="list-decimal list-inside text-gray-800">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-center">선택한 재료로 만들 수 있는 레시피가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
