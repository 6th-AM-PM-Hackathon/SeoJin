import RecipeSearch from '../recipe/components/recipesearch';
import fs from 'fs';
import path from 'path';

// 이 파일은 Server Component로 기본 설정됩니다.
export default function Home() {
  // JSON 파일 경로를 설정합니다.
  const filePath = path.join(process.cwd(), 'src', 'app', 'recipe', 'recipe.json');
  
  // JSON 파일을 읽고 파싱합니다.
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const recipes = JSON.parse(jsonData);

  return (
    <div className="p-4 space-y-8">
      {/* RecipeSearch 컴포넌트를 사용해 레시피 검색 */}
      <RecipeSearch recipes={recipes} />
    </div>
  );
}