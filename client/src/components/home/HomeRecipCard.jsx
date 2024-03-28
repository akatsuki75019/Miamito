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
	const imageUrl = `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;

	const navigate = useNavigate();

	const handleViewRecipe = () => {
		navigate(`/recipes/${meal.id}`, { state: { meal } });
	};
	const formatTime = (time) => (time > 0 ? `${time} min` : "N/A  ");

	return (
		<>
			<Card className="m-3">
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
		</>
	);
}
