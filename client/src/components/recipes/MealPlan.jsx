import { fetchMeals } from "@/features/recipesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard2 from "./MealCard2";
import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";

export default function MealPlan() {
	const dispatch = useDispatch();
	const { weekMeals, status, error } = useSelector((state) => state.recipes);
	const [localMeals, setLocalMeals] = useState([]);
	const [mealInfos, setMealInfos] = useState([]);
	const daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	useEffect(() => {
		if (localMeals.length === 0) {
			dispatch(fetchMeals());
		}
	}, [weekMeals.length, dispatch]);

	useEffect(() => {
		if (weekMeals.length > 0) {
			setLocalMeals(weekMeals);
		}
	}, [weekMeals]);

	// useEffect(() => {
	//   if (localMeals.length > 0) {
	//     // Dispatch fetchInformation pour chaque repas
	//     localMeals.forEach((meal) => {
	//       let info = localStorage.getItem(`recipeInfo-${meal.id}`);
	//       if (info) {
	//         // Si les informations sont déjà dans le localStorage, mettez à jour l'état avec ces informations
	//         setMealInfos((prevInfos) => [...prevInfos, JSON.parse(info)]);
	//       } else {
	//         // Sinon, dispatch fetchInformation et stockez le résultat dans le localStorage
	//         dispatch(fetchInformation(meal.id)).then((newInfo) => {
	//           localStorage.setItem(
	//             `recipeInfo-${meal.id}`,
	//             JSON.stringify(newInfo)
	//           );
	//           setMealInfos((prevInfos) => [...prevInfos, newInfo]);
	//         });
	//       }
	//       console.log(mealInfos);
	//     });
	//   }
	// }, [localMeals, dispatch]);

	if (status === "loading") {
		return <div>Loading meals...</div>;
	} else if (status === "failed") {
		return <div>Error fetching meals: {error}</div>;
	}
	return (
		<>
			<div className="container">
				{/* ------------ BREADCRUMB ------------ */}
				<div className="mb-20">
					<BreadcrumbFeatures />
				</div>

				{/* ------------ TITLE PAGE CONTENT ------------ */}
				<div className="mb-20">
					<h1 className="text-5xl font-extrabold">
						MEAL PLANNER <span className="text-2xl">(1 meal per day)</span>
					</h1>
				</div>

				{/* ------------ 7 CARDS RECIPES FOR WEEK ------------ */}
				{localMeals &&
					localMeals.length > 0 &&
					localMeals.map((meal, index) => (
						<React.Fragment key={`mealCard-${meal.id}-${index}`}>
							<MealCard2 meal={meal} day={daysOfWeek[index % 7]} />
						</React.Fragment>
					))}
			</div>
		</>
	);
}
