import { getShoppingList } from "@/services/shoppingListService";
import { useEffect, useState } from "react";

export default function List() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction asynchrone pour charger la liste de courses
    async function loadShoppingList() {
      try {
        const response = await getShoppingList();
        const recipesID = response.data.map((recipe) => recipe.id);
        console.log(recipesID);
        setRecipes(); // Assumer que response.data contient le tableau de recettes
        setLoading(false); // Mettre à jour l'état de chargement
      } catch (error) {
        setError(error.message); // Gérer les erreurs éventuelles
        setLoading(false);
      }
    }

    // Appeler la fonction asynchrone définie ci-dessus
    loadShoppingList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>{recipe.name}</div>
      ))}
    </div>
  );
}
