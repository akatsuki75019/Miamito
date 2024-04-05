import { getShoppingList } from "@/services/shoppingListService";
import { useEffect, useState } from "react";
import { ShowUser } from "@/services/userService"; // Importez ShowUser
import Loading from "@/features/Loading";

export default function List() {
	const [recipes, setRecipes] = useState([]);
	const [recipesID, setRecipesID] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const mealsString = localStorage.getItem("meals");

	console.log(recipesID);

	// useEffect(() => {
	// 	const mealsString = localStorage.getItem("meals");
	// 	if (mealsString) {
	// 		const meals = JSON.parse(mealsString);
	// 		const meal = meals.find((meal) => meal.spoonacular_id === id);
	// 		if (meal) {
	// 			setRecipes(meal);
	// 		} else {
	// 			console.error("Meal not found");
	// 		}
	// 	}
	// }, []);

	useEffect(() => {
		async function loadShoppingList() {
			try {
				const user = await ShowUser();

				const response = await getShoppingList(user.id);
				const ids = response.data.map((shoppingList) => shoppingList.recipe_id);
				setRecipesID(ids);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}
		loadShoppingList();
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1>Plop</h1>
			{recipes.map((recipe, index) => (
				<div key={index}>{recipe.name}</div>
			))}
		</div>
	);
}
