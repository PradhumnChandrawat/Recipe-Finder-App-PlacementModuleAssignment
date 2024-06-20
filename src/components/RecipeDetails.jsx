import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <p>No recipe details available.</p>;

  return (
    <div className="details-container">
      <h1 className="details-title">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="details-image" />
      <div className="recipe-meta">
        <span>Ready in {recipe.readyInMinutes} minutes</span>
        <span>Serves: {recipe.servings}</span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>
        {recipe.instructions || "Follow the link for detailed instructions."}
      </p>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default RecipeDetails;
