import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import { fetchMeals } from "@/features/recipesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard2 from "./MealCard2";

export default function MealPlan() {
	const dispatch = useDispatch();
	const { weekMeals, status, error } = useSelector((state) => state.recipes);
	const [localMeals, setLocalMeals] = useState([]);
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
	}, [localMeals, dispatch]);

	useEffect(() => {
		if (weekMeals.length > 0) {
			setLocalMeals(weekMeals);
		}
	}, [weekMeals]);

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
					localMeals.map((meal, index) => {
						return (
							<React.Fragment key={`mealCard-${meal.spoonacular_id}-${index}`}>
								<MealCard2 meal={meal} day={daysOfWeek[index % 7]} />
							</React.Fragment>
						);
					})}
			</div>
		</>
	);
}
