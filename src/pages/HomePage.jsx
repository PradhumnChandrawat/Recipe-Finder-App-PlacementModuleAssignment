import React, { useState } from "react";
import RecipeSearch from "../components/RecipeSearch";
import RecipeList from "../components/RecipeList";
import ".././index.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <RecipeSearch onRecipesFetched={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
