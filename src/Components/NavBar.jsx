import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

export const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  // console.log(user);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`https://visionary-ai-server.vercel.app/usersInfo/${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUserRole(data.userRole);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user role:", error);
  //       });
  //   }
  // }, [user]);

  console.log(userRole);

  const publiceNavLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="#ServiceCards" onClick={() => scrollToSection("ServiceCards")}>
        Explore Shows
      </Link>
      <Link to="#faq" onClick={() => scrollToSection("faq")}>
        Current Trending
      </Link>
    </>
  );
  const privateNavLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="#ServiceCards" onClick={() => scrollToSection("ServiceCards")}>
        Explore Shows
      </Link>
      <Link to="#LatestTrend" onClick={() => scrollToSection("LatestTrend")}>
        Current Trending
      </Link>
      <Link to="#faq" onClick={() => scrollToSection("faq")}>
        Wishlist
      </Link>
      <Link className="bg-orange-500 btn" to={"/add-movie"}>
        Add Movies{" "}
      </Link>
    </>
  );
  return (
    <div>
      <div className="justify-between rounded-2xl navbar bg-slate-100">
        <div className="">
          <a className="text-xl bg-orange-500 rounded-full btn btn-ghost">
            CineReel
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 font-medium text-black flex-2">
          {user ? privateNavLinks : publiceNavLinks}
        </div>
        <div className="flex-none">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {user && user.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span
                      onClick={() => {
                        logOut();
                        navigate("/");
                      }}
                      className="p-3 badge"
                    >
                      Logout
                    </span>
                  </a>
                </li>
                {/* {userRole === "Admin" ? (
                  <li>
                    <Link to="/dashboard/admin">Admin Dashboard</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/dashboard/user">Dashboard</Link>
                  </li>
                )} */}
                {/* {----------------------------------------------------------------} */}
                {/* <li>
                  <Link to="/dashboard/user">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/admin">Admin Dashboard</Link>
                </li> */}
                {/* <li>
                  <a>Update Profile</a>
                </li> */}
                {/* <li>
                  <a onClick={logOut}>Logout</a>
                </li> */}
              </ul>
            </div>
          ) : (
            <div className="font-bold text-black">
              <Link to="/auth/login" className="rounded-full btn btn-ghost">
                Login
              </Link>
              <Link to="/auth/register" className="rounded-full btn btn-ghost">
                Join Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
