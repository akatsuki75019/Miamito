// import { useEffect, useState } from "react";
// import { getRecipeInstructions } from "../../services/recipeService";

// function RecipeIndex(recipeId) {}
// const [instructions, setInstructions] = useState([]);

// useEffect(() => {
//   async function fetchRecipeInstructions() {
//     try {
//       const data = await getRecipeInstructions(recipeId);
//       setInstructions(data);
//     } catch (error) {
//       console.error("Failed to fetch recipe instructions:", error);
//     }
//   }

//     fetchRandomRecipes();
//   }, []);

//   return (
//     <div>
//       <h2>Random Recipes</h2>
//       <div className="recipe-list">
//         {randomRecipes.map((recipe) => (
//           <div key={recipe.id} className="recipe-card">
//             <h3>{recipe.title}</h3>
//             <img src={recipe.image} alt={recipe.title} />
//             <p>{recipe.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default RecipeIndex;
