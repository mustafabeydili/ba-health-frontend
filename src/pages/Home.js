import React from "react";
import { Input } from 'antd';
import searchLeft from './../assets/search-left.png'
import searchRight from './../assets/search-right.png'
import healthImage from './../assets/health.jpg'
import konaklama from './../assets/konaklama.jpg'
import rentcar from './../assets/rentcar.jpg'
import travel from './../assets/travel.jpg'
import TakeOffer from './../components/TakeOffer'
import SpecialHealth from './../components/SpecialHealth'
import SpecialJob from './../components/SpecialJob'

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
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <TakeOffer></TakeOffer>
              </div>
            </div>
           
        </div>
        </div> 
        <div className="search row bottom-lg">
        <div className="col-lg-1 col-md-2 col-sm-12 col-xs-12">
         <img src={searchLeft}></img>
        </div>
        <div className="col-lg-10 col-md-8 col-sm-12 col-xs-12">
          <Search placeholder="Hastane , Hotel , Araç Arayın" enterButton="Search" size="large" loading />
        </div>
        <div className="col-lg-1 col-md-2 col-sm-12 col-xs-12">
        <img src={searchRight}></img>
        </div>
        </div>
      
        </div>
        <div className="row links">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
         <span>SAĞLIK</span>
         <br />
         <img src={healthImage}></img>
        </div>
        <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <span>KONAKLAMA</span>
        <br />
        <img src={konaklama}></img>
        </div>
        <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6">
         <span>SEYAHAT/GEZİ</span>
         <br />
         <img src={travel}></img>
        </div>
        <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <span>ARAÇ KİRALAMA</span>
          <br />
          <img src={rentcar}></img>
        </div>
      
        </div> 
        <div className="special-health">
          <SpecialHealth></SpecialHealth>
        </div>
        <div className="special-job">
        <SpecialJob></SpecialJob>
        </div>
      </>
      
    );
  }
}