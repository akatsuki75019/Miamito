import { getRecipeInformations } from "@/services/recipeService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
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
          setRecipeSummary({ __html: response.summary });
        }
      } catch (error) {
        console.error("Failed to fetch recipe summary:", error);
      }
    }
    fetchInformations();
  }, [meal.id]);

  // Define formatTime within the component
  const formatTime = (time) => (time > 0 ? `${time} min` : "N/A  ");

  return (
    <>
      <Card className="m-3" onClick={handleOpenModal}>
        <CardImage src={imageUrl} alt={meal.title} className="rounded-t-xl" />
        <CardHeader>
          <CardTitle>{meal.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Preparation: {formatTime(preparationTime)}
            Cooking: {formatTime(cookingTime)}
            <Button variant="ghost" className="float-right">
              <Link to={`/recipe/${meal.id}`}>View</Link>
            </Button>
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
