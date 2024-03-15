import { Link as RouterLink } from "react-router-dom";
import { importImage } from "../../features/importImage";
import useIsSmallDisplay from "../../features/isSmallMedia";
import { ModeToggle } from "../theme/mode-toggle";
import { useTheme } from "../theme/theme-provider";
import { Button } from "../ui/button";
import AboutUsDropdown from "./AboutUsDropdown";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";
import RecipeDropdown from "./RecipeDropdown";
import SideBar from "./SideBar";

function NavBar() {
  const isSmallDisplay = useIsSmallDisplay();
  const images = importImage();

  console.log(images.logo);
  const { theme } = useTheme();

  return (
    <>
      <section
        className={`flex flex-row mb-16 ${
          isSmallDisplay ? "justify-between" : "justify-around"
        }`}
      >
        <div>
          <RouterLink to="/">
            {theme === "dark" ? (
              <img
                src={images.logoPrimaryDark}
                alt="Logo Miamito"
                className="w-28 h-auto"
              />
            ) : (
              <img
                src={images.logo}
                alt="Logo Miamito"
                className="w-28 h-auto"
              />
            )}
          </RouterLink>
        </div>
        <div className="hidden sm:flex items-center">
          <Button
            variant="link"
            className="font-medium text-base p-0 my-0 mx-3"
          >
            <RouterLink to="/">Home</RouterLink>
          </Button>
          <RecipeDropdown />
          <BlogDropdown />
          <AboutUsDropdown />
        </div>
        <div className="flex items-center">
          {isSmallDisplay ? (
            <SideBar />
          ) : (
            <>
              {" "}
              <ModeToggle /> <AccountDropdown />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default NavBar;
