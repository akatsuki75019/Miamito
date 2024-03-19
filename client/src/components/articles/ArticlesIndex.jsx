import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

const ArticlesIndex = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const response = await axios.get(`${API_URL}/articles`);
			setArticles(response.data);
		};

		fetchArticles();
	}, []);

	return (
		<>
			<h1>Blog</h1>
			<div className="grid grid-cols-2 gap-4">
				{articles.map((article) => (
					<div key={article.id}>
						<Link to={`/articles/${article.id}`}>
							<Card>
								<CardHeader>
									<CardTitle>{article.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p>{article.content.substring(0, 100)}...</p>
								</CardContent>
							</Card>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default ArticlesIndex;
