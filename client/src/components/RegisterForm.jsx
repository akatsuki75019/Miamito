// import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFetch } from "../services/authService";
import {
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// function RegisterForm() {
// 	const [formData, setFormData] = useState({
// 		user: {
// 			email: "",
// 			password: "",
// 			confirmPassword: "",
// 		},
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevState) => ({
// 			...prevState,
// 			user: {
// 				...prevState.user,
// 				[name]: value,
// 			},
// 		}));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (formData.user.password !== formData.user.confirmPassword) {
// 			alert("Passwords do not match");
// 			return;
// 		}
// 		try {
// 			const data = await RegisterFetch(
// 				formData.user.email,
// 				formData.user.password
// 			);
// 			console.log(data);
// 			window.location.href = "/";
// 		} catch (error) {
// 			alert("Failed to register: " + error.message);
// 		}
// 	};

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
		confirmPassword: z.string(),
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
	const form = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values) => {
		try {
			const data = await RegisterFetch(values.email, values.password);
			console.log(data);
			window.location.href = "/";
		} catch (error) {
			console.error("Failed to register: " + error.message);
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
					<Button type="submit" className="mt-5 w-full">
						Submit
					</Button>
				</form>
			</Form>
		</main>
	);
}
