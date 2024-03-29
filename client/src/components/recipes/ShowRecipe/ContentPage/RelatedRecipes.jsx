import { importImage } from "@/features/importImage";

export default function RelatedRecipes() {
	const images = importImage();

	return (
		<div>
			<div className="mb-8">
				<h1 className="text-2xl font-bold">Trending Recipes</h1>
			</div>
			<div></div>
		</div>
	);
}
