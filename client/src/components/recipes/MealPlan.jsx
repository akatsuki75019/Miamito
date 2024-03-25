import { fetchMeals } from "@/features/recipesSlice";
import React, { useEffect, useState } from "react";
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
  }, [weekMeals.length, dispatch]);

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
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {localMeals &&
          localMeals.length > 0 &&
          localMeals.map((meal, index) => (
            <React.Fragment key={`mealCard-${meal.id}-${index}`}>
              <MealCard meal={meal} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
