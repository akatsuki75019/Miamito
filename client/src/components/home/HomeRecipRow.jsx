/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeRecipCard from "./HomeRecipCard";

export default function HomeRecipRow() {
  const [localMeals, setLocalMeals] = useState(null);

  useNavigate();

  useEffect(() => {
    const mealsString = localStorage.getItem("meals");

    if (mealsString) {
      const Sixmeals = JSON.parse(mealsString);
      if (Sixmeals) {
        setLocalMeals(Sixmeals);
      } else {
        console.error("Meal not found");
      }
    }
  }, []);

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
