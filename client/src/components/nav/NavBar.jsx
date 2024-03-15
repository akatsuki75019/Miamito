import { Link as RouterLink } from "react-router-dom";
import { Button } from "../ui/button";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";
import RecipeDropdown from "./RecipeDropdown";
import AboutUsDropdown from "./AboutUsDropdown";
import SideBar from "./SideBar";
import useIsSmallDisplay from "../../features/isSmallMedia";
import { importImage } from "../../features/importImage";
import { ModeToggle } from "../theme/mode-toggle";

function NavBar() {
	const isSmallDisplay = useIsSmallDisplay();
	const images = importImage();

	return (
		<>
			<section
				className={`flex flex-row mt-6 mb-16 ${
					isSmallDisplay ? "justify-between" : "justify-around"
				}`}
			>
				<div>
					<RouterLink to="/">
						<img src={images.logo} alt="Logo Miamito" className="w-28 h-auto" />
					</RouterLink>
				</div>
				<div className="hidden sm:flex items-center pb-5">
					<Button
						variant="link"
						className="font-medium text-base p-0 my-0 mx-3"
					>
						<RouterLink to="/">Home</RouterLink>
					</Button>
					<RecipeDropdown />
					<BlogDropdown />
					<AboutUsDropdown />
				</div>
				<div className="flex items-center pb-5">
					{isSmallDisplay ? (
						<SideBar />
					) : (
						<>
							{" "}
							<ModeToggle /> <AccountDropdown />
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default NavBar;
