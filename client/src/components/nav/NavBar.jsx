import { Link } from "react-router-dom";
import { importImage } from "../../features/importImage";
import useIsMediumDisplay from "../../features/isMediumMedia";
import { ModeToggle } from "../theme/mode-toggle";
import { useTheme } from "../theme/theme-provider";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AboutUsDropdown from "./AboutUsDropdown";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";
import RecipeDropdown from "./RecipeDropdown";
import SideBar from "./SideBar";

function NavBar() {
	const isMediumDisplay = useIsMediumDisplay();
	const images = importImage();
	const { theme } = useTheme();

	return (
		<>
			<section
				className={`flex flex-row mt-6 mb-16 ${
					isMediumDisplay ? "justify-between" : "justify-around"
				}`}
			>
				<div>
					<Link to="/">
						{theme === "dark" ? (
							<img
								src={images.logoPrimaryDark}
								alt="Logo Miamito"
								className="w-28 ml-10 h-auto"
							/>
						) : (
							<img
								src={images.logo}
								alt="Logo Miamito"
								className="w-28 ml-10 h-auto"
							/>
						)}
					</Link>
				</div>
				<div className="hidden md:flex items-center pb-5 gap-7">
					<Button variant="link" className="text-lg font-medium p-0 my-0 mx-3">
						<Link to="/">
							<span className="pb-0.5">Home</span>
						</Link>
					</Button>
					<RecipeDropdown />
					<BlogDropdown />
					<AboutUsDropdown />
					<div>
						<Separator />
					</div>
				</div>
				<div className="flex items-center pb-5">
					{isMediumDisplay ? (
						<SideBar />
					) : (
						<>
							<ModeToggle /> <AccountDropdown />
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default NavBar;
