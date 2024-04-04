import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
	return (
		<section className="w-full py-12 md:py-24">
			<div className="container grid gap-6 px-4 md:px-6">
				<div className="space-y-2 mb-10">
					<h1 className="text-5xl font-extrabold">CONTACT US.</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Please fill out the form below to get in touch with us.
					</p>
				</div>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="first-name">First name</Label>
							<Input id="first-name" placeholder="Enter your first name" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input id="last-name" placeholder="Enter your last name" />
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" placeholder="Enter your email" type="email" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							className="min-h-[100px]"
							id="message"
							placeholder="Enter your message"
						/>
					</div>
					<Button disabled className="px-5">
						Send message
					</Button>
				</div>
			</div>
		</section>
	);
}
