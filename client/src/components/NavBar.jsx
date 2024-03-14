import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import LogOutButton from "./LogOutButton";

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
              <NavigationMenuLink as={RouterLink} to="/login">
                Sign in
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="li">
              <NavigationMenuLink as={RouterLink} to="/register">
                Sign up
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
