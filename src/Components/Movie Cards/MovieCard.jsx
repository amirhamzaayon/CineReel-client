import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="flex flex-col gap-4 p-4 text-black bg-gray-100 rounded-lg shadow-lg w-96 min-h-96">
      <div className="w-full h-40 bg-gray-400 rounded-lg">
        <img
          className="h-auto rounded-lg w-ful"
          src={movie?.moviePoster}
          alt=""
        />
      </div>
      <div className="flex flex-row gap-2 justify-betwee">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{movie.movieTitle}</h3>
          <div className="flex flex-row flex-wrap gap-1">
            <p className="rounded-full badge">{movie.genre}</p>
            <p className="rounded-full badge">🟠 {movie.duration}</p>
            <p className="rounded-full badge">Release on {movie.releaseDate}</p>
          </div>
        </div>

        <div>
          <p>Rating:</p>
          <p>
            IMDd: <span className="badge">{movie.rating}</span>{" "}
          </p>
        </div>
      </div>
      <div>
        <Link
          to={`/moviedetails/${movie._id}`}
          className="w-full bg-orange-500 btn"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};
