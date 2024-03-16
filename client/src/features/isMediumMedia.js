import { useState, useEffect } from "react";

export default function useIsMediumDisplay() {
	const [isMediumDisplay, setIsMediumDisplay] = useState(
		window.innerWidth <= 768
	);

	useEffect(() => {
		const handleResize = () => {
			setIsMediumDisplay(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		// Nettoyer l'écouteur d'événements lorsque le composant est démonté
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMediumDisplay;
}
