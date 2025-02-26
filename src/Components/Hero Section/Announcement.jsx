import { useEffect, useState } from "react";

export const Announcement = () => {
  const [announcement, setAnnouncement] = useState([]);

  // useEffect(() => {
  //   fetch("https://visionary-ai-server.vercel.app/announcement")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAnnouncement(data);
  //       // Set the announcement data to the state
  //     });
  // }, []); // Empty dependencies array to run only once

  const getAnnouncement = announcement[0];
  console.log(getAnnouncement);

  return (
    <div className="w-full p-4 text-white rounded-full bg-slate-800">
      <p>🟠 {getAnnouncement?.announcement} 🟠</p>
    </div>
  );
};
