
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition transform">
      
        <img
          className="w-screen h-48 sm:h-56 md:h-64 object-cover"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <div className="px-4 py-4 text-center">
          <h2 className="text-xl font-bold mb-2">{recipe.strMeal}</h2>
          <p className="text-gray-700 text-sm">{recipe.strCategory}</p>
        </div>
      </div>
    </Link>
  );
}