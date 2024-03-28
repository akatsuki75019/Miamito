import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";

export default function Component() {
	return (
		<section className=" py-12 md:py-24 lg:py-24">
			<Separator className="mb-10" />
			<div className="container px-4 md:px-6 flex flex-col items-center text-center">
				<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
					Stay Connected
				</h2>
				<p className="mx-auto max-w-[700px]">
					Our website is currently still in the process of being constructed...
				</p>
				<div className="w-full max-w-md space-y-2 my-4">
					<form className="flex space-x-2">
						<Input
							className="max-w-lg flex-1 "
							placeholder="Enter your email"
							type="email"
						/>
						<Button type="submit" className="px-4">
							Subscribe
						</Button>
					</form>
				</div>
				<div className="flex justify-center space-x-4">
					<a
						target="_blank"
						className="hover:text-primary"
						aria-label="Facebook page"
						href="https://www.youtube.com/watch?v=oavMtUWDBTM"
					>
						<FacebookIcon className="h-6 w-6" />
					</a>
					<a
						target="_blank"
						className="hover:text-primary"
						aria-label="Twitter profile"
						href="https://github.com/akatsuki75019/Miamito"
					>
						<GithubIcon className="h-6 w-6" />
					</a>
					<a
						target="_blank"
						className="hover:text-primary"
						aria-label="Instagram profile"
						href="https://www.youtube.com/watch?v=oavMtUWDBTM"
					>
						<InstagramIcon className="h-6 w-6" />
					</a>
					<a
						target="_blank"
						className="hover:text-primary"
						aria-label="LinkedIn profile"
						href="https://www.youtube.com/watch?v=oavMtUWDBTM"
					>
						<LinkedinIcon className="h-6 w-6" />
					</a>
				</div>
			</div>
		</section>
	);
}

function FacebookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	);
}

function InstagramIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function LinkedinIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

function GithubIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}
