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
      <>
      <h3>KİŞİYE ÖZEL TEDAVİ HİZMETLERİ</h3>
      <div className="row">
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa21}></img>
        <div className="special-info">
            <span className="title"> Diş Hekimliği</span>
            <span className="info">İmplant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaplama</span>
            <span className="info-detail">Gülüş Tasarımı</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa22}></img>
        <div className="special-info">
            <span className="title">Plastik Cerrahi</span>
            <span className="info">Phinoplasty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liposuction</span>
            <span className="info-detail">Meme Ameliyatı</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa23}></img>
        <div className="special-info">
            <span className="title">Saç Ekimi</span>
            <span className="info">DHI Saç Ekimi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FUE Saç Ekimi</span>
            <span className="info-detail">Kaş-Bıyık Ekimi</span>
        </div>
        </div>
        <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <img src={Sayfa24}></img>
        <div className="special-info">
            <span className="title">Bariatric Cerrahi</span>
            <span className="info">Sleeve Gastrektomi</span>
            <span className="info-detail">Gastrik Bypass&nbsp;&nbsp;&nbsp;&nbsp;Tip2 Diyabet</span>
        </div>
        </div>
        
      </div>
      </>
      
    );
  }
}