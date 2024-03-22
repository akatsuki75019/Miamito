/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const imageUrl = `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;

  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate(`/recipe/${meal.id}`, { state: { meal } });
  };

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
            Preparation: {formatTime(meal.readyInMinutes)}
            <Button
              onClick={handleViewRecipe}
              variant="ghost"
              className="float-right"
            >
              <Link
                to={{
                  pathname: `/recipe/${meal.id}`,
                  state: { meal },
                }}
                key={meal.id}
              >
                View
              </Link>
            </Button>
          </CardDescription>
        </CardContent>
      </Card>
      {/* <RecipeModal
        recipeId={meal.id}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      /> */}
    </>
  );
}

export default MealCard;
