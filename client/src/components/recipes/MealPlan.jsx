import { fetchInformation, fetchMeals } from "@/features/recipesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";

export default function MealPlan() {
  const dispatch = useDispatch();
  const { weekMeals, status, error } = useSelector((state) => state.recipes);
  const [localMeals, setLocalMeals] = useState([]);
  const [mealInfos, setMealInfos] = useState([]);

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

  useEffect(() => {
    if (localMeals.length > 0) {
      // Dispatch fetchInformation pour chaque repas
      localMeals.forEach((meal) => {
        let info = localStorage.getItem(`recipeInfo-${meal.id}`);
        if (info) {
          // Si les informations sont déjà dans le localStorage, mettez à jour l'état avec ces informations
          setMealInfos((prevInfos) => [...prevInfos, JSON.parse(info)]);
        } else {
          // Sinon, dispatch fetchInformation et stockez le résultat dans le localStorage
          dispatch(fetchInformation(meal.id)).then((newInfo) => {
            localStorage.setItem(
              `recipeInfo-${meal.id}`,
              JSON.stringify(newInfo)
            );
            setMealInfos((prevInfos) => [...prevInfos, newInfo]);
          });
        }
        console.log(mealInfos);
      });
    }
  }, [localMeals, dispatch]);

  if (status === "loading") {
    return <div>Loading meals...</div>;
  } else if (status === "failed") {
    return <div>Error fetching meals: {error}</div>;
  }
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {localMeals &&
          localMeals.length &&
          localMeals.map((meal, index) => (
            <>
              <MealCard key={`mealCard-${meal.id}-${index}`} meal={meal} />
            </>
          ))}
      </div>
    </div>
  );
}
