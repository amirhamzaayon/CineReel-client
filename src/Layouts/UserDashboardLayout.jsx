import { Outlet } from "react-router-dom";
import { UserSideMenu } from "../Components/Dashboard - User/UserSideMenu";
import { UserProfileHeader } from "../Components/Dashboard - User/UserProfileHeader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const UserDashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const email = user?.email || "anonymous@example.com";

  useEffect(() => {
    fetch(`https://visionary-ai-server.vercel.app/myposts?email=${email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMyPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [user, email]); // Dependencies array

  const userDashboardData = {
    myPosts,
  };

  return (
    <div className="flex flex-row min-h-screen gap-4 p-4 bg-slate-200 rounded-xl">
      <div>
        <UserSideMenu></UserSideMenu>
      </div>
      <div className="w-full min-h-screen p-4 bg-white rounded-xl">
        <UserProfileHeader user={user}></UserProfileHeader>
        <Outlet context={userDashboardData} />
      </div>
    </div>
  );
};
