import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginFormSchema } from "../../../schema";
import { loginSuccess } from "../../features/authSlice";
import { LoginFetch } from "../../services/authService";

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		resolver: zodResolver(loginFormSchema),
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
				form.setError("email", {
					type: "manual",
					message: "",
				});
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="name@example.com"
									type="email"
									{...field}
									autoComplete="email"
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
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									{...field}
									autoComplete="current-password"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-5 w-full" disabled={isLoading}>
					{isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{" "}
					Sign in
				</Button>
			</form>
		</Form>
	);
}
