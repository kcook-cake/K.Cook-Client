import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import 'src/styles/mypage/Mypage.scss'
import 'src/styles/mypage/AllMypage.scss'

import MypageOrder from './MypageOrder';
import ProductReview from './ProductReview';
import Coupons from './Coupons';
import Profile from '../../components/mypage/Profile';
import MypageSection from '../../components/mypage/MypageSection';
import kcook from 'src/utils/kcook';

interface Props {
    session: boolean;
    auth: {
        accountId: number,
        address: string,
        dateOfBirth: string,
        email: string,
        nickname: string,
        phoneNumber: string,
    };
}

const Mypage = ({ session, auth, }: Props) =>{
    return (
        <div className="mypage-flex">
            <div className="mypage">
                <>
                    <MypageSection />
                    <Route exact path={kcook() + "/MypageOrder"} component={MypageOrder} />
                    <Route exact path={kcook() + "/ProductReview"} component={ProductReview} />
                    <Route exact path={kcook() + "/Coupon"} component={Coupons} />
                    <Route exact path={kcook() + "/Profile"} component={()=>Profile({session, auth})} />
                </>
            </div>
        </div>
    )
}


export default Mypage;