import { useEffect, useState } from "react";
import { getRecipeSummary, searchRecipes } from "../../services/recipeService";

function RecipeIndex() {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    async function fetchRandomRecipes() {
      try {
        // Récupérer des recettes aléatoires
        const searchResult = await searchRecipes("", 1); // Recherche avec une chaîne vide pour obtenir toutes les recettes
        const recipes = searchResult.results;

        // Obtenir les détails de chaque recette
        const promises = recipes.map((recipe) => getRecipeSummary(recipe.id));
        const recipeDetails = await Promise.all(promises);

        setRandomRecipes(recipeDetails);
      } catch (error) {
        console.error("Failed to fetch random recipes:", error);
      }
    }

    fetchRandomRecipes();
  }, []);

  return (
    <div>
      <h2>Random Recipes</h2>
      <div className="recipe-list">
        {randomRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIndex;
