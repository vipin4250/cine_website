import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import "./Home_1.css";
import Photo1 from "./Photos/21.webp";
import Photo2 from "./Photos/3.jpg";
import Photo3 from "./Photos/4.png";
import Photo4 from "./Photos/12.jpg";
import { FaFacebook,FaTwitter,FaDiscord,FaInstagram } from "react-icons/fa";


export default function Home_1() {

const callback = (entries, observer) => { 
  entries.forEach(entry =>{
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};
  
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback); 

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  observer.observe(EL, options);
});
  return (
    <>
      <div className="_5">
        <div className="_5_0">
          <div className="_5_1">
            <button type="button" class="btn _5_1_2">
              Login 
            </button> 
            <p className="_5_1_1">Cine Councellor</p>
          </div>
        </div>
          <Navbar />
        <div className="_5_2">
          <Carousel />
        </div>
        <div className="_5_3">
          <div className="_5_3_1">
            <p data-inviewport="cinzel">Self Evaluate</p>
            <img className="hvr" src={Photo1} alt="self analysis" />
          </div>
          <div className="_5_3_2">
            <p data-inviewport="cinzel">Advanced Recomender</p>
            <img className="hvr" src={Photo2} alt="recommender" />
          </div>
          <div className="_5_3_3">
            <p data-inviewport="cinzel">Open Source Database</p>
            <img className="hvr" src={Photo3} alt="huge database" />
          </div>
          <div className="_5_3_4">
            <p data-inviewport="cinzel">Wide Variety Of Suggestions</p>
            <img className="hvr" src={Photo4} alt="wide variety" />
          </div>
        </div>
        <div className="_5_4">
          <div data-inviewport="cinzel" >
            <h1 className="_5_4_1">A ONE-STOP DESTINATION FOR ALL YOUR NEEDS </h1>   
            </div>
          <h6 className="_5_4_1" data-inviewport="cinzel" style={{fontSize: "20px"}}>LET'S ENTER INTO THE WORLD OF CINEMA</h6>
          <button className="btn btn-outline-dark btn-outline  _5_4_2" type="button" >Discover more</button>
        </div>
        <div className="_5_5">
          <h1>FOLLOW CINE WEBSITE ON : </h1>
           
          <ul className="_5_5_1">
            <li className="_5_5_1_2">
              <a className="icons_1" href="/" style={{ color: "white" , fontSize: "50px"}}>
                <FaFacebook />
              </a>
              <a className="icons_1" href="/" style={{ color: "white" , fontSize: "50px" }}> 
                <FaTwitter />
              </a>
              <a className="icons_1" href="/" style={{ color: "white" , fontSize: "50px" }}>
                <FaDiscord />
              </a>
              <a className="icons_1" href="/" style={{ color: "white" , fontSize: "50px" }}>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}
