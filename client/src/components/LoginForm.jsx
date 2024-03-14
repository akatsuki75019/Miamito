import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { z } from "zod";
import { loginSuccess } from "../features/authSlice";
import { LoginFetch } from "../services/authService";

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(1, { message: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		setIsLoading(true);
		try {
			const { token, data } = await LoginFetch(values.email, values.password);
			if (token) {
				dispatch(loginSuccess(token));
				localStorage.setItem("token", token);
				Cookies.set("token", token);
				console.log("You are logged in.", data.message);
				window.location.href = "/";
			} else {
				console.error("Token is missing from the response.");
			}
		} catch (error) {
			console.error("Failed to login:", error.message);
			if (error.message.includes("401")) {
				form.setError("password", {
					type: "manual",
					message: "Wrong email or password.",
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="name@example.com"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="mt-5">
								<FormControl>
									<Input type="password" placeholder="Password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{isLoading ? (
						<Button disabled className="mt-5 w-full">
							<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
							Please wait
						</Button>
					) : (
						<Button type="submit" className="mt-5 w-full">
							Sign in
						</Button>
					)}
				</form>
			</Form>
		</main>
	);
}
