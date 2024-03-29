import { importImage } from "@/features/importImage";
import { FlameIcon } from "lucide-react";

export default function RelatedRecipes() {
	const images = importImage();

	// COUTE TROP DE TOKENS DONC FAKE DATA

	const recipes = [
		{
			image: images.plat1,
			title: "Fluffy Pancakes: A Refreshingly Light & Simple Snack Option",
			calories: "390 kcal",
		},
		{
			image: images.plat2,
			title: "Cheese Burger: A Refreshingly Light & Simple Snack Option",
			calories: "890 kcal",
		},
		{
			image: images.plat3,
			title: "Salad Bawl: A Refreshingly Light & Simple Snack Option",
			calories: "415 kcal",
		},
		{
			image: images.plat4,
			title: "Cherry Cake: A Refreshingly Light & Simple Snack Option",
			calories: "480 kcal",
		},
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold">Related Recipes</h1>
			</div>
			<div className="grid grid-cols-2 md:flex flex-col gap-8">
				{recipes.map((recipe, index) => (
					<div
						key={index}
						className="transition-transform duration-500 hover:scale-105 cursor-pointer"
					>
						<div className="lg:grid grid-cols-2 gap-2">
							<div className="relative h-64 lg:h-full w-full">
								<img
									src={recipe.image}
									className="absolute h-full w-full object-cover"
								/>
							</div>
							<div className="flex flex-col gap-2 lg:gap-5 justify-between mt-3 lg:mt-0">
								<p className="font-semibold text-lg md:text-base pl-1">
									{recipe.title}
								</p>
								<div className="flex flex-row">
									<FlameIcon className="w-6 h-6 mr-1 text-primary" />
									<p className="text-gray-500 dark:text-gray-400">
										{recipe.calories}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
