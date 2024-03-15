import { Separator } from "../ui/separator";
import { Link as RouterLink } from "react-router-dom";
import useIsSmallDisplay from "../../features/isSmallMedia";

export default function BlogDropdown() {
	return (
		<div className="relative cursor-pointer py-2">
			<div className="group underline-offset-4 hover:underline rounded-md">
				<div className="flex items-center justify-between">
					<a className="my-2 py-2 font-medium ml-4 mr-1">Recipe</a>
					<span className="mt-1">
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

				<div className="invisible absolute z-50 w-auto flex bg-slate-50 flex-col py-1 px-4 shadow-md group-hover:visible rounded-md border border-slate-200 whitespace-nowrap">
					<RouterLink
						to="/login"
						className="my-2 text-center block font-medium text-gray-500 hover:text-black w-full h-full"
					>
						All recipes
					</RouterLink>
					<Separator />
					<RouterLink
						to="/register"
						className="my-2 text-center block  font-medium text-gray-500 hover:text-black w-full h-full"
					>
						Categories
					</RouterLink>
				</div>
			</div>
		</div>
	);
}
