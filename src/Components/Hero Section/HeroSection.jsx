import { useEffect, useState } from "react";

import Slider from "react-slick";
import { FeatureForum } from "./FeatureForum";
import { Announcement } from "./Announcement";

export const HeroSection = ({ children }) => {
  const [featureForums, setFeatureForums] = useState([]);

  useEffect(() => {
    fetch("https://visionary-ai-server.vercel.app/top-posts")
      .then((res) => res.json())
      .then((data) => {
        setFeatureForums(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // const settings = {
  //   dots: true, // Enable dots at the bottom
  //   infinite: true, // Infinite looping
  //   speed: 500, // Transition speed
  //   slidesToShow: 3, // Show one slide at a time
  //   slidesToScroll: 1, // Scroll one slide at a time
  //   autoplay: true, // Auto-slide
  //   autoplaySpeed: 3000, // Time between slides (in ms)
  // };

  return (
    <div className="w-full min-h-screen mt-6 bg-slate-200 rounded-2xl">
      <div className="p-6">{children}</div>
      <div className="px-40 pt-40 space-y-6 text-3xl text-gray-900 ">
        <div>
          <strong className="rounded-full badge">Visonary AI</strong>
          <p className="text-2xl font-light">
            A Forum for Tomorrow’s AI Pioneers
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold">
            Discover the Future of AI <br /> Insights, Innovations &
            Conversations
          </h1>
        </div>
        <div className="space-y-6 ">
          <p>🟠 Popular Topics Shaping AI Today:</p>

          {/* <Slider {...settings}>
            {featureForums.map((feature, index) => (
              <div key={index} className="p-2">
                <FeatureForum key={index} feature={feature}></FeatureForum>
              </div>
            ))}
          </Slider> */}
        </div>
        <div className="mt-6">
          <Announcement></Announcement>
        </div>
      </div>
    </div>
  );
};
