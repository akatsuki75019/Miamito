"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import { Card, CardContent, CardImage } from "../ui/card";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationEllipsis,
	PaginationPrevious,
	PaginationNext,
} from "../ui/pagination";

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
		<div className="container">
			<h1>Blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{articles.map((article) => (
					<div key={article.id}>
						<Link to={`/articles/${article.id}`}>
							<Card className="mb-14">
								<CardImage
									src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="Article image"
								/>
								<CardContent className="mt-3">
									<p className="text-xs mb-1">on March 19, 2024</p>
									<p className="text-3xl font-semibold mb-1 text-primary">
										{article.title}
									</p>
									<p>{article.content.substring(0, 300)}...</p>
								</CardContent>
							</Card>
						</Link>
					</div>
				))}
			</div>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default ArticlesIndex;
