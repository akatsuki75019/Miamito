// import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { RegisterFetch } from "../services/authService";
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
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.confirmPassword;
		},
		{
			message: "Les mots de passe ne correspondent pas",
			path: ["confirmPassword"],
		}
	);

function RegisterForm() {
	const form = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = () => {
		console.log("slt");
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
									<FormLabel>Email address</FormLabel>
									<FormControl>
										<Input
											placeholder="Adresse email"
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
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Mot de passe"
											type="password"
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
						name="confirmPassword"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Password Confirm</FormLabel>
									<FormControl>
										<Input
											placeholder="Confirmer le mot de passe"
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

		// <Form onSubmit={handleSubmit}>
		// 	<Form.Group className="mb-3" controlId="formBasicEmail">
		// 		<Form.Label>Email address</Form.Label>
		// 		<Form.Control
		// 			type="email"
		// 			name="email"
		// 			value={formData.user.email}
		// 			onChange={handleChange}
		// 			placeholder="Enter email"
		// 		/>
		// 		<Form.Text className="text-muted">
		// 			We will never share your email with anyone else.
		// 		</Form.Text>
		// 	</Form.Group>

		// 	<Form.Group className="mb-3" controlId="formBasicPassword">
		// 		<Form.Label>Password</Form.Label>
		// 		<Form.Control
		// 			type="password"
		// 			name="password"
		// 			value={formData.user.password}
		// 			onChange={handleChange}
		// 			placeholder="Password"
		// 		/>
		// 	</Form.Group>

		// 	<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
		// 		<Form.Label>Confirm Password</Form.Label>
		// 		<Form.Control
		// 			type="password"
		// 			name="confirmPassword"
		// 			value={formData.user.confirmPassword}
		// 			onChange={handleChange}
		// 			placeholder="Confirm Password"
		// 		/>
		// 	</Form.Group>

		// 	<Button variant="primary" type="submit">
		// 		Submit
		// 	</Button>
		// </Form>
	);
}

export default RegisterForm;
