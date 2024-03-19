/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getRecipeSummary } from "../../services/recipeService";

const RecipeCard = ({
  recipeId,
  onClick,
  // onFavouriteButtonClick,
  // isFavourite,
}) => {
  const [recipe, setRecipe] = useState({ id: 0, title: "", image: "" });

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        // Récupérer les détails de la recette
        const recipeDetails = await getRecipeSummary(recipeId);
        setRecipe(recipeDetails);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      }
    }

    fetchRecipeDetails();
  }, [recipeId]);

  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.title}></img>
      <div className="recipe-card-title">
        {/* <span
          onClick={(event) => {
            event.stopPropagation();
            onFavouriteButtonClick(recipe.id);
          }}
        >
          {isFavourite ? (
            <AiFillHeart size={25} color="red" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span> */}
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
