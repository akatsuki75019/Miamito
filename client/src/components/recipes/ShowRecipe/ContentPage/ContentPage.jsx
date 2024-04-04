import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getNutritionInfo } from "@/services/recipeService";
import { useEffect, useState } from "react";
import NutritionFactsCard from "./NutritionFactsCard";
import RelatedRecipes from "./RelatedRecipes";
import Comment from "./Comment";
import { Separator } from "@/components/ui/separator";
import { addToShoppingList } from "@/services/shoppingListService";

export default function ContentPage({ recipeInfo, id, localMeals }) {
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const [checkedItems, setCheckedItems] = useState(false);

  useEffect(() => {
    async function fetchNutritionInfo() {
      try {
        let info;

        // LOCAL STORAGE car on est limité en tokens || Vérifiez si les informations de nutrition sont dans le stockage local
        const storedInfo = localStorage.getItem(`nutritionInfo-${id}`);
        if (storedInfo) {
          info = JSON.parse(storedInfo);
        } else {
          // Si les informations de nutrition ne sont pas dans le stockage local, faites une nouvelle requête
          info = await getNutritionInfo(id);
          // Stockez les informations de nutrition dans le stockage local pour une utilisation ultérieure
          localStorage.setItem(`nutritionInfo-${id}`, JSON.stringify(info));
        }

        setNutritionInfo(info);
      } catch (error) {
        console.error("Failed to get nutrition info: " + error.message);
      }
    }

    if (localMeals) {
      fetchNutritionInfo();
    }
  }, [localMeals]);

  const handleCheckChange = (event) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [event.target.id]: !prevCheckedItems[event.target.id],
    }));
  };

  const ingredients = recipeInfo.extendedIngredients.map(
    (ingredient, index) => (
      <li key={`ingredient-${index}`}>
        <div className="flex mb-2 md:items-center">
          <Checkbox
            id={index.toString()}
            className="mt-0.5 md:mt-0"
            onClick={handleCheckChange}
          />
          <label
            htmlFor={index.toString()}
            className={`pl-2 ${
              checkedItems[index.toString()] ? "font-medium" : ""
            }`}
          >
            {ingredient.original}
          </label>
        </div>
      </li>
    )
  );

  const steps = recipeInfo.analyzedInstructions.flatMap((instruction) =>
    instruction.steps.map((step, index) => (
      <li className="mb-4 flex" key={`steps-${index}`}>
        <div>
          <Button className="w-6 h-6 mr-3 mt-0.5 cursor-default">
            {index + 1}
          </Button>
        </div>
        <div>{step.step}</div>
      </li>
    ))
  );

  return (
    <div className="md:grid grid-cols-3 gap-24">
      {/* -------------- LEFT SIDE -------------- */}
      <div className="col-span-2 w-full">
        {/* -------------- IMAGE -------------- */}
        <div>
          <img
            className="w-full"
            src={recipeInfo.image}
            alt={recipeInfo.title}
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* -------------- UNDER IMAGE -------------- */}
        <div className="flex gap-12 flex-row justify-center text-center my-6">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Ready in</p>
            <p className="font-semibold">{recipeInfo.readyInMinutes} minutes</p>
          </div>
          <div className="border"></div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Serving</p>
            <p className="font-semibold">{recipeInfo.servings} servings</p>
          </div>
        </div>

        {/* -------------- INSTRUCTIONS AND INGREDIENTS -------------- */}
        <div
          className="text-sm my-6"
          dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
        />
        <div className="my-16">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul>{ingredients}</ul>
          <Button
            onClick={() => addToShoppingList(recipeInfo.id)}
            className="mt-4 px-4"
          >
            Add to Shopping List
          </Button>
        </div>
        <div className="mt-16 mb-24">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol>{steps}</ol>
        </div>
        <div className="px-12 lg:px-24">
          <Separator className="border-4 border-primary" />
        </div>
        <div className="my-24">
          <Comment />
        </div>
      </div>

      {/* -------------- RIGHT SIDE -------------- */}
      <div>
        <div className="mb-20">
          <NutritionFactsCard nutrition={nutritionInfo} />
        </div>
        <div className="mb-20">
          <RelatedRecipes />
        </div>
      </div>
    </div>
  );
}
