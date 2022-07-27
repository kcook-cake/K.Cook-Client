import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../components/header/pc/Header';
import HeaderMobile from './header/HeaderMobile';
import Main from './Main';
import Footer from '../components/Footer';
import Mypage from './Mypage';
import Seller from './Seller';
import Login from './Login';
import SignUp from './SignUp';
import FullCalendarApp from '../containers/seller/FullCalendarApp';

import * as designClick from 'src/utils/designClick';

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
      <HeaderMobile numLeftMobile={numLeftMobile} setNumLeftMobileF={setNumLeftMobile} />
      <Header setNumLeftMobileF={setNumLeftMobile} />
      <Main />
      {numLeftMobile == 2?
        <Seller />:<></>
      }
      {numLeftMobile == 3?
        <Mypage />:<></>
      }
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      {/* <Route exact path="/FullCalendarApp" component={FullCalendarApp} /> */}
      
      {/* {numLeftMobile == 4?
        <div className="calendar-seller-flex">
          <div className="seller">
            <Route exact path="/FullCalendarApp" component={FullCalendarApp} />
          </div>
        </div>:
        <></>
      } */}
      <Footer
        setNumLeftMobileF={setNumLeftMobile}
        address="123 Lorem Ipsum Street Jakarta, Indonesia" tel="+ 72 4500 1240" email="tanahcon@companymail.com"/>
    </Router>    
  );
};

export default Pages;



