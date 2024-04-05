import { Link } from "react-router-dom";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import { useSelector } from "react-redux";
import { SheetClose } from "../ui/sheet";

export default function SideBarAccordion() {
	const token = useSelector((state) => state.auth.token);
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Recipe</AccordionTrigger>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/recipes" className="w-full py-1.5 hover:text-primary">
							All Recipes
						</Link>
					</SheetClose>
				</AccordionContent>

				<AccordionContent>
					<SheetClose asChild>
						<Link to="/mealplan" className="w-full py-1.5 hover:text-primary">
							Meal Planner
						</Link>
					</SheetClose>
				</AccordionContent>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/search" className="w-full py-1.5 hover:text-primary">
							Search Recipe
						</Link>
					</SheetClose>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger>Blog</AccordionTrigger>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							See all articles
						</Link>
					</SheetClose>
				</AccordionContent>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Post your article
						</Link>
					</SheetClose>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger>About us</AccordionTrigger>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/team" className="w-full py-1.5 hover:text-primary">
							Our team
						</Link>
					</SheetClose>
				</AccordionContent>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/contact" className="w-full py-1.5 hover:text-primary">
							Contact us
						</Link>
					</SheetClose>
				</AccordionContent>
			</AccordionItem>

			{token ? (
				<AccordionItem value="item-4">
					<AccordionTrigger>My account</AccordionTrigger>
					<AccordionContent>
						<SheetClose asChild>
							<Link to="/profile" className="w-full py-1.5 hover:text-primary">
								Profile
							</Link>
						</SheetClose>
					</AccordionContent>
					<AccordionContent>
						<SheetClose asChild>
							<Link to="/list" className="w-full py-1.5 hover:text-primary">
								My List
							</Link>
						</SheetClose>
					</AccordionContent>
				</AccordionItem>
			) : (
				""
			)}
		</Accordion>
	);
}
