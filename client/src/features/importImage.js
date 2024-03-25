export const importImage = () => {
  const IMAGES = {
    logo: new URL("../images/LogoWhiteBG.png", import.meta.url).href,
    logo2: new URL("../images/LogoBlackBG.png", import.meta.url).href,
    logoPrimary: new URL("../images/LogoPrimary.png", import.meta.url).href,
    logoPrimaryDark: new URL("../images/LogoPrimaryDark.png", import.meta.url)
      .href,
    HomePageImage: new URL("../images/HomePageImage.png", import.meta.url).href,
  };
  return IMAGES;
};
