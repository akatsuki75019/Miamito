import { setWeekMeals } from "@/features/recipesSlice";
import { getMealPlan } from "@/services/recipeService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";

export default function MealPlan() {
  const dispatch = useDispatch();
  const { weekMeals, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    async function fetchMeals() {
      const response = await getMealPlan();
      console.log(response);
      const meals = Object.entries(response.week).reduce((acc, val) => {
        const preparation = {
          ...val[1].meals[2],
          readyInMinutes: val[1].meals[2].readyInMinutes,
        };
        acc.push(preparation);
        return acc;
      }, []);

      dispatch(setWeekMeals(meals));
    }
    if (!weekMeals) {
      fetchMeals();
    }
  }, [weekMeals, dispatch]);

  if (status === "loading") {
    return <div>Loading meals...</div>;
  } else if (status === "failed") {
    return <div>Error fetching meals: {error}</div>;
  }
  return (
    <div className="meal-plan">
      {weekMeals &&
        weekMeals.length &&
        weekMeals.map((meal, index) => (
          <MealCard key={`${meal.id}-${index}`} meal={meal} />
        ))}
    </div>
  );
}
