import SearchBar from "@/components/search/SearchBar";
import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";

export default function SearchResults() {
	return (
		<div className="container">
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>
			<div className="mb-16">
				<h1 className="text-5xl font-extrabold">SEARCHING YOUR RECIPE.</h1>
				<p className="text-gray-500 dark:text-gray-400">
					May not work as expected because we don't have enough tokens.
				</p>
			</div>
			<section className="flex justify-start items-center">
				<SearchBar />
			</section>
		</div>

		// <section className="flex flex-col items-center justify-center px-10 pb-20 lg:flex-row">

		// </section>
	);
}
