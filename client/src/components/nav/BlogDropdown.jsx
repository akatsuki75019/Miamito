import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
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
						<div>Blog</div>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link to="/articles">
							<p className={style}>See all articles</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/articles">
							<p className={style}>Post your article</p>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
