import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import {
  getRecipeInformations,
  getNutritionInfo,
} from "@/services/recipeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NutritionFactsCard from "./NutritionFactsCard";

function RecipeIndex() {
  const [localMeals, setLocalMeals] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState(null);

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
      }
    }
  }, [id]);

  useEffect(() => {
    async function fetchNutritionInfo() {
      try {
        const info = await getNutritionInfo(localMeals.id);
        setNutritionInfo(info);
      } catch (error) {
        console.error("Failed to get nutrition info: " + error.message);
      }
    }

    if (localMeals) {
      fetchNutritionInfo();
    }
  }, [localMeals]);

  console.log(nutritionInfo);

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
    return <p>Loading...</p>;
  }

  // Extracting ingredients
  // const ingredients = recipeInfo.extendedIngredients.map((ingredient) => {
  //   return {
  //     name: ingredient.name,
  //     amount: ingredient.amount,
  //     unit: ingredient.unit,
  //   };
  // });
  const ingredients = recipeInfo.extendedIngredients.map(
    (ingredient, index) => (
      <li key={index}>
        {ingredient.name}: {ingredient.amount} {ingredient.unit}
      </li>
    )
  );

  // Extracting steps
  // const steps = [];
  // if (
  //   recipeInfo.analyzedInstructions &&
  //   recipeInfo.analyzedInstructions.length > 0
  // ) {
  //   recipeInfo.analyzedInstructions.forEach((instruction) => {
  //     instruction.steps.forEach((step) => {
  //       steps.push({
  //         number: step.number,
  //         step: step.step,
  //       });
  //     });
  //   });
  // }

  const steps = recipeInfo.analyzedInstructions.flatMap((instruction) =>
    instruction.steps.map((step) => <li key={step.number}>{step.step}</li>)
  );

  console.log(recipeInfo);

  return (
    <div className="container">
      <div className="mb-20">
        <BreadcrumbFeatures />
      </div>
      <div>
        <h1 className="text-3xl text-primary font-bold mb-10">
          {recipeInfo.title}
        </h1>
        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-2 w-full">
            <div className="">
              <img
                className="w-full"
                src={recipeInfo.image}
                alt={recipeInfo.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="flex gap-5">
              <div>
                <p>Ready in :</p>
                <p>{recipeInfo.readyInMinutes} minutes</p>
              </div>
              <div>
                <p>Serving :</p>
                <p>{recipeInfo.servings} servings</p>
              </div>
            </div>
            <h2>
              <strong>Ingredients:</strong>
            </h2>
            <ul>{ingredients}</ul>
            <h2>
              <strong>Instructions:</strong>
            </h2>
            <ol>{steps}</ol>
          </div>
          <div className="">
            <NutritionFactsCard nutrition={nutritionInfo} />
            <p>Health Score: {recipeInfo.healthScore}</p>
            <p>Servings: {recipeInfo.servings}</p>
            <p>Ready in {recipeInfo.readyInMinutes} minutes</p>
            <p>Price per serving: ${recipeInfo.pricePerServing.toFixed(2)}</p>
            <p>
              Source: <a href={recipeInfo.sourceUrl}>{recipeInfo.sourceName}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeIndex;
