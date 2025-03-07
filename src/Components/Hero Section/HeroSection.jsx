import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FeatureForum } from "./FeatureForum";
import { Announcement } from "./Announcement";

export const HeroSection = ({ children }) => {
  const [featureForums, setFeatureForums] = useState([]);
  const images = [
    "/hero-images/1.jpg",
    "/hero-images/2.jpg",
    "/hero-images/3.jpg",
  ];

  // useEffect(() => {
  //   fetch("https://visionary-ai-server.vercel.app/top-posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFeatureForums(data);
  //     })
  //     .catch((error) => console.error("Error fetching categories:", error));
  // }, []);

  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Time between slides (in ms)
  };

  return (
    <div className="w-full min-h-screen mt-6 bg-slate-200 rounded-2xl">
      <div className="p-6">{children}</div>
      <div className="px-40 pt-40 space-y-6 text-3xl text-gray-900 ">
        <div>
          <strong className="bg-orange-500 rounded-full badge">CineReel</strong>
          <p className="text-2xl font-light">
            The Best Place to Discover Movies, TV Shows, and Celebrities
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold">
            Welcome to the World of Entertainment
          </h1>
        </div>
        <div className="space-y-6 ">
          <p>🟠 Popular Shows of the Month</p>

          {/* <Slider {...settings}>
            {featureForums.map((feature, index) => (
              <div key={index} className="p-2">
                <FeatureForum key={index} feature={feature}></FeatureForum>
              </div>
            ))}
          </Slider> */}
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <div
                  className="w-full min-h-screen bg-no-repeat bg-cover rounded-2xl"
                  style={{
                    //   height: "500px",
                    backgroundImage: `url(${img})`,
                    //   backgroundSize: "cover",
                    //   backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="mt-6">
          <Announcement></Announcement>
        </div> */}
      </div>
    </div>
  );
};
