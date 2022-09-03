import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import 'src/styles/mypage/Mypage.scss'
import 'src/styles/mypage/AllMypage.scss'

import MypageOrder from './MypageOrder';
import ProductReview from './ProductReview';
import Membership from './Membership';
import Coupons from './Coupons';
import Profile from '../../components/mypage/Profile';
import MypageSection from '../../components/mypage/MypageSection';

interface Props {
    session: any,
    auth: any,
}

const Mypage = ({ session, auth, }: Props) =>{
    return (
        <div className="mypage-flex">
            <div className="mypage">
                <>
                    <MypageSection />
                    <Route exact path="/MypageOrder" component={MypageOrder} />
                    <Route exact path="/ProductReview" component={ProductReview} />
                    <Route exact path="/Membership" component={Membership} />
                    <Route exact path="/Coupon" component={Coupons} />
                    <Route exact path="/Profile" component={()=>Profile(session, auth)} />
                </>
            </div>
        </div>
    )
}


export default Mypage;