import { REACT_APP_API_URL } from "@/constants";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SearchCard from "./SearchCard";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
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
    <div className="flex flex-col w-full mx-auto md:w-4/5 gap-10">
      <FormItem>
        <Label className="sr-only" htmlFor="search">
          Search
        </Label>
        <Input
          className="pl-8 w-full"
          id="search"
          placeholder="Search"
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
      <Button size="sm" variant="default" type="submit" onClick={handleSearch}>
        Search
      </Button>

      {/* Affichage des résultats de la recherche */}
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((meal, index) => {
              return (
                <React.Fragment key={`mealCard-${meal.id}-${index}`}>
                  <SearchCard meal={meal} index={index} />
                </React.Fragment>
              );
            })}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
