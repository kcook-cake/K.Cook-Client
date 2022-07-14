import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

import isSession from "src/utils/isSession";
import axios from "axios";

import Xbutton from "../assets/2477.svg";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";

function Header() {
  console.log("Header")
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
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
            <form>
              <input type="text" placeholder="상품 또는 스토어를 검색하세요." />
            </form>
            <Link to="/">
              <img src={search} className="question-icon" />
            </Link>
          </div>
          <div className="header-right">
            {localStorage.session ?
              <Link to="/SellerOrder">
                <button className="header-link">판매자로 전환</button>
              </Link>:
              <></>
            }
            {localStorage.session ?
              <Link to="/MypageOrder">
                <button className="header-link">마이페이지</button>
              </Link>:
              <></>
            }
            {localStorage.session ?
              <></>:
              <Link to="/SignUp">
                <button className="header-link">회원가입</button>
              </Link>
            }
            {localStorage.session ?
              <button
                className="header-link"
                onClick={() => {
                  localStorage.removeItem("jwToken")
                  localStorage.removeItem("session")
                  if (localStorage.session === undefined) document.location.href = "/";
                }}
              >로그아웃</button>:
              <Link to="/Login">
                <button className="header-link">로그인</button>
              </Link>
            }
          </div>
        </div>
      </div>

      <div className="menu-bar-flex">
        <div className="menu-bar">
          <Link to="/Login" className="only-mobile home">
            로그인
          </Link>
          <Link to="/" className="home">
            홈
          </Link>
          <Link to="/TodaysRec" className="home">
            오늘의 추천
          </Link>
          <Link to="/Cake" className="home">
            케이크
          </Link>
          <Link to="/MoreItem" className="home">
            추가 상품
          </Link>
          <Link to="/CS" className="home">
            고객지원
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
