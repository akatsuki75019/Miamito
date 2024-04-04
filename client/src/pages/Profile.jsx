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

export default function Profile() {
	const [email, setEmail] = useState(""); // Initialiser l'état de l'e-mail

	useEffect(() => {
		const fetchUserEmail = async () => {
			const response = await fetch("/api/user"); // Remplacer par votre API
			const user = await response.json();
			setEmail(user.email);
		};

		fetchUserEmail();
	}, []);
	return (
		<Card className="w-full max-w-3xl mx-auto">
			<CardHeader className="space-y-1">
				<CardTitle>User profile</CardTitle>
				<CardDescription>You can edit your profile here</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder={email} />
					</div>
				</div>
				<div className="mt-6">
					<Button size="sm" variant="outline">
						Change password
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
