import { fetchMeals } from "@/features/recipesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";

export default function MealPlan() {
  const dispatch = useDispatch();
  const { weekMeals, status, error } = useSelector((state) => state.recipes);
  const [localMeals, setLocalMeals] = useState([]);

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
    <div className="meal-plan">
      {localMeals &&
        localMeals.length &&
        localMeals.map((meal, index) => (
          <MealCard key={`${meal.id}-${index}`} meal={meal} />
        ))}
    </div>
  );
}
