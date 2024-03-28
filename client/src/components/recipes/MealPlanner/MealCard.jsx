/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardImage,
	CardTitle,
} from "../../ui/card";
import RecipeModal from "./recipeModal";

function MealCard({ meal }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);
	const imageUrl = `https://spoonacular.com/recipeImages/${meal.spoonacular_id}-312x231.jpg`;

	const navigate = useNavigate();

	const handleViewRecipe = () => {
		navigate(`/recipe/${meal.spoonacular_id}`, { state: { meal } });
	};
	if (!("spoonacular_id" in meal)) {
		console.error(
			"La propriété spoonacular_id est manquante dans l'objet meal"
		);
		return null; // ou retournez un composant d'erreur ou de chargement
	}

	const handleList = () => {
		// Ajouter l'id de la recette à la liste de courses
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
									pathname: `/recipe/${meal.spoonacular_id}`,
									state: { meal },
								}}
								key={meal.spoonacular_id}
							>
								View
							</Link>
						</Button>
						<Button
							onClick={handleList}
							variant="ghost"
							className="float-center"
						>
							Like
						</Button>
					</CardDescription>
				</CardContent>
			</Card>
			<RecipeModal
				recipeId={meal.spoonacular_id}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</>
	);
}

export default MealCard;
