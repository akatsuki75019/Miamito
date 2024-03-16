import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/authSlice"; // Assurez-vous que le chemin d'importation est correct.
import { logoutFetch } from "../../services/authService";

export default function LogOutButton() {
	const dispatch = useDispatch();

	const handleClick = async () => {
		try {
			await logoutFetch();
			dispatch(logout()); // Dispatch l'action de déconnexion
			console.log("Logged out successfully");
			Cookies.remove("token");
			window.location.href = "/";
			// Rediriger vers la page de connexion
		} catch (error) {
			console.error("Failed to log out:", error.message);
		}
	};

	// Utilisez un Link ou un NavLink pour la navigation, pas dans le bouton de déconnexion
	return (
		<Link
			to="/"
			onClick={handleClick}
			className="w-full py-1.5 hover:text-primary"
		>
			Log out
		</Link>
	);
}
