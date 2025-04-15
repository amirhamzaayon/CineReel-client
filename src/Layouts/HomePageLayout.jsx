import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/Hero Section/HeroSection";
import { LatestTrends } from "../Components/Latest Trend/LatestTrends";
import { MovieCards } from "../Components/Movie Cards/MovieCards";
import { NavBar } from "../Components/NavBar";

export const HomePageLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6 ">
        <HeroSection>
          <NavBar></NavBar>
        </HeroSection>
        <p>Hero Section</p>
      </header>
      <main className="my-6 space-y-6">
        <section id="ServiceCards" className="w-10/12 mx-auto ">
          <MovieCards></MovieCards>
          <p>Movie Cards</p>
        </section>
        <section id="LatestTrend" className="w-10/12 mx-auto ">
          <LatestTrends></LatestTrends>
          <p>Latest Trends</p>
        </section>
        <section id="JoinWithUs" className="w-10/12 mx-auto ">
          <p>Join With Us</p>
        </section>
      </main>
      <footer className="w-10/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};
