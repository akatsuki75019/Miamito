import HomeArticleRow from "@/components/home/HomeArticleRow";
import HomeCardRow from "@/components/home/HomeCardRow";
import HomeHero from "@/components/home/HomeHero";
import HomeRecipRow from "@/components/home/HomeRecipRow";

function Home() {
  return (
    <div className="h-screen">
      <HomeHero />
      <HomeCardRow />
      <HomeRecipRow />
      <HomeArticleRow />
    </div>
  );
}

export default Home;
