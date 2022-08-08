import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/common/SellerMypage.scss';

import Header from '../components/header/Header';
import HMMobile from './header/HMMobile';
import Main from './Main';
import Footer from '../components/Footer';
import Mypage from './Mypage';
import Seller from './Seller';
import Login from './Login';
import SignUp from './SignUp';
import FullCalendarApp from '../containers/seller/FullCalendarApp';

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
      <Route exact path="/SignUp" component={SignUp} />

      <Main />
      {numLeftMobile == 2?
        <Seller />:<></>
      }
      {numLeftMobile == 3?
        <Mypage />:<></>
      }

      <Footer
        setNumLeftMobileF={setNumLeftMobile}
        address="서울특별시 동작구 상도로 369, 창신관 313호" tel="+ 72 4500 1240" email="cakeorder.kcook@gmail.com"/>
    </Router>    
  );
};

export default Pages;



