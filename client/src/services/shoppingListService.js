import { REACT_APP_API_URL } from "@/constants";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export async function getShoppingList(user_id) {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/api/recipes/shopping_lists/${user_id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	} catch (error) {
		throw new Error("Failed to get shopping list: " + error.message);
	}
}

export async function addToShoppingList(recipeId) {
	try {
		const response = await axios.post(
			`${REACT_APP_API_URL}/api/recipes/shopping_lists`,
			{
				shopping_list: {
					recipe_id: recipeId,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log("Article ajouté à la liste"); // Ajoutez cette ligne
		return response;
	} catch (error) {
		throw new Error("Failed to add recipe to shopping list: " + error.message);
	}
}

export async function removeFromShoppingList(recipeId) {
	try {
		const response = await axios.delete(
			`${REACT_APP_API_URL}/api/recipes/shoppinglist/${recipeId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	} catch (error) {
		throw new Error(
			"Failed to remove recipe from shopping list: " + error.message
		);
	}
}
