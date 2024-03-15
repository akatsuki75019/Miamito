export const importImage = () => {
	const IMAGES = {
		logo: new URL("../images/logo.png", import.meta.url).href,
		logo2: new URL("../images/logo2.png", import.meta.url).href,
	};
	return IMAGES;
};
