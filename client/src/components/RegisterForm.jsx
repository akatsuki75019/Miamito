import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFetch } from "../services/authService";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

const registerFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

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

function RegisterForm() {
	const form =
		useForm <
		z.infer <
		typeof registerFormSchema >>
			{
				resolver: zodResolver(registerFormSchema),
				defaultValues: {
					email: "",
					password: "",
					confirmPassword: "",
				},
			};

	const handleSubmit = () => {
		console.log("submitted");
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => {
							return (
								<FormItem>
									<FormMessage />
								</FormItem>
							);
						}}
					></FormField>
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
