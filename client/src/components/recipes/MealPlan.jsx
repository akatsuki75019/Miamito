import { fetchMeals } from "@/features/recipesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";

export default function MealPlan() {
  const dispatch = useDispatch();
  const { weekMeals, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMeals());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading meals...</div>;
  } else if (status === "failed") {
    return <div>Error fetching meals: {error}</div>;
  }
  return (
    <div className="meal-plan">
      {weekMeals.map((meal, index) => (
        <MealCard key={`${meal.id}-${index}`} meal={meal} />
      ))}
    </div>
  );
}
