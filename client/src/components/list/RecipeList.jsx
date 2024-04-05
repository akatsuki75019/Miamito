import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { MinusIcon } from "@radix-ui/react-icons";

export default function RecipeList({ title, ingredients, onRemove }) {
	return (
		<Card>
			<CardHeader className="flex items-start gap-4 p-4">
				<div className="grid gap-2 w-full">
					<div className="flex justify-between">
						<CardTitle className="text-xl font-bold text-primary">
							{title}
						</CardTitle>
						<Button
							className="rounded-full h-6 w-6"
							size="icon"
							variant="outline"
							onClick={onRemove}
						>
							<XIcon className="w-4 h-4" />
							<span className="sr-only">Delete</span>
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<div className="grid gap-2">
					<div className="flex items-center gap-2">
						<h2 className="font-medium ml-2">Ingredients</h2>
					</div>
					<div className="grid gap-2">
						{ingredients.map((ingredient, index) => (
							<div
								key={index}
								className="flex items-center gap-2 hover:font-bold"
							>
								<ChevronRightIcon className="h-4 w-4 opacity-50" />
								<img
									src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
									alt={ingredient.nameClean}
									className="w-6 h-6 rounded-full"
								/>
								<span className="text-sm">
									{ingredient.nameClean.charAt(0).toUpperCase() +
										ingredient.nameClean.slice(1)}
								</span>
								<Button
									className="ml-auto rounded-full h-6 w-6"
									size="icon"
									variant="outline"
								>
									<MinusIcon className="w-4 h-4" />
									<span className="sr-only">Delete</span>
								</Button>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function ChevronRightIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
