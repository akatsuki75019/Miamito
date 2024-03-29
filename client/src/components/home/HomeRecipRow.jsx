/* eslint-disable react/prop-types */
import { fetchMeals } from "@/features/recipesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeRecipCard from "./HomeRecipCard";
import { useSelector } from "react-redux";

export default function HomeRecipRow() {
  const [localMeals, setLocalMeals] = useState(null);
  const { weekMeals, status, error } = useSelector((state) => state.recipes);

  useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const mealsString = localStorage.getItem("meals");

    if (mealsString) {
      const Sixmeals = JSON.parse(mealsString);
      if (Sixmeals) {
        setLocalMeals(Sixmeals);
      } else {
        dispatch(fetchMeals());

        console.error("Meal not found");
      }
    }
  }, [dispatch, localMeals]);

  useEffect(() => {
    if (weekMeals.length > 0) {
      setLocalMeals(weekMeals);
    }
  }, [weekMeals]);

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
