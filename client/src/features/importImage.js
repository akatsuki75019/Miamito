export const importImage = () => {
	const IMAGES = {
		logo: new URL("../images/LogoWhiteBG.png", import.meta.url).href,
		logo2: new URL("../images/LogoBlackBG.png", import.meta.url).href,
		logoPrimary: new URL("../images/LogoPrimary.png", import.meta.url).href,
		logoPrimaryDark: new URL("../images/LogoPrimaryDark.png", import.meta.url)
			.href,
		HomePageImage: new URL("../images/HomePageImage.png", import.meta.url).href,
		plat1: new URL("../images/plat1.jpg", import.meta.url).href,
		plat2: new URL("../images/plat2.jpg", import.meta.url).href,
		plat3: new URL("../images/plat3.jpg", import.meta.url).href,
		plat4: new URL("../images/plat4.jpg", import.meta.url).href,
		register: new URL("../images/register.jpg", import.meta.url).href,
		login: new URL("../images/login.jpg", import.meta.url).href,
		articles1: new URL("../images/articles1.jpg", import.meta.url).href,
		articles2: new URL("../images/articles2.jpg", import.meta.url).href,
		articles3: new URL("../images/articles3.jpg", import.meta.url).href,
		articles4: new URL("../images/articles4.jpg", import.meta.url).href,
		articlesTop: new URL("../images/articlesTop.jpg", import.meta.url).href,
		bubbs: new URL("../images/bubbs.jpg", import.meta.url).href,
		sam: new URL("../images/sam.jpg", import.meta.url).href,
	};
	return IMAGES;
};
