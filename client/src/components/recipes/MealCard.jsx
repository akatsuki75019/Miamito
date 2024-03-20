import { getRecipeInformations } from "@/services/recipeService";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
} from "../ui/card";
import RecipeModal from "./recipeModal";

function MealCard({ meal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeSummary, setRecipeSummary] = useState({});
  const [preparationTime, setPreparationTime] = useState(null);
  const [cookingTime, setCookingTime] = useState(null);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const imageUrl = `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;

  useEffect(() => {
    async function fetchInformations() {
      try {
        const response = await getRecipeInformations(meal.id);
        if (response) {
          setPreparationTime(response.preparationMinutes);
          setCookingTime(response.cookingMinutes);
        }
      } catch (error) {
        console.error("Failed to fetch recipe summary:", error);
      }
    }
    fetchInformations();
  }, [meal.id]);
  const formatTime = (time) => (time > 0 ? `${time} min` : "N/A");

  return (
    <>
      <Card className="meal-card" onClick={handleOpenModal}>
        <CardImage src={imageUrl} alt={meal.title} />
        <CardHeader>
          <CardTitle>{meal.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* on met le set dangeroulsy inner html car il y a des balises dans le texte de la reponse */}
          <CardDescription>
            <p>Preparation : {formatTime(preparationTime)}</p>
            <p>Cooking : {formatTime(cookingTime)}</p>
          </CardDescription>
        </CardContent>
      </Card>
      <RecipeModal
        recipeId={meal.id}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default MealCard;
