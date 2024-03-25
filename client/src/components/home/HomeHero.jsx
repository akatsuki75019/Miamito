import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomePageImg from "../../images/HomePageImg.svg";
import HomePageImgDark from "../../images/HomePageImgDark.svg";
import { useTheme } from "../theme/theme-provider";

export default function HomeHero() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center px-10 pb-20 lg:flex-row">
      <div className="flex flex-col items-start max-w-md space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-home">
          Healthy Fresh Happy Meal With Miamito
        </h1>
        <h3 className="text-lg ">
          Get your homecooked fresh food for lunch anywhere within 30 minutes
          with paltter
        </h3>
        <Button size="lg">
          <Link to="/recipes"> MEALS OF THE WEEK </Link>
        </Button>
      </div>
      <div className="mt-10 lg:mt-0">
        {theme === "dark" ? (
          <img
            alt="Healthy meal"
            src={HomePageImgDark}
            style={{
              objectFit: "cover",
            }}
            width="400"
          />
        ) : (
          <img
            alt="Healthy meal"
            src={HomePageImg}
            style={{
              objectFit: "cover",
            }}
            width="400"
          />
        )}
      </div>
    </section>
  );
}
