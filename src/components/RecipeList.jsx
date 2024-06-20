import React from "react";
import "./RecipeList.css";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list-container">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/details/${recipe.id}`}
          className="recipe-item"
          style={{ textDecoration: "none" }}
        >
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
