import { Link as RouterLink } from "react-router-dom";
import { Button } from "../ui/button";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";
import RecipeDropdown from "./RecipeDropdown";
import AboutUsDropdown from "./AboutUsDropdown";
import SideBar from "./SideBar";

function NavBar() {
	return (
		<section className="flex flex-row justify-around items-center py-6 md:py-10 lg:py-10 bg-slate-50 mb-16">
			<div>
				<Button variant="link" className="font-medium text-xl">
					<RouterLink to="/">HOME</RouterLink>
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
			<div className="flex items-center">
				<SideBar />
				<AccountDropdown />
			</div>
		</section>
	);
}

export default NavBar;
