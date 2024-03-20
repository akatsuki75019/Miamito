import { useLocation } from "react-router-dom";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function BreadcrumbFeatures() {
	const paths = useLocation();
	const pathNames = paths.pathname.split("/").filter((path) => path);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">
						<p className="hover:text-primary text-base">Home</p>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{pathNames.length > 0 && <BreadcrumbSeparator />}
				{pathNames.map((link, index) => {
					const href = `/${pathNames.slice(0, index + 1).join("/")}`;
					const linkName = link[0].toUpperCase() + link.slice(1, link.length);
					const isLast = index + 1 === pathNames.length;
					return (
						<Fragment key={index}>
							<BreadcrumbItem>
								{!isLast ? (
									<BreadcrumbLink asChild>
										<Link to={href}>
											<p className="hover:text-primary text-base">{linkName}</p>
										</Link>
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage>
										<p className="text-base">{linkName}</p>
									</BreadcrumbPage>
								)}
							</BreadcrumbItem>
							{pathNames.length !== index + 1 && <BreadcrumbSeparator />}
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
