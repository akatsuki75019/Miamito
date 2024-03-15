import { useState, useEffect } from "react";

export default function useIsSmallDisplay() {
	const [isSmallDisplay, setIsSmallDisplay] = useState(
		window.innerWidth <= 640
	);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallDisplay(window.innerWidth <= 640);
		};

		window.addEventListener("resize", handleResize);

		// Nettoyer l'écouteur d'événements lorsque le composant est démonté
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isSmallDisplay;
}
