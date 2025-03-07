import { HeroSection } from "../Components/Hero Section/HeroSection";
// import { Announcement } from "../Components/Announcement";
// import { Testimonial } from "../Components/Testimonial";

import { Footer } from "../Components/Footer";
import { MovieCards } from "../Components/Movie Cards/MovieCards";
import { LatestTrends } from "../Components/Latest Trend/LatestTrends";
import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

// import { ForumCards } from "../Components/Forum section/ForumCards";

export const HomePageLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6 ">
        <HeroSection>
          <NavBar></NavBar>
        </HeroSection>
        <Outlet></Outlet>
      </header>
      <main className="my-6 space-y-6">
        <section id="ServiceCards" className="w-10/12 mx-auto ">
          <MovieCards></MovieCards>
        </section>
        <section id="LatestTrend" className="w-10/12 mx-auto ">
          <LatestTrends></LatestTrends>
        </section>
      </main>
      <footer className="w-10/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};
