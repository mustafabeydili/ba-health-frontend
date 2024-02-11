import React from "react";
import Sayfa31 from './../assets/sayfa3-1.jpg'
import Sayfa32 from './../assets/sayfa3-2.jpg'
import Sayfa33 from './../assets/sayfa3-3.jpg'
import Sayfa34 from './../assets/sayfa3-4.jpg'

export default class SpecialJob extends React.Component {
  state = {
  };
  
  render() {
    return (
      <>
      <h3>KİŞİYE ÖZEL YARDIMCI HİZMETLER</h3>
      <div className="row">
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa31}></img>
            <span className="title">KONAKLAMA</span>
        
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa32}></img>
            <span className="title">VİP TRANSFER</span>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa33}></img>
            <span className="title">ARAÇ KİRALAMA</span>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa34}></img>
            <span className="title">SEYAHAT</span>
        </div>
        
      </div>
      </>
      
    );
  }
}