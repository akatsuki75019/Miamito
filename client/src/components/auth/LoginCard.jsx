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
import LoginForm from "./LoginForm";

export default function LoginCard() {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<Card className="w-[400px] mt-10">
				<CardHeader className="text-center">
					<CardTitle>Sign in</CardTitle>
					<CardDescription>Log in to your account</CardDescription>
					<Separator className="my-4" />
				</CardHeader>
				<CardContent>
					<LoginForm />
				</CardContent>

				<CardFooter>
					<Button variant="link">
						<RouterLink to="/register">Not registered yet ?</RouterLink>
					</Button>
					<Separator orientation="vertical" />
					<Button variant="link">
						<RouterLink to="/password/reset">Forgot password ?</RouterLink>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
