import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/HeaderMobile.scss';

import $ from 'jquery';

import isSession from '../../../utils/isSession';
import designClick from '../../../utils/designClick';
import mypageDesignClick from 'src/utils/mypageDesignClick';

function HMMCard({ setNumLeftMobileF }) {
    //pathname, parameter 가져오기
    var pathname = window.location.pathname;
    if (pathname == "/") pathname = "/Home";
    pathname = pathname.split("/")[1];
    designClick(pathname);
    //로그인 여부
    const [session, setSession] = useState(false);
    const [auth, setAuth] = useState({
        accountId: 0,
        address: "",
        dateOfBirth: "",
        email: "",
        nickname: "",
        phoneNumber: "",
        signInId: "",
    });

    useEffect(()=> {
        isSession(
            (s)=>{
                if (s) setSession(s);
            },
            (a)=>{
                setAuth(a);
            },
        );
        $(".header-main").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-title").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-background").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }, []);
    return (
        <>
            <div className="hmm-left">
                <div className="hmm-title">케이쿡</div>
                <hr/>
                <div className="hmm-link">
                    <div className="hmm-link-inner">
                        <Link
                            to="/MypageOrder"
                            className="header MypageOrder"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                designClick("MypageOrder");
                                mypageDesignClick("MypageOrder");
                                $(".hm").hide();
                            }}
                        >
                            주문내역
                        </Link>
                    </div>
                    <div className="hmm-link-inner">
                        <Link
                            to="/ProductReview"
                            className="header ProductReview"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                designClick("ProductReview");
                                mypageDesignClick("ProductReview");
                                $(".hm").hide();
                            }}
                        >
                            상품후기
                        </Link>
                    </div>
                    <div className="hmm-link-inner">
                        <Link
                            to="/Membership"
                            className="header Membership"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                designClick("Membership");
                                mypageDesignClick("Membership");
                                $(".hm").hide();
                            }}
                        >
                            적립금
                        </Link>
                    </div>
                    <div className="hmm-link-inner">
                        <Link
                            to="/Coupon"
                            className="header Coupon"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                designClick("Coupon");
                                mypageDesignClick("Coupon");
                                $(".hm").hide();
                            }}
                        >
                            쿠폰
                        </Link>
                    </div>
                    <div className="hmm-link-inner">
                        <Link
                            to="/Profile"
                            className="header Profile"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                designClick("Profile");
                                mypageDesignClick("Profile");
                                $(".hm").hide();
                            }}
                        >
                            회원정보
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HMMCard;