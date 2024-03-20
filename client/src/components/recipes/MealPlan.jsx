import { useEffect, useState } from "react";
import { getMealPlan } from "../../services/recipeService";
import MealCard from "./MealCard";

export default function MealPlan() {
  const [weekMeals, setWeekMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await getMealPlan();
        if (response.week) {
          // Convert the object of days into an array of meals
          const meals = Object.values(response.week).flatMap(
            (day) => day.meals
          );
          setWeekMeals(meals);
        } else {
          setWeekMeals([]);
        }
        console.log("Response from getMealPlan:", response);
      } catch (error) {
        console.error("Failed to fetch meal plan:", error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <div className="meal-plan">
      {weekMeals.map((meal, index) => (
        <MealCard key={`${meal.id}-${index}`} meal={meal} />
      ))}
    </div>
  );
}
