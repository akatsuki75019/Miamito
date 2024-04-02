/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";

export default function MealCard2({ meal, day }) {
	const imageUrl = `https://spoonacular.com/recipeImages/${meal.spoonacular_id}-312x231.jpg`;
	const formatTime = (time) => (time > 0 ? `${time} min` : "N/A  ");

	return (
		<div className="grid gap-6">
			<Link
				to={{
					pathname: `/mealplan/${meal.spoonacular_id}`,
					state: { meal },
				}}
				key={meal.id}
			>
				<Card className="m-3">
					<CardHeader className="flex flex-col items-start">
						<div className="text-xl font-bold  text-primary">{day}</div>
						<div className="text-sm leading-none text-gray-500 dark:text-gray-400">
							{meal.title}
						</div>
					</CardHeader>
					<CardContent className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<img
								alt={meal.title}
								className="rounded-lg"
								height="64"
								src={imageUrl}
								style={{
									aspectRatio: "64/64",
									objectFit: "cover",
								}}
								width="64"
							/>
							<div className="grid gap-1">
								<div className="text-sm font-medium">{meal.title}</div>
								<div className="text-xs text-gray-500 dark:text-gray-400">
									For {meal.servings} people | {formatTime(meal.readyInMinutes)}
								</div>
							</div>
						</div>
						<div>
							<Button size="sm">Add to my list</Button>
						</div>
					</CardContent>
				</Card>
			</Link>
		</div>
	);
}
