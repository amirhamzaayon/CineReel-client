import { useLoaderData, useParams } from "react-router-dom";
import { MovieDetails } from "../Components/Movie Details/MovieDetails";
import { NavBar } from "../Components/NavBar";

export const MovieDetailsLayout = () => {
  const movie = useLoaderData();
  console.log(movie);
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section className="flex items-center justify-center w-10/12 mx-auto">
          <MovieDetails movie={movie}></MovieDetails>
        </section>
      </main>
    </div>
  );
};
