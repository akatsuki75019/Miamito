import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchArticle } from "../../services/articleService";
import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";

export default function ArticlePage() {
	const { id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		const fetchCurrentArticle = async () => {
			const articleData = await FetchArticle(id);
			setArticle(articleData);
		};
		if (id) fetchCurrentArticle();
	}, [id]);

	if (!article) return <div>Loading...</div>;

	return (
		<div className="container">
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>
			<h1 className="mb-6 text-3xl">{article.title}</h1>
			<p className="mb-4">{article.content}</p>
			<p>{article.content}</p>
		</div>
	);
}
