import RecipeList from "@/components/list/RecipeList";
import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import Loading from "@/features/Loading";
import { getRecipeInformations } from "@/services/recipeService";
import {
	getShoppingList,
	removeFromShoppingList,
} from "@/services/shoppingListService";
import { ShowUser } from "@/services/userService"; // Importez ShowUser
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function List() {
	const [recipeInfo, setRecipeInfo] = useState([]);
	const [shoppingListIds, setShoppingListIds] = useState([]);
	const [recipesID, setRecipesID] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [filteredMealIDs, setFilteredMealIDs] = useState([]);

	const breakpointColumnsObj = {
		default: 2,
		1100: 3,
		700: 1,
		500: 1,
	};

	useEffect(() => {
		const meals = JSON.parse(localStorage.getItem("meals"));

		const ids = meals
			.filter((meal) => recipesID.includes(meal.id))
			.map((meal) => meal.spoonacular_id);
		setFilteredMealIDs(ids);
	}, [recipesID]);

	useEffect(() => {
		async function fetchInformation() {
			try {
				const responses = await Promise.all(
					filteredMealIDs.map(async (id) => {
						const info = localStorage.getItem(`recipeInfo-${id}`);
						if (info) {
							return JSON.parse(info);
						} else {
							const response = await getRecipeInformations(id);
							localStorage.setItem(
								`recipeInfo-${id}`,
								JSON.stringify(response)
							);
							return response;
						}
					})
				);
				setRecipeInfo(responses);
			} catch (error) {
				console.error("Failed to fetch recipe information:", error);
			}
		}
		fetchInformation();
	}, [filteredMealIDs]);

	useEffect(() => {
		async function loadShoppingList() {
			try {
				const user = await ShowUser();

				const response = await getShoppingList(user.id);
				console.log(response.data.map((shoppingList) => shoppingList.id));
				setShoppingListIds(
					response.data.map((shoppingList) => shoppingList.id)
				);
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

	const removeRecipe = async (indexToRemove) => {
		try {
			// Supprimez la recette de la base de données
			await removeFromShoppingList(shoppingListIds[indexToRemove]);

			// Supprimez la recette de l'état local
			setRecipeInfo(recipeInfo.filter((_, index) => index !== indexToRemove));
		} catch (error) {
			console.error("Failed to remove recipe: " + error.message);
		}
	};

	return (
		<div>
			<div className="container">
				{/* ------------ BREADCRUMB ------------ */}
				<div className="mb-20">
					<BreadcrumbFeatures />
				</div>
				{/* ------------ TITLE PAGE CONTENT ------------ */}
				<div className="mb-24">
					<h1 className="font-extrabold text-5xl">MY LIST.</h1>
					<p className="text-sm leading-none text-gray-500 dark:text-gray-400">
						Manage your recipes and ingredients
					</p>
				</div>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{recipeInfo.map((recipe, index) => (
						<RecipeList
							key={index}
							title={recipe.title}
							ingredients={recipe.extendedIngredients}
							onRemove={() => removeRecipe(index)}
						/>
					))}
				</Masonry>
			</div>
		</div>
	);
}
