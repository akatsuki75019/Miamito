import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardImage } from "../ui/card";
import LoginForm from "./LoginForm";
import { importImage } from "../../features/importImage";
import { useTheme } from "../theme/theme-provider";

export default function LoginCard() {
	const images = importImage();
	const { theme } = useTheme();

	return (
		<main className="container">
			<div className="flex items-center justify-center">
				<Card>
					<CardContent className="p-0">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<CardImage
								src=" https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Article image"
								className="md:block hidden rounded-l-xl"
							/>
							<div className="flex flex-col h-full p-12">
								<div className="flex flex-col items-center mb-12 md:mb-24">
									<div className="mb-6 hidden md:block">
										{theme === "dark" ? (
											<img
												src={images.logoPrimaryDark}
												alt="Logo Miamito"
												className="w-44 h-auto"
											/>
										) : (
											<img
												src={images.logo}
												alt="Logo Miamito"
												className="w-44 h-auto"
											/>
										)}
									</div>
									<h1 className="mb-6 text-center text-4xl font-bold text-primary">
										Welcome back !
									</h1>
									<p className="text-center  text-sm  hidden md:block">
										Log in to reclaim your spot within our community. We&apos;re
										delighted to welcome you back among us! Let&apos;s continue
										building connections and sharing enriching experiences
										together.
									</p>
								</div>
								<div className="flex flex-col w-full mx-auto md:w-4/5 gap-10">
									<LoginForm />
									<div className="flex justify-center gap-10">
										<Button variant="link">
											<Link to="/register">Not registered yet ?</Link>
										</Button>
										<Button variant="link">
											<Link to="/password/reset">Forgot password ?</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
