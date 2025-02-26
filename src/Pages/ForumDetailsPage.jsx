// import { useContext, useEffect, useState } from "react";
// import { ForumComments } from "../Components/Forum Details Page/ForumComments";
// import { ForumDetails } from "../Components/Forum Details Page/ForumDetails";
// import { NavBar } from "../Components/Navbar";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { AddCommentForm } from "../Components/Forum Details Page/AddCommentForm";

// export const ForumDetailsPage = () => {
//   const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);
//   // const [rating, setRating] = useState(0);
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // console.log(rating);
//   const { comments, ...forumDetails } = useLoaderData() || {};
//   console.log(forumDetails, comments);

//   const handleOpenPopup = () => setIsCommentFormOpen(true);
//   const handleClosePopup = () => setIsCommentFormOpen(false);
//   // const handleRatingChange = (rate) => setRating(rate);

//   // Redirect to login if the user is not authenticated and tries to open the popup
//   useEffect(() => {
//     if (!user?.email && isCommentFormOpen) {
//       navigate("/auth/login");
//     }
//   }, [user, isCommentFormOpen, navigate]);

//   return (
//     <div className="w-8/12 mx-auto">
//       <div className="py-6">
//         <NavBar></NavBar>
//       </div>
//       <section className="container flex min-h-screen gap-4 p-6 mx-auto rounded-lg outline-lime-100 bg-slate-50">
//         <div className="w-1/2 bg-white rounded-md">
//           <ForumDetails forumDetails={forumDetails}></ForumDetails>
//         </div>
//         <div className="w-1/2 bg-white rounded-md">
//           <div className="flex items-center justify-between gap-4 p-4 m-6 bg-gray-100 rounded-lg">
//             <h3 className="text-2xl font-bold">Comments</h3>
//             <div>{/* <p>Total Comment:</p> */}</div>
//           </div>
//           <ForumComments comments={comments}></ForumComments>
//           <button className="m-6 btn" onClick={handleOpenPopup}>
//             Add Comment
//           </button>
//           <div className="m-6">
//             {/* AddReviewPopupForm */}
//             {isCommentFormOpen && user?.email && (
//               <AddCommentForm onClose={handleClosePopup} />
//             )}
//           </div>
//         </div>
//       </section>
//       {/* <section>
//         <RelatedServices></RelatedServices>
//       </section> */}
//     </div>
//   );
// };
