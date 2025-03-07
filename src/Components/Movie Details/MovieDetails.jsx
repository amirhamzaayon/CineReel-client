import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export const MovieDetails = ({ movie }) => {
  const { user } = useContext(AuthContext);

  const handleWishlist = (userEmail, movieID, title) => {
    const wishlistInfo = {
      movieID: movieID,
      userEmail: userEmail,
      movieTitle: title,
    };

    fetch(`https://cine-reel-server.vercel.app/add-to-wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishlistInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Added to Wishlist");
        }
      })
      .catch((error) => console.error("Error updating wishlist:", error));
  };
  return (
    <div className="flex flex-col w-8/12 gap-4 p-4 mt-6 text-black bg-gray-100 rounded-lg shadow-lg">
      <div className="w-full bg-gray-400 rounded-lg h-80">
        <img
          className="w-full rounded-lg h-80"
          src={movie.moviePoster}
          alt=""
        />
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
        <button
          // onClick={() =>
          //   handleWishlist(user.email, movie._id, movie.movieTitle)
          // }
          className="w-full bg-orange-500 btn"
        >
          Add Wishlist
        </button>
      </div>
    </div>
  );
};
