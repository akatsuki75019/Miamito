import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import { getRecipeInformations } from "@/services/recipeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleRecipeShow from "./TitleRecipeShow";
import ContentPage from "./ContentPage/ContentPage";

function RecipeIndex() {
	const [localMeals, setLocalMeals] = useState(null);
	const [recipeInfo, setRecipeInfo] = useState(null);

	const { id } = useParams(); // Récupérer l'id à partir de l'URL

	useEffect(() => {
		const mealsString = localStorage.getItem("meals");
		if (mealsString) {
			const meals = JSON.parse(mealsString);
			const meal = meals.find((meal) => meal.spoonacular_id === id);
			if (meal) {
				setLocalMeals(meal);
			} else {
				console.error("Meal not found");
			}
		}
	}, [id]);

	useEffect(() => {
		async function fetchInformation() {
			try {
				const info = localStorage.getItem(`recipeInfo-${id}`);
				let response;
				if (info) {
					response = JSON.parse(info);
				} else {
					response = await getRecipeInformations(id);
					localStorage.setItem(`recipeInfo-${id}`, JSON.stringify(response));
				}
				setRecipeInfo(response);
			} catch (error) {
				console.error("Failed to fetch recipe information:", error);
			}
		}

		if (localMeals) {
			fetchInformation();
		}
	}, [localMeals]); //se récommence à chaque fois que localMeals est modifié

	if (!recipeInfo) {
		return (
			<div className="m-auto">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>
			<div>
				<TitleRecipeShow recipe={recipeInfo} />
				<ContentPage recipeInfo={recipeInfo} id={id} localMeals={localMeals} />
			</div>
		</div>
	);
}

export default RecipeIndex;
