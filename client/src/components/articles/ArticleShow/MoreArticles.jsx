import { importImage } from "@/features/importImage";

export default function MoreArticles() {
	const images = importImage();

	// COUTE TROP DE TOKENS DONC FAKE DATA

	const articles = [
		{
			image: images.articlesTop,
			title: "Fluffy Pancakes: A Refreshingly Light & Simple Snack Option",
		},
		{
			image: images.articles2,
			title: "Cheese Burger: A Refreshingly Light & Simple Snack Option",
		},
		{
			image: images.articles4,
			title: "Salad Bawl: A Refreshingly Light & Simple Snack Option",
		},
		{
			image: images.articles1,
			title: "Cherry Cake: A Refreshingly Light & Simple Snack Option",
		},
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold">More articles</h1>
			</div>
			<div className="md:flex flex-col gap-8">
				{articles.map((article, index) => (
					<div
						key={index}
						className="transition-transform duration-500 hover:scale-105 cursor-pointer"
					>
						<div className="py-8 lg:py-0">
							<div className="relative h-56 w-full">
								<img
									src={article.image}
									className="absolute h-full w-full object-cover"
								/>
							</div>
							<div className="flex flex-col gap-2 lg:gap-5 justify-between mt-3 lg:mt-0">
								<p className="font-semibold text-lg pl-1">{article.title}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
