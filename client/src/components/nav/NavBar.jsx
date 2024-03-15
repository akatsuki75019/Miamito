import { Link as RouterLink } from "react-router-dom";
import { Button } from "../ui/button";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";
import RecipeDropdown from "./RecipeDropdown";
import AboutUsDropdown from "./AboutUsDropdown";

function NavBar() {
	const MenuIcon = () => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
			></path>
		</svg>
	);

	return (
		<section className="flex flex-row justify-around items-center py-6 md:py-10 lg:py-10 bg-slate-50 mb-16">
			<div>
				<Button variant="link" className="font-medium text-xl">
					<RouterLink to="/">
						<MenuIcon />
					</RouterLink>
				</Button>
			</div>
			<div className="flex items-center">
				<Button variant="link" className="font-medium text-base p-0 my-0 mx-3">
					<RouterLink to="/">Home</RouterLink>
				</Button>
				<RecipeDropdown />
				<BlogDropdown />
				<AboutUsDropdown />
			</div>
			<div>
				<AccountDropdown />
			</div>
		</section>
	);
}

export default NavBar;
