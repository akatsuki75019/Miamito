import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function BlogDropdown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const style = "w-full py-1.5 hover:text-primary cursor-pointer";

	return (
		<DropdownMenu onOpenChange={setDropdownOpen}>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center">
					<Button
						variant="link"
						className={`text-lg  ${
							dropdownOpen ? "link-static text-primary" : ""
						}`}
					>
						<div>Recipes</div>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link to="/recipes">
							<p className={style}>All Recipes</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/mealplan">
							<p className={style}>Meal Planner</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/search">
							<p className={style}>Search Recipe</p>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
