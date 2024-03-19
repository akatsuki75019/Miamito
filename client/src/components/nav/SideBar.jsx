"use client";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetClose,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import LogoutButton from "../auth/LogoutButton";
import { RowsIcon } from "@radix-ui/react-icons";
import SideBarAccordion from "./SideBarAccordion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModeToggle } from "../theme/mode-toggle";

export default function SheetSide() {
	const token = useSelector((state) => state.auth.token);
	return (
		<div className="mr-12">
			<Sheet>
				<SheetTrigger>
					<RowsIcon
						height={"40px"}
						width={"40px"}
						className="md:hidden block hover:text-primary cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader className="my-12">
						<SheetClose asChild>
							<Link to="/">
								<SheetTitle className="text-5xl mb-5">
									<span className="pb-0.5 text-primary font-extrabold">
										MIAMITO
									</span>
								</SheetTitle>
								<SheetDescription>
									A website providing weekly meal recipes along with
									corresponding shopping lists.
								</SheetDescription>
							</Link>
						</SheetClose>
					</SheetHeader>
					<div className="mb-12">
						<ModeToggle />
					</div>

					<SideBarAccordion />

					<SheetFooter className="text-primary uppercase absolute bottom-8 text-2xl font-semibold">
						{token ? (
							<LogoutButton />
						) : (
							<div className="flex">
								<SheetClose asChild>
									<Link to="/login">Log in</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link to="/register" className="ml-24">
										Register
									</Link>
								</SheetClose>
							</div>
						)}
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}
