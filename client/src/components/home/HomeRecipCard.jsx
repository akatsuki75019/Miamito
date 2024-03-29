/* eslint-disable react/prop-types */
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardImage,
	CardTitle,
} from "../ui/card";

export default function HomeRecipCard({ meal }) {
	const imageUrl = `https://spoonacular.com/recipeImages/${meal.spoonacular_id}-312x231.jpg`;

	const navigate = useNavigate();

	const handleViewRecipe = () => {
		navigate(`/recipes/${meal.spoonacular_id}`, { state: { meal } });
	};
	const formatTime = (time) => (time > 0 ? `${time} min` : "N/A  ");

	return (
		<div className="transition-transform duration-500 hover:scale-105">
			<Card>
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
							className="float-right px-2"
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
		</div>
	);
}
