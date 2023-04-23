import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./carousel/NextArrow";
import PrevArrow from "./carousel/PrevArrow";
import "../styles/collection.css";
const Collections = ({ list }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="collection-wrapper">
      <div className=" max-width">
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                {/* <div className="collection-card-subtitle">
                <div>{item.places}</div>
                <i class="fa-solid fa-caret-right absolute-center"></i>
              </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
