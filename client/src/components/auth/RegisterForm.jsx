// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "../../../schema";
import { RegisterFetch } from "../../services/authService";
import Cookies from "js-cookie";
import { loginSuccess } from "../../features/authSlice";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		setIsLoading(true);
		try {
			const { token, data } = await RegisterFetch(
				values.email,
				values.password
			);
			if (token) {
				dispatch(loginSuccess(token));
				localStorage.setItem("token", token);
				Cookies.set("token", token);
				console.log("You are registered and logged in.", data.message);
				window.location.href = "/";
			} else {
				console.error("Token is missing from the response.");
			}
		} catch (error) {
			console.error("Failed to register: " + error.message);
			if (error.message.includes("422")) {
				form.setError("email", {
					type: "manual",
					message: "This email is already taken.",
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => {
							return (
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
									<FormDescription>
										We will never share your email with anyone else!
									</FormDescription>
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => {
							return (
								<FormItem className="mt-7">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											{...field}
											autoComplete="new-password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => {
							return (
								<FormItem className="mt-3">
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											{...field}
											autoComplete="new-password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					{isLoading ? (
						<Button disabled className="mt-5 w-full">
							<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
							Please wait
						</Button>
					) : (
						<Button type="submit" className="mt-5 w-full">
							Sign up
						</Button>
					)}
				</form>
			</Form>
		</main>
	);
}
