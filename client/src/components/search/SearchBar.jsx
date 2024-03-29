import { REACT_APP_API_URL } from "@/constants";
import axios from "axios";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState(""); // Utiliser "query" au lieu de "searchTerm"
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${REACT_APP_API_URL}/recipes/complexSearch`,
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
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative w-full">
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <input
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
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>

      {/* Affichage des résultats de la recherche */}
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((recipe) => (
              <li key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
