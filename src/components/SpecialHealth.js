import React from "react";
import Sayfa21 from './../assets/sayfa2-1.jpg'
import Sayfa22 from './../assets/sayfa2-2.jpg'
import Sayfa23 from './../assets/sayfa2-3.jpg'
import Sayfa24 from './../assets/sayfa2-4.jpg'

export default class SpecialHealth extends React.Component {
  state = {
  };
  
  render() {
    return (
      <div className="row">
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa21}></img>
        <div className="special-info">
            <span className="title"> Diş Hekimliği</span>
            <span className="title">İmplant     Kaplama</span>
            <span className="title">Gülüş Tasarımı</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa22}></img>
        <div className="special-info">
            <span className="title">Plastik Cerrahi</span>
            <span className="title">Phinoplasty     Liposuction</span>
            <span className="title">Meme Ameliyatı</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa23}></img>
        <div className="special-info">
            <span className="title">Saç Ekimi</span>
            <span className="title">İmplant     Kaplama</span>
            <span className="title">Gülüş Tasarımı</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa24}></img>
        <div className="special-info">
            <span className="title"> Diş Hekimliği</span>
            <span className="title">İmplant     Kaplama</span>
            <span className="title">Gülüş Tasarımı</span>
        </div>
        </div>
        
      </div>
    );
  }
}