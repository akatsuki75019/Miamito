import { REACT_APP_API_URL } from "@/constants";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SearchCard from "./SearchCard";
import { Card } from "../ui/card";

export default function SearchBar() {
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!query.trim()) {
			return;
		}
		try {
			const response = await axios.get(
				`${REACT_APP_API_URL}/api/recipes/search`,
				{
					params: {
						complexSearch: true,
						number: 10,
						query: query,
					},
				}
			);
			setSearchResults(response.data.results);
			setQuery("");
		} catch (error) {
			console.error("Failed to search recipes: ", error.message);
		}
	};

	return (
		<div>
			<div className="flex items-center gap-3">
				<FormItem className="flex-grow">
					<Label className="sr-only" htmlFor="search">
						Search
					</Label>
					<Input
						className="pl-8 w-full"
						id="search"
						placeholder="Tag your favorite meal"
						type="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSearch(e);
							}
						}}
					/>
				</FormItem>
				<Button
					className="mt-2 px-6"
					variant="default"
					type="submit"
					onClick={handleSearch}
				>
					Search
				</Button>
			</div>

			{/* Affichage des résultats de la recherche */}
			<div className="mt-4">
				{searchResults.length > 0 ? (
					<Card className="p-6 min-w-[300px] md:min-w-[700px]">
						<ul>
							{searchResults.map((meal, index) => {
								return (
									<React.Fragment key={`mealCard-${meal.id}-${index}`}>
										<SearchCard meal={meal} index={index} />
									</React.Fragment>
								);
							})}
						</ul>
					</Card>
				) : (
					<p></p>
				)}
			</div>
		</div>
	);
}
