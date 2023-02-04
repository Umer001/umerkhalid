import React from "react";
import { Carousel } from "flowbite-react";
const Slider = () => {
  return (
    <div className="h-[120px] sm:h-64 xl:h-80 2xl:h-[455px] rounded ">
      <Carousel indicators={false}>
        <img
          src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fweb_splash%2F1672926557.jpeg&w=1920&q=90"
          alt="..."
        />
        <img
          src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fweb_splash%2F1653935620.png&w=1920&q=90"
          alt="..."
        />
        <img
          src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fweb_splash%2F1675172747.jpg&w=1920&q=90
        "
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Slider;
