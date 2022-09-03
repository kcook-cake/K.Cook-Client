import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/header/HMMobile.scss';

import $ from 'jquery';

import LinkClick from '../../../utils/LinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';

function HMMCard({ setNumLeftMobileF }) {
    useEffect(()=> {
        $(".header-flex").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-mobile-title").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-mobile-background").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }, []);
    return (
        <>
            <div className="hm-mobile-left">
                <div className="hm-mobile-title">케이쿡</div>
                <hr/>
                <div className="hm-mobile-link-flex">
                    <div className="hm-mobile-link">
                        <Link
                            to="/MypageOrder"
                            className="header-link MypageOrder"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            주문내역
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/ProductReview"
                            className="header-link ProductReview"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            상품후기
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/Membership"
                            className="header-link Membership"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            적립금
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/Coupon"
                            className="header-link Coupon"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            쿠폰
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/Profile"
                            className="header-link Profile"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
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