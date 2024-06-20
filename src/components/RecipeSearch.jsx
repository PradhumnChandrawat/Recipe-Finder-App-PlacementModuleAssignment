import React, { useState } from "react";
import "./RecipeSearch.css";
import { fetchRecipesByIngredients } from "../api/recipeapi";

const RecipeSearch = ({ onRecipesFetched }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSearch = async () => {
    if (!ingredients) return;
    try {
      const recipes = await fetchRecipesByIngredients(ingredients);
      onRecipesFetched(recipes);
    } catch (error) {
      alert("Failed to fetch recipes.");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma separated)..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default RecipeSearch;
