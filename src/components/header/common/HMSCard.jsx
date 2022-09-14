import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/header/HMMobile.scss';

import $ from 'jquery';

import LinkClick from '../../../utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

function HMSCard({ setNumLeftMobileF }) {
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
                            to="/SSOCalendar"
                            className="header-link SellerOrder"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            주문확인
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/SSHCalendar"
                            className="header-link SalesHistory"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            판매내역
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/ProductManagement"
                            className="header-link ProductManagement"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            상품관리
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/SellerReview"
                            className="header-link SellerReview"
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
                            to="/SellerStore"
                            className="header-link SellerStore"
                            onClick={()=>{
                                setNumLeftMobileF(3);
                                $(".hm-mobile").hide();
                            }}
                        >
                            스토어 정보
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HMSCard;