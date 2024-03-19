import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu";

export default function AccountDropdown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const token = useSelector((state) => state.auth.token);

	return (
		<DropdownMenu onOpenChange={setDropdownOpen}>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center ml-5">
					<Button
						variant="link"
						className={`text-lg  ${
							dropdownOpen ? "link-static text-primary" : ""
						}`}
					>
						<div>My account</div>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					{token ? (
						<>
							<DropdownMenuItem asChild>
								<Link
									to="/articles"
									className="w-full py-1.5 hover:text-primary"
								>
									Profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link
									to="/articles"
									className="w-full py-1.5 hover:text-primary"
								>
									Lists
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem asChild>
								<LogoutButton />
							</DropdownMenuItem>
						</>
					) : (
						<>
							<DropdownMenuItem asChild>
								<Link to="/login" className="w-full py-1.5 hover:text-primary">
									Login
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link
									to="/register"
									className="w-full py-1.5 hover:text-primary"
								>
									Register
								</Link>
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
