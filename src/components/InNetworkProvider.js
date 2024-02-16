import React from "react";
import Slider from "react-slick";

import avis from './../assets/kurumlar/avis.png'
import budget from './../assets/kurumlar/budget.png'
import enterprise from './../assets/kurumlar/enterprise.jpg'
import hilton from './../assets/kurumlar/hilton.png'
import ibis from './../assets/kurumlar/ibis.png'
import marriott from './../assets/kurumlar/marriott.png'
import ramada from './../assets/kurumlar/ramada.png'
import sixt from './../assets/kurumlar/sixt.png'
import sheraton from './../assets/kurumlar/sheraton.png'


export default class InNetworkProvider extends React.Component {
  state = {
  };
  settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  render() {
    return (
      <>
      <span className="title">ANLAŞMALI OTEL VE ARAÇ KİRALAMA ŞİRKETLERİ</span>
      <div className="slider-container">
    <Slider {...this.settings}>
      <div>
       <img src={avis}></img>
      </div>
      <div>
      <img src={budget}></img>
      </div>
      <div>
      <img src={enterprise}></img>
      </div>
      <div>
      <img src={hilton}></img>
      </div>
      <div>
      <img src={ibis}></img>
      </div>
      <div>
      <img src={marriott}></img>
      </div>
      <div>
      <img src={ramada}></img>
      </div>
      <div>
      <img src={sixt}></img>
      </div>
      <div>
      <img src={sheraton}></img>
      </div>
    </Slider>
  </div>
      </>
    
      
    );
  }
}