import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { importImage } from "../../../features/importImage";
import { FetchArticle } from "../../../services/articleService";
import { Separator } from "../../ui/separator";
import Comment from "./Comment";
import TitleArticlePage from "./TitleArticlePage";
import MoreArticles from "./MoreArticles";
import Loading from "@/features/Loading";

export default function ArticlePage() {
	// IMAGES en attendant de pouvoir les récupérer de l'API
	const images = importImage();
	const { id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		const fetchCurrentArticle = async () => {
			const articleData = await FetchArticle(id);
			setArticle(articleData);
		};
		if (id) fetchCurrentArticle();
	}, [id]);

	if (!article)
		return (
			<div className="flex flex-col justify-center items-center mt-32 md:mt-64">
				<h1 className="mb-10 text-4xl font-bold text-primary">Loading</h1>
				<Loading className="text-primary" />
			</div>
		);

	return (
		<div className="container">
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>
			<TitleArticlePage article={article} />
			<div className="md:grid grid-cols-3 gap-24">
				{/* -------------- LEFT SIDE -------------- */}
				<div className="col-span-2 w-full">
					{/* -------------- IMAGE -------------- */}
					<div>
						<img
							className="w-full"
							src={images.articles1}
							alt={article.title}
							style={{ maxWidth: "100%" }}
						/>
					</div>

					{/* -------------- INSTRUCTIONS AND INGREDIENTS -------------- */}
					<div className="my-16">
						<h2 className="text-2xl font-bold mb-4">{article.title}</h2>
						<p>{article.content}</p>
					</div>
					<div className="px-12 lg:px-24">
						<Separator className="border-4 border-primary" />
					</div>
					<div className="my-24">
						<Comment />
					</div>
				</div>

				{/* -------------- RIGHT SIDE -------------- */}
				<div>
					<div className="mb-20">
						<div className="sticky top-0">
							<MoreArticles />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
