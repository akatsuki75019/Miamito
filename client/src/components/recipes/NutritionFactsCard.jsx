import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function NutritionFactsCard({ nutrition }) {
	if (!nutrition || !nutrition.nutrients) {
		return null; // Si la nutrition n'est pas définie, ne rien afficher
	}
	const nutrients = nutrition.nutrients;

	const getNutrientAmount = (name) => {
		const nutrient = nutrients.find((n) => n.name === name);
		return nutrient ? Math.round(nutrient.amount) : "N/A";
	};

	const getNutrientUnit = (name) => {
		const nutrient = nutrients.find((n) => n.name === name);
		return nutrient ? `${nutrient.unit}` : "";
	};

	return (
		<div className="w-full my-8 md:my-0">
			<Card>
				<CardContent className="px-4 pt-6">
					<h2 className="font-bold mb-6">
						Nutrition Facts{" "}
						<p className="text-xs font-normal">for entire recipe</p>
					</h2>
					<div className="flex justify-between">
						<p>Calories:</p>
						<div className="font-semibold">
							{getNutrientAmount("Calories")} {getNutrientUnit("Calories")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Carbs:</p>
						<div className="font-semibold">
							{getNutrientAmount("Carbohydrates")}{" "}
							{getNutrientUnit("Carbohydrates")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Fat:</p>
						<div className="font-semibold">
							{getNutrientAmount("Fat")} {getNutrientUnit("Fat")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Protein:</p>
						<div className="font-semibold">
							{getNutrientAmount("Protein")} {getNutrientUnit("Protein")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Sugar:</p>
						<div className="font-semibold">
							{getNutrientAmount("Sugar")} {getNutrientUnit("Sugar")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Cholesterol:</p>
						<div className="font-semibold">
							{getNutrientAmount("Cholesterol")}{" "}
							{getNutrientUnit("Cholesterol")}
						</div>
					</div>
					<Separator />

					<div className="flex justify-between mt-2">
						<p>Sodium:</p>
						<div className="font-semibold">
							{getNutrientAmount("Sodium")} {getNutrientUnit("Sodium")}
						</div>
					</div>
					<Separator />
				</CardContent>
			</Card>
		</div>
	);
}
