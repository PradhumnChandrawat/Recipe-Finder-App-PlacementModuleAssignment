import axios from "axios";

const API_KEY = "90807c9dcdf94ce6852df6c800274323";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipesByIngredients = async (ingredients) => {
  try {
    const response = await axios.get(`${BASE_URL}/findByIngredients`, {
      params: {
        ingredients,
        number: 10,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipes", error);
    throw error;
  }
};

export const fetchRecipeById = async (id, includeNutrition = false) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
        includeNutrition: includeNutrition,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch recipe details for ID ${id}`, error);
    throw error;
  }
};
