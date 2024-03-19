"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import { Button } from "../ui/button";
import { Card, CardContent, CardImage } from "../ui/card";

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
			<Card className="mb-24">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<CardContent className="mt-3">
						<div className="flex flex-col">
							<p className="text-xs mb-8">on March 19, 2024</p>
							<p className="text-3xl font-semibold mb-6 text-primary">
								Classic New-York Bacon Cheeseburger
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
								ab. Maxime, dolore officia deserunt adipisci cupiditate
								repudiandae nobis amet, distinctio inventore ea ex repellat,
								error doloribus libero. Nesciunt, corporis nulla. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Nihil dolore ut
								facilis, necessitatibus dolorem vitae odit in consequuntur
								dignissimos doloremque voluptatum magni nam quos eaque obcaecati
								qui quas corporis odio? Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aspernatur culpa ad quaerat quas magnam. Ut
								totam, asperiores atque dolores distinctio nihil suscipit ad,
								laborum inventore voluptas sunt minima nostrum recusandae.
							</p>
							<div className="mt-6">
								<Link to="/">
									<Button className="px-8 py-6 text-lg">
										Read more{" "}
										<ArrowRightIcon
											className="ml-2 mt-0.5"
											width="25"
											height="25"
										/>
									</Button>
								</Link>
							</div>
						</div>
					</CardContent>
					<CardImage
						src=" https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Article image"
						className="p-4"
					/>
				</div>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{articles.map((article) => (
					<div key={article.id}>
						<Link to={`/articles/${article.id}`}>
							<Card className="mb-4">
								<CardImage
									src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="Article image"
									className="rounded-t-xl"
								/>
								<CardContent className="mt-3">
									<p className="text-xs mb-2">on March 19, 2024</p>
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
			{/* <PaginationArticles /> */}
		</div>
	);
};

export default ArticlesIndex;
