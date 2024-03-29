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
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							See all recipes
						</Link>
					</SheetClose>
				</AccordionContent>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Our favorites
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
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
							Our team
						</Link>
					</SheetClose>
				</AccordionContent>
				<AccordionContent>
					<SheetClose asChild>
						<Link to="/articles" className="w-full py-1.5 hover:text-primary">
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
							<Link to="/articles" className="w-full py-1.5 hover:text-primary">
								Profile
							</Link>
						</SheetClose>
					</AccordionContent>
					<AccordionContent>
						<SheetClose asChild>
							<Link to="/articles" className="w-full py-1.5 hover:text-primary">
								List
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
