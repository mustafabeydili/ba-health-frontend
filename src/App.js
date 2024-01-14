import LeftSideMenu from './components/left-side-menu/LeftSideMenu';
import React from "react";
import './scss/App.scss';
import 'antd/dist/reset.css';
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import HealthOffer from './pages/HealthOffer';
import AccommodationOffer from './pages/AccommodatinOffer';
import TravelOffer from './pages/TravelOffer';
import RentaCar from './pages/RentaCar';
import Login from "./pages/Login";
export default class App extends React.Component {
  state = {
    login: true
  };
  componentDidMount() {

  }
  render() {
    const {login} = this.state;
    return (
      <>
      {
      login ? 
      <Login />
      :
      <div className="app">
      <LeftSideMenu />
      
      <div className='content'>
      <Routes>
          <Route path="/healthOffer" element={<HealthOffer />} />
          <Route path="/accommodationOffer" element={<AccommodationOffer />} />
          <Route path="/travelOffer" element={<TravelOffer />} />
          <Route path="/rentaCar" element={<RentaCar />} />
          <Route path="/" element={<Home />} />
      </Routes>
      </div>  
    </div> 
    }
      </>
       
    );
  }
}