import React from "react";
import { Input } from 'antd';
import product from './../assets/products.jpg'
const { Search } = Input;
export default class Home extends React.Component {
  state = {
  };

  render() {
    return (
      <>
      <div className="home">
        <div className="row">
        <div className="slogan col-lg-5 col-md-4 col-sm-12 col-xs-12">
          <h1>
          COMPARE CLINIC, HOTEL, TRANSFER
          CAR RENTAL COMPANIES,
          AND BOOK ONLINE
          </h1>
          <h5>
          Healthgate: Akredite klinikleri , konforlu ve en uygun otelleri , istediğiniz
          tarzda aracı ve keyfinize göre bir tatil programını bulun , karşılaştırın ve
          çevrimiçi rezervasyon yapın. Türkiye'de sağlık hizmeti ile birlikte bütüncül
          hizmet almanın en güvenli yolu. Dünya çapında 100.000'den fazla hasta
          tarafından güvenilmektedir.
          </h5>
        </div>
         
          <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="take-offer">

              </div>
              </div>
            </div>
           
        </div>
        </div> 
        <div className="search row">
            <Search placeholder="Hastane , Hotel , Araç Arayın" enterButton="Search" size="large" loading />
        </div>
      
        </div>
        <div className="row links">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         SAĞLIK
        </div>
         
        <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-3">
          KONAKLAMA
        </div>
        <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-3">
          SEYAHAT/GEZİ
        </div>
        <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ARAÇ KİRALAMA
        </div>
      
        </div> 
        <img className="product" src={product}></img>
      </>
      
    );
  }
}