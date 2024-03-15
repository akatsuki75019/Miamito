import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import LogOutButton from "./auth/LogOutButton";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function NavBar() {
	const token = useSelector((state) => state.auth.token);

	return (
		<>
			<section className="flex py-6 md:py-10 lg:py-10 bg-slate-50 mb-16">
				<NavigationMenu className="mx-auto">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Button variant="link" classNameName="text-xl">
								<RouterLink to="/">HOME</RouterLink>
							</Button>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<div className="relative cursor-pointer py-2">
								<div className="group underline-offset-4 hover:underline rounded-md">
									<div className="flex items-center justify-between px-4">
										<a className="my-2 py-2 font-medium lg:mx-4 ">Account</a>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-3 w-3"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19.5 8.25l-7.5 7.5-7.5-7.5"
												/>
											</svg>
										</span>
									</div>

									<div className="invisible absolute z-50 w-full flex bg-slate-50 flex-col py-1 px-4 shadow-md group-hover:visible rounded-md border border-slate-200 whitespace-nowrap">
										{token ? (
											<>
												<LogOutButton />
											</>
										) : (
											<>
												<RouterLink
													to="/login"
													className="my-2 text-center block font-medium text-gray-500 hover:text-black w-full h-full"
												>
													Login
												</RouterLink>
												<Separator />
												<RouterLink
													to="/register"
													className="my-2 text-center block  font-medium text-gray-500 hover:text-black w-full h-full"
												>
													Register
												</RouterLink>
											</>
										)}
									</div>
								</div>
							</div>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</section>
		</>
	);
}

export default NavBar;
