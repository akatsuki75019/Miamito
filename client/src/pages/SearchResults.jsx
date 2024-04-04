import SearchBar from "@/components/search/SearchBar";
import BreadcrumbFeatures from "@/features/BreadcrumbFeatures";

export default function SearchResults() {
	return (
		<div className="container">
			<div className="mb-20">
				<BreadcrumbFeatures />
			</div>
			<div className="mb-24">
				<h1 className="text-5xl font-extrabold">SEARCHING YOUR RECIPE.</h1>
			</div>
			<section className="flex flex-col items-center pb-20 lg:flex-row">
				<SearchBar />
			</section>
		</div>

		// <section className="flex flex-col items-center justify-center px-10 pb-20 lg:flex-row">

		// </section>
	);
}
