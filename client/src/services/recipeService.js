import axios from "axios";
import { API_URL } from "../constants";

async function searchRecipes(searchTerm, page) {
  try {
    const response = await axios.get(`${API_URL}/api/recipes/search`, {
      params: {
        searchTerm: searchTerm,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to search recipes: " + error.message);
  }
}

async function getRecipeSummary(recipeId) {
  try {
    const response = await axios.get(
      `${API_URL}/api/recipes/${recipeId}/summary`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to get recipe summary: " + error.message);
  }
}

async function getRandomRecipes(numberOfRecipes = 6) {
  try {
    const response = await axios.get(`${API_URL}/api/recipes/random`, {
      params: {
        number: numberOfRecipes,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get random recipes: " + error.message);
  }
}

export { getRandomRecipes, getRecipeSummary, searchRecipes };
