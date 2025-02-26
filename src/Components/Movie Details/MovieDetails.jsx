import { useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = ({ movie }) => {
  return (
    <div className="flex flex-col w-8/12 gap-4 p-4 mt-6 text-black bg-gray-100 rounded-lg shadow-lg">
      <div className="w-full bg-gray-400 rounded-lg h-80">
        <img className="w-full h-auto rounded-lg" src="" alt="" />
      </div>
      <div className="flex flex-row justify-between gap-2">
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
        <p>
          Description: <br /> {movie.movieDescription}
        </p>
      </div>
      <hr />
      <div>
        <button className="w-full bg-orange-500 btn">Add Wishlist</button>
      </div>
    </div>
  );
};
