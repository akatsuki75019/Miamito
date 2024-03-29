/* eslint-disable react/prop-types */
import { fetchMeals } from "@/features/recipesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeRecipCard from "./HomeRecipCard";

export default function HomeRecipRow() {
  const [localMeals, setLocalMeals] = useState([]);
  const { weekMeals, status, error } = useSelector((state) => state.recipes);

  useNavigate();
  const dispatch = useDispatch();

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
    <section className="py-20 px-20">
      <h1 className="text-3xl font-bold mb-10">Recipes of the week</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {localMeals &&
          localMeals.length > 0 &&
          localMeals.slice(0, 6).map((meal, index) => (
            <React.Fragment
              key={`HomeRecipCard-${meal.spoonacular_id}-${index}`}
            >
              <HomeRecipCard meal={meal} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
