import React from 'react';
import './Carousel.css';
import Photo1_carousel from "../Photos/11.jpg";
import Photo2_carousel from "../Photos/8.jpg";
import Photo3_carousel from "../Photos/9.jpg";

export default function Carousel() {
  return (
    <>
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active _6_1">
      <img className="d-block w-100" src={Photo2_carousel} alt="First slide"/>
    </div>
    <div className="carousel-item _6_1" >
      <img className="d-block w-100" src={Photo1_carousel} alt="Second slide"/>
    </div>
    <div className="carousel-item _6_1">
      <img className="d-block w-100" src={Photo3_carousel} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    </>
  )
}
