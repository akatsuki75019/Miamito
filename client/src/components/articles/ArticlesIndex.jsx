"use client";

import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { REACT_APP_API_URL } from "../../constants";
import { importImage } from "../../features/importImage";
import { Button } from "../ui/button";
import { Card, CardContent, CardImage } from "../ui/card";
import PaginationSection from "./PaginationSection";
import Masonry from "react-masonry-css";

const ArticlesIndex = () => {
	const images = importImage();
	const [articles, setArticles] = useState([]);
	const [currentPage, setCurrentPage] = useState(() => {
		// Get the current page from localStorage or default to 1
		const savedPage = localStorage.getItem("currentPage");
		return savedPage ? Number(savedPage) : 1;
	});
	const postsPerPage = 6;
	const image = [
		images.articlesTop,
		images.articles1,
		images.plat2,
		images.articles2,
		images.articles4,
		images.articles3,
	];

	const breakpointColumnsObj = {
		default: 3,
		1100: 3,
		700: 1,
		500: 1,
	};

	useEffect(() => {
		localStorage.setItem("currentPage", currentPage);
	}, [currentPage]);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = articles.slice(firstPostIndex, lastPostIndex);

	useEffect(() => {
		const fetchArticles = async () => {
			const response = await axios.get(`${REACT_APP_API_URL}/articles`);
			setArticles(response.data);
		};

		fetchArticles();
	}, []);

	return (
		<div className="container">
			{/* ------------ BREADCRUMB ------------ */}
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>

			{/* ------------ TITLE PAGE CONTENT ------------ */}
			<div className="mb-24">
				<h1 className="text-5xl font-extrabold">BLOG.</h1>
			</div>

			{/* ------------ FIRST CARD ARTICLE ------------ */}
			<Card className="mb-24">
				<CardContent className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
								laborum inventore voluptas sunt minima nostrum recusandae. amet
								consectetur adipisicing elit. Nihil dolore ut facilis,
								necessitatibus dolorem vitae odit in consequuntur dignissimos
								doloremque voluptatum magni nam quos eaque obcaecati qui quas
								corporis odio? Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aspernatur culpa ad quaerat quas magnam. Ut
								totam, asperiores atque dolores distinctio nihil suscipit ad,
								laborum inventore voluptas sunt minima nostrum recusandae.
							</p>
							<div className="mx-auto my-8">
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
						<div className=" h-96 md:h-full relative">
							<CardImage
								src={images.articles2}
								alt="Article image"
								className="absolute h-full w-full object-cover"
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* ------------ ALL CARDS ARTICLES ------------ */}
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{currentPosts.map((article, index) => (
					<div
						key={article.id}
						className="transition-transform duration-500 hover:scale-105"
					>
						<Link to={`/articles/${article.id}`}>
							<Card className="mb-4">
								<CardImage
									src={image[index % image.length]}
									alt={`Article image ${index + 1}`}
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
			</Masonry>

			{/* ------------ PAGINATION ------------ */}
			<div className="mt-24">
				<PaginationSection
					totalPosts={articles.length}
					postsPerPage={postsPerPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
};

export default ArticlesIndex;
