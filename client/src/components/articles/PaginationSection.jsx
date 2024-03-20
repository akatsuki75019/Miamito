import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationEllipsis,
	PaginationPrevious,
	PaginationNext,
} from "../ui/pagination";

export default function PaginationArticles({
	totalPosts,
	postsPerPage,
	currentPage,
	setCurrentPage,
}) {
	const handleNextPage = () => {
		if (currentPage < pageNumbers.length) {
			setCurrentPage(currentPage + 1);
			window.scrollTo(0, 0);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			window.scrollTo(0, 0);
		}
	};

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const renderPages = () => {
		const renderedPages = [];

		// Always add the first page
		renderedPages.push(renderPage(1));

		// Add ellipsis after the first page if necessary
		if (currentPage > 5) {
			renderedPages.push(renderEllipsis("ellipsis-start"));
		}

		// Add pages around current page
		const startPage = Math.max(2, currentPage - 3);
		const endPage = Math.min(pageNumbers.length - 1, currentPage + 3);
		for (let i = startPage; i <= endPage; i++) {
			renderedPages.push(renderPage(i));
		}

		// Add ellipsis before the last page if necessary
		if (currentPage < pageNumbers.length - 4) {
			renderedPages.push(renderEllipsis("ellipsis-end"));
		}

		// Always add the last page
		if (pageNumbers.length > 1) {
			renderedPages.push(renderPage(pageNumbers.length));
		}

		return renderedPages;
	};

	// Helper function to render a single page number
	const renderPage = (page) => (
		<PaginationItem
			key={page}
			className={
				currentPage === page ? "hover:text-primary rounded-md text-primary" : ""
			}
		>
			<PaginationLink
				className="hover:text-primary cursor-pointer"
				onClick={() => {
					setCurrentPage(page);
					window.scrollTo(0, 0);
				}}
			>
				{page}
			</PaginationLink>
		</PaginationItem>
	);

	// Helper function to render an ellipsis
	const renderEllipsis = (key) => (
		<PaginationEllipsis
			key={key}
			// No click handler for ellipsis, it's not usually clickable
		/>
	);

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => handlePrevPage()}
						className="hover:text-primary cursor-pointer pr-5"
					/>
				</PaginationItem>

				{renderPages()}

				<PaginationItem>
					<PaginationNext
						onClick={() => handleNextPage()}
						className="hover:text-primary cursor-pointer pl-5"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
