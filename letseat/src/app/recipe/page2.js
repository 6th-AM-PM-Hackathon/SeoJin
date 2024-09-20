import fs from 'fs';
import path from 'path';
import RecipeSearch from '/components/RecipeSearch'; // RecipeSearch 컴포넌트 불러오기

export default function Home() {
  // JSON 파일 경로 수정
  const recipeFilePath = path.join('C:\Users\OneDrive\바탕 화면\ampm실습3/SeoJin/letseat/src/app/recipe', 'recipe.json');
  const fileContents = fs.readFileSync(recipeFilePath, 'utf8');
  const recipes = JSON.parse(fileContents); // JSON 파일을 객체로 변환

  return <RecipeSearch recipes={recipes} />;
}
