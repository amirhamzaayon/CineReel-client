import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieCards = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesInfo = () => {
    fetch(`https://cine-reel-server.vercel.app/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  };

  useEffect(() => {
    fetchMoviesInfo();
  }, []);

  return (
    <div className="min-h-screen py-12 bg-slate-200 rounded-xl">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Find Your{" "}
          <span>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full -rotate-5 bg-orange-400/20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.5564 9.00278H1.00002"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.9279 4.14623C12.9279 4.14623 17.2472 7.79392 17.2472 9.00301C17.2472 10.212 12.9278 13.8597 12.9278 13.8597"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-bold text-gray-900">
                Favourite Shows
              </p>
            </button>
          </span>{" "}
          And <br /> Enjoy Your Every Moments
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 mx-auto w-fit gird md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};
