import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../Layouts/HomePageLayout";
// import { ForumDetailsPage } from "../Pages/ForumDetailsPage";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Register } from "../Pages/Register";
import { LoginPage } from "../Pages/LoginPage";

import { MovieDetailsLayout } from "../Layouts/MovieDetailsLayout";
import AddMoviePopupForm from "../Components/AddMoviePopupForm";

// import { UserDashboardLayout } from "../Layouts/UserDashboardLayout";
// import { AdminDashboardLayout } from "../Layouts/AdminDashboardLayout";
// import { MyProfile } from "../Components/Dashboard - User/MyProfile";
// import { MyPost } from "../Components/Dashboard - User/MyPost";
// import { AddPost } from "../Components/Dashboard - User/AddPost";

// import { ManageReportsByAdmin } from "../Components/Dashboard - Admin/ManageReportsByAdmin";
// import { ManageUsersByAdmin } from "../Components/Dashboard - Admin/ManageUsersByAdmin";
// import { MakeAnnouncementByAdmin } from "../Components/Dashboard - Admin/MakeAnnouncementByAdmin";
// import { AdminDashboardData } from "../Components/Dashboard - Admin/AdminDashboardData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children: [
      {
        path: "/add-movie",
        element: <AddMoviePopupForm></AddMoviePopupForm>,
      },
    ],
  },
  // {
  //   path: "/add-movie",
  //   element: <AddMoviePopupForm></AddMoviePopupForm>,
  // },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/moviedetails/:id",
    element: <MovieDetailsLayout></MovieDetailsLayout>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/moviedetails/${params.id}`),
  },

  // {
  //   path: "/dashboard",
  //   element: <NavbarNavigationLayout />,
  //   children: [
  //     {
  //       path: "user",
  //       element: <UserDashboardLayout />,
  //       children: [
  //         {
  //           path: "userprofile",
  //           element: <MyProfile></MyProfile>,
  //         },
  //         {
  //           path: "userposts",
  //           element: <MyPost></MyPost>,
  //         },
  //         {
  //           path: "useraddpost",
  //           element: <AddPost></AddPost>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "admin",
  //       element: <AdminDashboardLayout />,
  //       children: [
  //         {
  //           path: "adminprofile",
  //           element: <AdminDashboardData />,
  //         },
  //         {
  //           path: "manageusers",
  //           element: <ManageUsersByAdmin />,
  //         },
  //         {
  //           path: "managereports",
  //           element: <ManageReportsByAdmin />,
  //         },
  //         {
  //           path: "makeaunouncements",
  //           element: <MakeAnnouncementByAdmin />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
