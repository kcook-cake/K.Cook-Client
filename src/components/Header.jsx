import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

import isSession from "src/utils/isSession";
import axios from "axios";
import $ from 'jquery';

import Xbutton from "../assets/2477.svg";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";

function Header () {
  const designClick = (i) => {
    $(".header").css("color", "black");
    $(".header").css("padding-bottom", "0px");
    $(".header").css("border-bottom", "0px solid #ea5450");

    $("."+i).css("color", "#ea5450");
    $("."+i).css("padding-bottom", "3px");
    $("."+i).css("border-bottom", "3px solid #ea5450");
  }

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
    //pathname, parameter 가져오기
    var pathname = window.location.pathname;
    if (pathname == "/") pathname = "/Home";
    pathname = pathname.split("/")[1];
    $("."+pathname).css("color", "#ea5450");
    $("."+pathname).css("padding-bottom", "3px");
    $("."+pathname).css("border-bottom", "3px solid #ea5450");

    isSession(
      (s)=>{
        if (s) setSession(s);
      },
      (a)=>{
        setAuth(a);
      },
    );
  }, []);

  // sessionStorage.removeItem('jwToken')
  // sessionStorage.removeItem('session')

  // render() {
  return (
    <div className="header">
      <div className="header-ad-flex">
        <div className="header-ad">
          <span className="header-ad-text">
            첫 주문 시 10,000원 할인 쿠폰을 드립니다.
          </span>
          <div className="header-ad-button">
            <span>오늘 하루 그만 보기 </span>
            <img src={Xbutton} className="x-button"></img>
          </div>
        </div>
      </div>

      <div className="head-flex">
        <div className="head">
          <div className="header-left">
            <button>
              <img src={menu} className="menu-icon"></img>
            </button>
            <Link
              to="/"
              onClick={()=>{
                designClick("Home");
                $(".menu-bar-flex").show();
              }}
            >
              <img src={logo} className="logo" />
            </Link>
            <form>
              <input type="text" placeholder="상품 또는 스토어를 검색하세요." />
            </form>
            <Link
              to="/"
              onClick={()=>{designClick("Home")}}
            >
              <img src={search} className="question-icon" />
            </Link>
          </div>
          <div className="header-right">
            {session?
              <button>{auth.nickname}님 환영합니다</button>:<></>
            }
            {session ?
              <Link to="/SellerOrder">
                <button className="header-link">판매자로 전환</button>
              </Link>:
              <></>
            }
            {session ?
              <Link to="/MypageOrder">
                <button className="header-link">마이페이지</button>
              </Link>:
              <></>
            }
            {session ?
              <></>:
              <Link
                to="/SignUp"
                onClick={()=>{
                  $(".menu-bar-flex").hide();
                }}
              >
                <button className="header-link">회원가입</button>
              </Link>
            }
            {session ?
              <button
                className="header-link"
                onClick={() => {
                  sessionStorage.removeItem("jwToken")
                  sessionStorage.removeItem("session")
                  if (sessionStorage.session === undefined) document.location.href = "/";
                }}
              >로그아웃</button>:
              <Link
                to="/Login"
                onClick={()=>{
                  $(".menu-bar-flex").hide();
                }}
              >
                <button className="header-link">로그인</button>
              </Link>
            }
          </div>
        </div>
      </div>

      <div className="menu-bar-flex">
        <div className="menu-bar">
          <Link
            to="/"
            className="header Home"
            onClick={()=>{designClick("Home")}}
          >
            홈
          </Link>
          <Link
            to="/TodaysRec"
            className="header TodaysRec"
            onClick={()=>{designClick("TodaysRec")}}
          >
            오늘의 추천
          </Link>
          <Link
            to="/Cake"
            className="header Cake"
            onClick={()=>{designClick("Cake")}}
          >
            케이크
          </Link>
          <Link
            to="/MoreItem"
            className="header MoreItem"
            onClick={()=>{designClick("MoreItem")}}
          >
            추가 상품
          </Link>
          <Link
            to="/CS"
            className="header CS"
            onClick={()=>{designClick("CS")}}
          >
            고객지원
          </Link>
        </div>
      </div>
    </div>
  );
  // }
}

export default Header;
