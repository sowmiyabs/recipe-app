import { useEffect, useState } from "react";
import { getFavorites } from "../Utils/Local storage.js";
import axios from "axios";
import RecipeCard from "../components/Recipe card.jsx";

export default function Favorites() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favs = getFavorites();
      const resArr = await Promise.all(favs.map(id =>
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      ));
      setRecipes(resArr.map(r => r.data.meals[0]));
    };
    fetchFavorites();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl font-italiana mb-8">Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
      </div>
    </div>
  );
}