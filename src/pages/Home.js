import React from "react";
import { Input } from 'antd';

const { Search } = Input;
export default class Home extends React.Component {
  state = {
  };

  render() {
    return (
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
         
          <div className=" col-lg-7 col-md-8 col-sm-12 col-xs-12">
          
        </div>
        </div> 
        <div className="search">
            <Search placeholder="Hastane , Hotel , Araç Arayın" enterButton="Search" size="large" loading />
        </div>

        </div>
    );
  }
}