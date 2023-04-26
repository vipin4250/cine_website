import React from "react";
import "./Carousel.css";
import Photo1_carousel from "../Photos/11.jpg";
import Photo2_carousel from "../Photos/8.jpg";
import Photo3_carousel from "../Photos/9.jpg";

export default function Carousel() {
  return (
    <>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active _6_1">
              <img
                className="d-block w-100"
                src={Photo2_carousel}
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block _6_1_1">
                <h1>HUGE COLLECTION</h1>
                <p>
                A vast collection of diverse content stored in a database</p>
              </div>
            </div>
            <div className="carousel-item _6_1">
              <img
                className="d-block w-100"
                src={Photo1_carousel}
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block _6_1_1">
                <h1>CINE SPRITE </h1>
                <p>
                This platform offers a range of benefits to both content creators and viewers, such as the ability to browse for their preferred titles, generate personalized recommendations, and more.</p>
              </div>
            </div>
            <div className="carousel-item _6_1">
              <img
                className="d-block w-100"
                src={Photo3_carousel}
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block _6_1_1">
                <h1>RECOMMENDATION MODEL</h1>
                <p>
                  A machine learning model that is both efficient and rapid,
                  providing accurate recommendations tailored to your business
                  needs.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}
