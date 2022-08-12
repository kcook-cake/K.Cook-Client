import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/header/Header.scss";

import isSession from "src/utils/isSession";
import LinkClick from "src/utils/LinkClick";
import axios from "axios";
import $ from 'jquery';

import Xbutton from "../../assets/2477.svg";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import search from "../../assets/search.svg";
import sellerLinkClick from "src/utils/sellerLinkClick";
import mypageLinkClick from "src/utils/mypageLinkClick";

function Header ({ setNumLeftMobileF }) {

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
    LinkClick(pathname);

    isSession(
      (s)=>{
        if (s) setSession(s);
      },
      (a)=>{
        setAuth(a);
      },
    );
  }, []);

  return (
    <div id="header-flex-id" className="header-flex">
      <div className="header-ad-flex">
        <div className="header-ad">
          <span className="header-ad-text">
            첫 주문 시 10,000원 할인 쿠폰을 드립니다.
          </span>
          <div className="header-ad-button">
            <span>오늘 하루 그만 보기 </span>
            <img src={Xbutton}/>
          </div>
        </div>
      </div>

      <div className="header-top-flex">
        <div className="header-top">
          <div className="header-top-left">
            <button>
              <img
                src={menu}
                className="menu-icon"
                onClick={()=>{
                  $(".hm-mobile").show();
                }}
              ></img>
            </button>

            <Link
              to="/"
              onClick={()=>{
                setNumLeftMobileF(1);
                LinkClick("Home");
                $(".hm-pc-flex").show();
              }}
            >
              <img src={logo} className="logo-icon" />
            </Link>

            <form>
              <input type="text" placeholder="상품 또는 스토어를 검색하세요." />
            </form>

            <Link
              to="/"
              onClick={()=>{
                setNumLeftMobileF(1);
                LinkClick("Home");
                $(".hm-pc-flex").show();
              }}
            >
              <img src={search} className="search-icon" />
            </Link>

          </div>

          <div className="header-top-right">
            {session?
              <button>{auth.nickname}님 환영합니다</button>:<></>
            }
            {session ?
              <Link
                to="/SellerOrder"
                onClick={()=>{
                  setNumLeftMobileF(2);
                  sellerLinkClick("SellerOrder");
                }}
              >
                <button>판매자로 전환</button>
              </Link>:
              <></>
            }
            {session ?
              <Link
                to="/MypageOrder"
                onClick={()=>{
                  setNumLeftMobileF(3);
                  mypageLinkClick("MypageOrder");
                }}
              >
                <button>마이페이지</button>
              </Link>:
              <Link
                to="/SignUp"
                onClick={()=>{
                  setNumLeftMobileF(1);
                  LinkClick("SignUp");
                  $(".hm-pc-flex").hide();
                }}
              >
                <button>회원가입</button>
              </Link>
            }
            {session ?
              <button
                onClick={() => {
                  sessionStorage.removeItem("jwToken")
                  sessionStorage.removeItem("session")
                  if (sessionStorage.session === undefined) document.location.href = "/";
                }}
              >로그아웃</button>:
              <Link
                to="/Login"
                onClick={()=>{
                  setNumLeftMobileF(1);
                  LinkClick("Login");
                  $(".hm-pc-flex").hide();
                }}
              >
                <button>로그인</button>
              </Link>
            }
          </div>
        </div>
      </div>

      <div className="hm-pc-flex">
        <div className="hm-pc">
          <Link
            to="/"
            className="header-link Home"
            onClick={()=>{
              setNumLeftMobileF(1);
              LinkClick("Home")
            }}
          >
            홈
          </Link>
          <Link
            to="/TodaysRec"
            className="header-link TodaysRec"
            onClick={()=>{
              setNumLeftMobileF(1);
              LinkClick("TodaysRec")
            }}
          >
            오늘의 추천
          </Link>
          <Link
            to="/Cake"
            className="header-link Cake"
            onClick={()=>{
              setNumLeftMobileF(1);
              LinkClick("Cake")
            }}
          >
            케이크
          </Link>
          <Link
            to="/MoreItem"
            className="header-link MoreItem"
            onClick={()=>{
              setNumLeftMobileF(1);
              LinkClick("MoreItem")
            }}
          >
            스토어
          </Link>
          <Link
            to="/CS"
            className="header-link CS"
            onClick={()=>{
              setNumLeftMobileF(1);
              LinkClick("CS")
            }}
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
