import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../src/styles/mypage/Mypage.scss'

import HeaderMobile from './header/HeaderMobile';
import OrderHistory from '../containers/mypage/OrderHistory';
import ProductReview from '../containers/mypage/ProductReview';
import Membership from '../containers/mypage/Membership';
import Coupons from '../containers/mypage/Coupons';
import Profile from '../components/mypage/Profile';
import MypageSection from '../containers/mypage/MypageSection';

const Mypage = () =>{
    return(
        <div className="mypage-flex">
            <div className="mypage">
                <>
                    <MypageSection />
                    <Route exact path="/MypageOrder" component={OrderHistory} />
                    <Route exact path="/ProductReview" component={ProductReview} />
                    <Route exact path="/Membership" component={Membership} />
                    <Route exact path="/Coupon" component={Coupons} />
                    <Route exact path="/Profile" component={Profile} />
                </>
            </div>
        </div>
    )
}


export default Mypage;