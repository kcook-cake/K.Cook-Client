import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; HashRouter
import '../styles/common/SellerMypage.scss';

import Header from '../components/header/Header';
import HMMobile from './header/HMMobile';
import Main from './Main';
import Footer from '../components/Footer';
import Mypage from './Mypage';
import Seller from './Seller';
import Login from './Login';
import LoginFind from './LoginFind';
import SignUp from './SignUp';
import SignOut from './SignOut';

import Test from '../components/Test';
import StoreDetail from './detail/StoreDetail';
import CakeDetail from './detail/CakeDetail';
import SignOut from './SignOut';

const Pages = () => {
  const [numLeftMobile, setNumLeftMobile] = useState(1);
  useEffect(()=>{
    //pathname, parameter 가져오기
    var pathname = window.location.pathname;
    if (pathname == "/") pathname = "/Home";
    pathname = pathname.split("/")[1];
    if (
      pathname == "SellerOrder" || 
      pathname == "SalesHistory" || 
      pathname == "ProductManagement" || 
      pathname == "SellerReview" || 
      pathname == "SellerStore" 
      || pathname == "FullCalendarApp"
      ) setNumLeftMobile(2);
    else if (
      pathname == "MypageOrder" || 
      pathname == "ProductReview" || 
      pathname == "Membership" || 
      pathname == "Coupon" || 
      pathname == "Profile") setNumLeftMobile(3);
    // else setNumLeftMobile(4);
  },[]);

  return (
    <Router>
      <HMMobile numLeftMobile={numLeftMobile} setNumLeftMobileF={setNumLeftMobile} />
      <Header setNumLeftMobileF={setNumLeftMobile} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/LoginFind" component={LoginFind} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignOut" component={SignOut} />
      <Route exact path="/Test" component={Test} />

      <Route exact path="/Cake/:id" component={CakeDetail} />
      <Route exact path="/Store/:id" component={StoreDetail} />

      <Main />
      {/* <Seller />
      <Mypage /> */}
      {numLeftMobile == 2?
        <Seller />
        :<></>
      }
      {numLeftMobile == 3?
        <Mypage />
        :<></>
      }

      <Footer
        setNumLeftMobileF={setNumLeftMobile}
        address="서울특별시 동작구 상도로 369, 창신관 313호" tel="+ 72 4500 1240" email="cakeorder.kcook@gmail.com"/>
    </Router>    
  );
};

export default Pages;



