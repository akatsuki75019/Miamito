import axios from "axios";
import { API_KEY, REACT_APP_API_URL } from "../constants";

//https://spoonacular.com/food-api/docs#Search-Recipes
async function searchRecipes(query) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/recipes/complexSearch`,
			{
				params: {
					complexSearch: true,
					number: 10,
					query: query,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to search recipes: " + error.message);
	}
}

async function getRecipeSummary(recipeId) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/${recipeId}/summary`
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get recipe summary: " + error.message);
	}
}

//https://spoonacular.com/food-api/docs#Get-Recipe-Information
async function getRecipeInformations(recipeId) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/${recipeId}/information`
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get recipe informations: " + error.message);
	}
}

//https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions
async function getRecipeInstructions(recipeId) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/${recipeId}/analyzeInstructions`
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get recipe instructions: " + error.message);
	}
}

///mealplanner/generate?timeFrame=day
async function getMealPlan() {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/preloaded?limit=7`
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get meal plan: " + error.message);
	}
}

async function getRandomRecipes() {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/random`,
			{
				params: {
					number: 1,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get random recipes: " + error.message);
	}
}

async function getNutritionInfo(recipeId) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/${recipeId}/nutrition`,
			{
				params: {
					apiKey: API_KEY,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to get nutrition info: " + error.message);
	}
}

export {
	getMealPlan,
	getNutritionInfo,
	getRandomRecipes,
	getRecipeInformations,
	getRecipeInstructions,
	getRecipeSummary,
	searchRecipes,
};
