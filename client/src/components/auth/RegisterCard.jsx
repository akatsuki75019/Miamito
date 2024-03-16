import { Link } from "react-router-dom";
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
		<div className="w-full mx-auto flex items-center justify-center">
			<Card className="w-[400px]">
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
						<Link to="/login">Already registered ?</Link>
					</Button>
					<Separator orientation="vertical" />
					<Button variant="link">
						<Link to="/">Back to home</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
