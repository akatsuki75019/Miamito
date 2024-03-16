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

export default function AboutUsDropdown() {
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
						<div>About us</div>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Our team
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Contact us
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
