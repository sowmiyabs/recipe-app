import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => setRecipe(res.data.meals[0]));
  }, [id]);

  if (!recipe) return <div className="p-4">Loading...</div>;

  // Combine ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${measure} ${ingredient}`);
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-4" />
      <p className="mb-2"><strong>Category:</strong> {recipe.strCategory}</p>
      <p className="mb-2"><strong>Area:</strong> {recipe.strArea}</p>
      <p className="mb-4"><strong>Instructions:</strong> {recipe.strInstructions}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      {recipe.strYoutube && (
        <a href={recipe.strYoutube} target="_blank" className="text-blue-500 underline">Watch Video</a>
      )}
    </div>
  );
}