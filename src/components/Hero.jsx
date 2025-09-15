import React from "react";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="img-fluid" src="banner1.jpg" alt="" />
      </div>
      <div>
        <img className="img-fluid" src="banner2.jpg" alt="" />
      </div>
      <div>
        <img className="img-fluid" src="banner3.jpg" alt="" />
      </div>
      <div>
        <img className="img-fluid" src="banner4.jpg" alt="" />
      </div>
    </Slider>
  );
}
