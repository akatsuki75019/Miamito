import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import LogOutButton from "./auth/LogOutButton";

function NavBar() {
	const token = useSelector((state) => state.auth.token);

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger as={RouterLink} to="/">
						Home
					</NavigationMenuTrigger>
				</NavigationMenuItem>

				{token ? (
					<NavigationMenuItem as="li">
						<LogOutButton />
					</NavigationMenuItem>
				) : (
					<>
						<NavigationMenuItem as="li">
							<RouterLink to="/login">Sign in</RouterLink>
						</NavigationMenuItem>
						<NavigationMenuItem as="li">
							<RouterLink to="/register">Sign up</RouterLink>
						</NavigationMenuItem>
					</>
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavBar;
