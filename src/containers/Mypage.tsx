import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import OrderHistory from '../components/mypage/OrderHistory';
import ProductReview from '../components/mypage/ProductReview';
import Membership from '../components/mypage/Membership';
import Coupons from '../components/mypage/Coupons';
import Profile from '../components/mypage/Profile';
import MypageSection from '../components/mypage/MypageSection';
import '../../src/styles/mypage/Mypage.scss'

const Mypage = () =>{
    return(
        <div className="mypage-flex">
            <div className="mypage">
                <Router>
                    <MypageSection />
                    <Route exact path="/MypageOrder" component={OrderHistory} />
                    <Route exact path="/ProductReview" component={ProductReview} />
                    <Route exact path="/Membership" component={Membership} />
                    <Route exact path="/Coupon" component={Coupons} />
                    <Route exact path="/Profile" component={Profile} />
                </Router>
            </div>
        </div>
    )
}


export default Mypage;