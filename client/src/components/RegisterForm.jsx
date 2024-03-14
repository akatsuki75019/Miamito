// import { useState } from "react";
import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFetch } from "../services/authService";
import {
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormControl,
	FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const registerFormSchema = z
	.object({
		email: z
			.string()
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(1, { message: "Password is required" })
			.min(6, { message: "Password must be at least 6 characters" }),
		confirmPassword: z
			.string()
			.min(1, { message: "Confirm Password is required" }),
	})
	.refine(
		(data) => {
			return data.password === data.confirmPassword;
		},
		{
			message: "Passwords do not match",
			path: ["confirmPassword"],
		}
	);

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

	const onSubmit = async (values) => {
		setIsLoading(true);
		try {
			const data = await RegisterFetch(values.email, values.password);
			console.log(data);
			window.location.href = "/";
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
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input
											placeholder="name@example.com"
											type="email"
											{...field}
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
									<FormControl>
										<Input placeholder="Password" type="password" {...field} />
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
									<FormControl>
										<Input
											placeholder="Confirm password"
											type="password"
											{...field}
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
