import { Outlet } from "react-router-dom";
import { AdminSideMenu } from "../Components/Dashboard - Admin/AdminSideMenu";
import { AdminProfileHeader } from "../Components/Dashboard - Admin/AdminProfileHeader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const AdminDashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userProfiles, setUserProfiles] = useState([]);
  const [reports, setReports] = useState([]);
  const [posts, setPosts] = useState([]);
  // const email = user?.email || "anonymous@example.com";

  useEffect(() => {
    fetch(`https://visionary-ai-server.vercel.app/usersInfo`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUserProfiles(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Dependencies array

  useEffect(() => {
    fetch(`https://visionary-ai-server.vercel.app/usersReports`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setReports(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Dependencies array

  useEffect(() => {
    fetch(`https://visionary-ai-server.vercel.app/search`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Dependencies array

  const adminDashboardData = {
    userProfiles,
    reports,
    posts,
  };
  return (
    <div className="flex flex-row min-h-screen gap-4 p-4 bg-slate-200 rounded-xl">
      <div>
        <AdminSideMenu></AdminSideMenu>
      </div>
      <div className="w-full min-h-screen p-4 bg-white rounded-xl">
        <AdminProfileHeader user={user}></AdminProfileHeader>
        <Outlet context={adminDashboardData} />
      </div>
    </div>
  );
};
