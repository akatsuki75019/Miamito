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
							<p className={style}>See all recipes</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/mealplan">
							<p className={style}>Meal Planner</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/recipes">
							<p className={style}>Our favorites</p>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Link to="/articles/categories">
								<p className={`text-base ${style}`}>Categories</p>
							</Link>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>French</p>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>Asian</p>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>American</p>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>British</p>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>Indian</p>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link to="/articles/categories">
										<p className={style}>Italian</p>
									</Link>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
