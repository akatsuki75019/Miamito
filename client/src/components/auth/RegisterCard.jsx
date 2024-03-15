import { Link as RouterLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import RegisterForm from "./RegisterForm";

export default function RegisterCard() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Card className="w-[400px] mt-10">
				<CardHeader className="text-center">
					<CardTitle>Create an account</CardTitle>
					<CardDescription>
						Enter your email and your password below to create your account
					</CardDescription>
					<Separator className="my-4" />
				</CardHeader>
				<CardContent>
					<RegisterForm />
				</CardContent>

				<CardFooter>
					<Button variant="link">
						<RouterLink to="/login">Already registered ?</RouterLink>
					</Button>
					<Separator orientation="vertical" />
					<Button variant="link">
						<RouterLink to="/">Back to home</RouterLink>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
