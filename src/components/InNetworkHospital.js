import React from "react";
import Slider from "react-slick";

import acibadem from './../assets/kurumlar/acibadem.png'
import bayindir from './../assets/kurumlar/bayindir.png'
import liv from './../assets/kurumlar/liv.png'
import biruni from './../assets/kurumlar/logo.png'
import medical from './../assets/kurumlar/medical.png'
import medicana from './../assets/kurumlar/medicana.png'
import memorial from './../assets/kurumlar/memorial.png'

export default class InNetworkHospital extends React.Component {
  state = {
  };
  settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  render() {
    return (
      <>
      <span className="title">ANLAŞMALI SAĞLIK KURULUŞLARI</span>
      <div className="slider-container">
    <Slider {...this.settings}>
      <div>
       <img src={acibadem}></img>
      </div>
      <div>
      <img src={bayindir}></img>
      </div>
      <div>
      <img src={liv}></img>
      </div>
      <div>
      <img src={biruni}></img>
      </div>
      <div>
      <img src={medical}></img>
      </div>
      <div>
      <img src={medicana}></img>
      </div>
      <div>
      <img src={memorial}></img>
      </div>
    </Slider>
  </div>
      </>
    
      
    );
  }
}