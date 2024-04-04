import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ShowUser } from "@/services/userService";

export default function Profile() {
	const [user, setUser] = useState(""); // Initialiser l'état de l'e-mail
	const [userFirstName, setUserFirstName] = useState(user.first_name);
	const userName = user.first_name + " " + user.last_name;

	useEffect(() => {
		const fetchUser = async () => {
			const userData = await ShowUser();
			setUser(userData);
		};

		fetchUser();
	}, []);

	return (
		<Card className="w-full max-w-3xl mx-auto">
			<CardHeader className="space-y-1">
				<CardTitle>Welcome {userName}</CardTitle>
				<CardDescription>You can edit your profile here</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder={user.email} />
					</div>
				</div>
				<div className="flex flex-row mt-6 justify-between">
					<div>
						<Button size="sm" variant="outline">
							Validate
						</Button>
					</div>
					<div className="flex gap-3">
						<Button size="sm" variant="outline">
							Change password
						</Button>
						<Button size="sm">Delete account</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
