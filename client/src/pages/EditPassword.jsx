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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { editPasswordFormSchema } from "../../schema";
import { EditPasswordFetch } from "../services/authService";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

export default function EditPassword() {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		resolver: zodResolver(editPasswordFormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values) => {
		const authToken = Cookies.get("token"); // Récupérez le token d'authentification à partir des cookies
		setIsLoading(true);
		try {
			const data = await EditPasswordFetch(
				authToken, // Passez le token d'authentification à EditPasswordFetch
				values.password, // Passez le nouveau mot de passe à EditPasswordFetch
				values.confirmPassword // Passez la confirmation du mot de passe à EditPasswordFetch
			);
			dispatch(logout());
			Cookies.remove("token");
			window.location.href = "/login";
		} catch (error) {
			console.error("The password could not be updated: " + error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} autoComplete="new-password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormLabel>Confirm New Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} autoComplete="new-password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-5 w-full" disabled={isLoading}>
					{isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{" "}
					Submit
				</Button>
			</form>
		</Form>
	);
}
