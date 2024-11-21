import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel(){
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(
        <Slider {...settings}>
      <div>
        <h3>Title1</h3>
        <p></p>
      </div>
      <div>
        <h3>Title 2</h3>
      </div>
      <div>
        <h3>Title 3</h3>
      </div>
      <div>
        <h3>Title 4</h3>
      </div>
      <div>
        <h3>Title 5</h3>
      </div>
      <div>
        <h3>Title 6</h3>
      </div>
    </Slider>
    )
}