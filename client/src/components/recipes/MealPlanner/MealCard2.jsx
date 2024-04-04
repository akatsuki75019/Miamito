/* eslint-disable react/prop-types */
import { addToShoppingList } from "@/services/shoppingListService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
	CardImage,
} from "../../ui/card";

export default function MealCard2({ meal, day }) {
	const imageUrl = `https://spoonacular.com/recipeImages/${meal.spoonacular_id}-312x231.jpg`;
	// const formatTime = (time) => (time > 0 ? `${time} min` : "N/A  ");
	const token = useSelector((state) => state.auth.token);

	return (
		<Link
			to={{
				pathname: `/mealplan/${meal.spoonacular_id}`,
				state: { meal },
			}}
			key={meal.id}
		>
			<Card className="transition-transform duration-500 hover:scale-105">
				<CardHeader className="pb-6">
					<CardTitle className="text-2xl font-bold text-primary">
						{day}
					</CardTitle>
					<CardDescription>{meal.title}</CardDescription>
				</CardHeader>
				<CardImage
					alt={meal.title}
					className="px-4  overflow-hidden"
					src={imageUrl}
				></CardImage>
				<CardFooter className="pt-6 flex justify-between">
					<div>
						<p className="text-sm">Ready in {meal.readyInMinutes} min</p>
					</div>
					{token ? (
						<div>
							<Button
								disabled
								onClick={() => addToShoppingList(meal.id)}
								size="sm"
							>
								Add to my list
							</Button>
						</div>
					) : null}
				</CardFooter>
			</Card>
		</Link>
	);
}
