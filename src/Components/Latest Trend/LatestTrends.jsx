import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const LatestTrends = () => {
  const images = [
    "/hero-images/1.jpg",
    "/hero-images/2.jpg",
    "/hero-images/3.jpg",
  ];

  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Time between slides (in ms)
  };
  return (
    <div className="min-h-screen rounded-xl bg-slate-200 p-44">
      <div className="flex flex-col items-center mb-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Find Out the Latest Trends
        </h2>
      </div>
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
  );
};
