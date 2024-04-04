import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import Loading from "@/features/Loading";
import { getRecipeInformations } from "@/services/recipeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentPage from "./ContentPage/ContentPage";
import TitleRecipeShow from "./TitleRecipeShow";

function RecipeIndex() {
  const [localMeals, setLocalMeals] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [recipeID, setRecipeID] = useState(null);

  const { id } = useParams(); // Récupérer l'id à partir de l'URL

  useEffect(() => {
    const mealsString = localStorage.getItem("meals");
    if (mealsString) {
      const meals = JSON.parse(mealsString);
      const meal = meals.find((meal) => meal.spoonacular_id === id);
      if (meal) {
        setLocalMeals(meal);
      } else {
        console.error("Meal not found");
        setLocalMeals({ id });
      }
    }
  }, [id]);

  useEffect(() => {
    async function fetchInformation() {
      try {
        const info = localStorage.getItem(`recipeInfo-${id}`);
        let response;
        if (info) {
          response = JSON.parse(info);
        } else {
          response = await getRecipeInformations(id);
          localStorage.setItem(`recipeInfo-${id}`, JSON.stringify(response));
        }
        setRecipeInfo(response);
      } catch (error) {
        console.error("Failed to fetch recipe information:", error);
      }
    }

    if (localMeals) {
      fetchInformation();
    }
  }, [localMeals]); //se récommence à chaque fois que localMeals est modifié

  if (!recipeInfo) {
    return (
      <div className="flex flex-col justify-center items-center mt-32 md:mt-64">
        <h1 className="mb-10 text-4xl font-bold text-primary">Loading</h1>
        <Loading className="text-primary" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mb-20">
        <BreadcrumbFeatures />
      </div>
      <div>
        <TitleRecipeShow recipe={recipeInfo} />
        <ContentPage recipeInfo={recipeInfo} id={id} localMeals={localMeals} />
      </div>
    </div>
  );
}

export default RecipeIndex;
