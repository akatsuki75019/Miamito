import { useState, useEffect } from "react";
import { getNutritionInfo } from "@/services/recipeService";
import NutritionFactsCard from "./NutritionFactsCard";

export default function ContentPage({
	recipeInfo,
	ingredients,
	steps,
	id,
	localMeals,
}) {
	const [nutritionInfo, setNutritionInfo] = useState(null);

	useEffect(() => {
		async function fetchNutritionInfo() {
			try {
				let info;

				// LOCAL STORAGE car on est limité en tokens || Vérifiez si les informations de nutrition sont dans le stockage local
				const storedInfo = localStorage.getItem(`nutritionInfo-${id}`);
				if (storedInfo) {
					info = JSON.parse(storedInfo);
				} else {
					// Si les informations de nutrition ne sont pas dans le stockage local, faites une nouvelle requête
					info = await getNutritionInfo(id);
					// Stockez les informations de nutrition dans le stockage local pour une utilisation ultérieure
					localStorage.setItem(`nutritionInfo-${id}`, JSON.stringify(info));
				}

				setNutritionInfo(info);
			} catch (error) {
				console.error("Failed to get nutrition info: " + error.message);
			}
		}

		if (localMeals) {
			fetchNutritionInfo();
		}
	}, [localMeals]);

	return (
		<div className="md:grid grid-cols-3 gap-24">
			<div className="col-span-2 w-full">
				<div className="">
					<img
						className="w-full"
						src={recipeInfo.image}
						alt={recipeInfo.title}
						style={{ maxWidth: "100%" }}
					/>
				</div>
				<div className="flex gap-12 flex-row justify-center text-center my-6">
					<div>
						<p className="text-gray-500 dark:text-gray-400">Ready in</p>
						<p className="font-semibold">{recipeInfo.readyInMinutes} minutes</p>
					</div>
					<div className="border"></div>
					<div>
						<p className="text-gray-500 dark:text-gray-400">Serving</p>
						<p className="font-semibold">{recipeInfo.servings} servings</p>
					</div>
				</div>
				<div
					className="text-sm my-6"
					dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
				/>
				<div className="my-6">
					<h2 className="text-2xl font-extrabold mb-2">Ingredients:</h2>
					<ul>{ingredients}</ul>
				</div>
				<div className="my-6">
					<h2 className="text-2xl font-extrabold mb-2">Instructions:</h2>
					<ol>{steps}</ol>
				</div>
			</div>
			<div>
				<NutritionFactsCard nutrition={nutritionInfo} />
			</div>
		</div>
	);
}
