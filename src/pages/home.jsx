import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/Recipe card.jsx";
import SearchBar from "../components/Search bar.jsx";
import Filters from "../components/Filters.jsx";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories
  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => setCategories(res.data.categories));
  }, []);

  // Fetch recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      if (selectedCategory) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
      }
      const res = await axios.get(url);
      setRecipes(res.data.meals || []);
    };
    fetchRecipes();
  }, [searchTerm, selectedCategory]);

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {recipes.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No recipes found.</p>
        ) : (
          recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        )}
      </div>
    </div>
  );
}