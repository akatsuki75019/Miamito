import { Link } from "react-router-dom";
import { useState } from "react";
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
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							See all recipes
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Our favorites
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Link
								to="/articles/categories"
								className="w-full py-1.5 hover:text-primary"
							>
								Categories
							</Link>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										French
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										Asian
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										American
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										British
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										Indian
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										to="/articles/categories"
										className="w-full py-1.5 hover:text-primary"
									>
										Italian
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
