"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { RowsIcon } from "@radix-ui/react-icons";

export default function SheetSide() {
	return (
		<div className="mr-12">
			<Sheet>
				<SheetTrigger>
					<RowsIcon
						height={"40px"}
						width={"40px"}
						className="sm:hidden block hover:text-red-300 cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>MIAMITO</SheetTitle>
						<SheetDescription>
							Navigate and explore various menu features and options here.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4"></div>
						<div className="grid grid-cols-4 items-center gap-4"></div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
