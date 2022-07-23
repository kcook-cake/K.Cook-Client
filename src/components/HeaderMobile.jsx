import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderMobile.scss";

import isSession from "src/utils/isSession";
import designClick from "src/utils/designClick";
import axios from "axios";
import $ from 'jquery';

import Xbutton from "../assets/2477.svg";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";

function HeaderMobile () {
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
        <div className="hm">
            <div className="hm-left">
                <div className="hm-title">케이쿡</div>
                <hr/>
                <div className="hm-link">
                    {session ? 
                        <div className="hm-link-inner">
                            <Link
                                to="/SellerOrder"
                                className="header SellerOrder"
                                onClick={()=>{designClick("SellerOrder"); $(".hm").hide();}}
                            >
                                판매자로 전환
                            </Link>
                        </div>: <></>
                    }
                    {session ? 
                        <div className="hm-link-inner">
                            <Link
                                to="/MypageOrder"
                                className="header MypageOrder"
                                onClick={()=>{designClick("MypageOrder"); $(".hm").hide();}}
                            >
                                마이페이지
                            </Link>
                        </div>:
                        <div className="hm-link-inner">
                            <Link
                                to="/SignUp"
                                className="header SignUp"
                                onClick={()=>{designClick("SignUp"); $(".hm").hide();}}
                            >
                                회원가입
                            </Link>
                        </div>
                    }
                    {session ? 
                        <div className="hm-link-inner">
                            <Link
                                to="/"
                                className="header"
                                onClick={() => {
                                    sessionStorage.removeItem("jwToken")
                                    sessionStorage.removeItem("session")
                                    if (sessionStorage.session === undefined) document.location.href = "/";
                                }}
                            >
                                로그아웃
                            </Link>
                        </div>:
                        <div className="hm-link-inner">
                            <Link
                                to="/Login"
                                className="header Login"
                                onClick={()=>{designClick("Login"); $(".hm").hide();}}
                            >
                                로그인
                            </Link>
                        </div>
                    }
                    <div className="hm-link-inner">
                        <Link
                            to="/"
                            className="header Home"
                            onClick={()=>{designClick("Home"); $(".hm").hide();}}
                        >
                            홈
                        </Link>
                    </div>
                    <div className="hm-link-inner">
                        <Link
                            to="/TodaysRec"
                            className="header TodaysRec"
                            onClick={()=>{designClick("TodaysRec"); $(".hm").hide();}}
                        >
                            오늘의 추천
                        </Link>
                    </div>
                    <div className="hm-link-inner">
                        <Link
                            to="/Cake"
                            className="header Cake"
                            onClick={()=>{designClick("Cake"); $(".hm").hide();}}
                        >
                            케이크
                        </Link>
                    </div>
                    <div className="hm-link-inner">
                        <Link
                            to="/MoreItem"
                            className="header MoreItem"
                            onClick={()=>{designClick("MoreItem"); $(".hm").hide();}}
                        >
                            추가 상품
                        </Link>
                    </div>
                    <div className="hm-link-inner">
                        <Link
                            to="/CS"
                            className="header CS"
                            onClick={()=>{designClick("CS"); $(".hm").hide();}}
                        >
                            고객지원
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="hm-background"
                onClick={()=>{
                    $(".hm").hide();
                }}
            ></div>
        </div>
    );
}

export default HeaderMobile;
