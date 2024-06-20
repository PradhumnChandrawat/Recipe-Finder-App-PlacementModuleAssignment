import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import { fetchRecipeById } from "../api/recipeapi";

const DetailsPage = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        alert("Failed to load recipe details.");
      }
    };

    loadRecipeDetails();
  }, [id]);

  return (
    <div>{recipe ? <RecipeDetails recipe={recipe} /> : <p>Loading...</p>}</div>
  );
};

export default DetailsPage;
