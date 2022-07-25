import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/HeaderMobile.scss';

import $ from 'jquery';

import isSession from '../../../utils/isSession';
import designClick from '../../../utils/designClick';
import sellerDesignClick from 'src/utils/sellerDesignClick';

function HSMCard({ setNumLeftMobileF }) {
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
            <div className="hsm-left">
                <div className="hsm-title">케이쿡</div>
                <hr/>
                <div className="hsm-link">
                    <div className="hsm-link-inner">
                        <Link
                            to="/SellerOrder"
                            className="header SellerOrder"
                            onClick={()=>{
                                setNumLeftMobileF(2);
                                designClick("SellerOrder");
                                sellerDesignClick("SellerOrder");
                                $(".hm").hide();
                            }}
                        >
                            주문확인
                        </Link>
                    </div>
                    <div className="hsm-link-inner">
                        <Link
                            to="/SalesHistory"
                            className="header SalesHistory"
                            onClick={()=>{
                                setNumLeftMobileF(2);
                                designClick("SalesHistory");
                                sellerDesignClick("SalesHistory");
                                $(".hm").hide();
                            }}
                        >
                            판매내역
                        </Link>
                    </div>
                    <div className="hsm-link-inner">
                        <Link
                            to="/ProductManagement"
                            className="header ProductManagement"
                            onClick={()=>{
                                setNumLeftMobileF(2);
                                designClick("ProductManagement");
                                sellerDesignClick("ProductManagement");
                                $(".hm").hide();
                            }}
                        >
                            상품관리
                        </Link>
                    </div>
                    <div className="hsm-link-inner">
                        <Link
                            to="/SellerReview"
                            className="header SellerReview"
                            onClick={()=>{
                                setNumLeftMobileF(2);
                                designClick("SellerReview");
                                sellerDesignClick("SellerReview");
                                $(".hm").hide();
                            }}
                        >
                            상품후기
                        </Link>
                    </div>
                    <div className="hsm-link-inner">
                        <Link
                            to="/SellerStore"
                            className="header SellerStore"
                            onClick={()=>{
                                setNumLeftMobileF(2);
                                designClick("SellerStore");
                                sellerDesignClick("SellerStore");
                                $(".hm").hide();
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

export default HSMCard;