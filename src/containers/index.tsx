import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; HashRouter
import '../styles/common/SellerMypage.scss';

import isSession from 'src/utils/isSession';

import Header from '../components/header/Header';
import HMMobile from './header/HMMobile';
import Main from './main/Main';
import Footer from '../components/footer/Footer';
import Mypage from './mypage/Mypage';
import Seller from './seller/Seller';
import Login from 'src/containers/sign/Login';
import LoginFind from 'src/containers/sign/LoginFind';
import SignUp from 'src/containers/sign/SignUp';
import SignOut from 'src/containers/sign/SignOut';

import Test from '../components/Test';
import StoreDetail from './detail/StoreDetail';
import CakeDetail from './detail/CakeDetail';
import FullCalendarApp from './seller/FullCalendarApp';
import SellerOrder from './seller/SellerOrder';
import SalesHistory from './seller/SalesHistory';
import ProductManagement from './seller/ProductManagement';
import SPMDetail from './detail/SPMDetail';
import SellerReview from './seller/SellerReview';
import SellerStore from 'src/components/seller/sss/SellerStore';



const Pages = () => {
  // 로그인확인
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
      accountId: 0,
      address: '',
      dateOfBirth: '',
      email: '',
      nickname: '',
      phoneNumber: '',
  });

  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;
  useEffect(() => {
      isSession(
      jwToken,
      (s: any) => {
          if (s) setSession(s);
      },
      (a: any) => {
          setAuth(a);
      }
      );
  }, [jwToken]);

  const [numLeftMobile, setNumLeftMobile] = useState(1);
  useEffect(() => {
    //pathname, parameter 가져오기
    var pathname = window.location.pathname;
    if (pathname === '/') pathname = '/Home';
    pathname = pathname.split('/')[1];
    if (
      pathname === 'KCOOKProductManagement' ||
      pathname === 'KCOOKSellerStore'
    ) setNumLeftMobile(2);
    else if (
      pathname === 'SellerOrder' ||
      pathname === 'SalesHistory' ||
      pathname === 'ProductManagement' ||
      pathname === 'SellerReview' ||
      pathname === 'SellerStore' ||
      pathname === 'FullCalendarApp'
    )
      setNumLeftMobile(3);
    else if (
      pathname === 'MypageOrder' ||
      pathname === 'ProductReview' ||
      pathname === 'Membership' ||
      pathname === 'Coupon' ||
      pathname === 'Profile'
    )
      setNumLeftMobile(4);
    // else setNumLeftMobile(4);
  }, []);

  return (
    <Router>
      {/* <HMMobile
        session={session} auth={auth}
        numLeftMobile={numLeftMobile} setNumLeftMobileF={setNumLeftMobile} /> */}
      <Header
        session={session} auth={auth} 
        setNumLeftMobileF={setNumLeftMobile} />
      
      <Route exact path="/Login" component={Login} />
      <Route exact path="/LoginFind" component={LoginFind} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignOut" component={SignOut} />
      <Route exact path="/Test" component={Test} />

      <Route exact path="/Cake/:id" component={CakeDetail} />
      <Route exact path="/Store/:id" component={()=>StoreDetail(auth)} />

      <Main session={session} auth={auth} />

      {/* {numLeftMobile === 2 ? <KCOOK session={session} auth={auth} /> : <></>} */}

      {numLeftMobile === 3 ? <Seller session={session} auth={auth} /> : <></>}
      {numLeftMobile === 4 ? <Mypage session={session} auth={auth} /> : <></>}


      <Footer
        setNumLeftMobileF={setNumLeftMobile}
        address="서울특별시 동작구 상도로 369, 창신관 313호"
        tel="+ 72 4500 1240"
        email="cakeorder.kcook@gmail.com"
      />
    </Router>
  );
};

export default Pages;
