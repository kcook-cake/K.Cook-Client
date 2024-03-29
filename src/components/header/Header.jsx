import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/Header.scss';

import axios from 'axios';
import $ from 'jquery';

import Xbutton from '../../assets/2477.svg';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import kcook from 'src/utils/kcook';

function Header({ session, auth, setNumLeftMobileF }) {

  return (
    <div id="header-flex-id" className="header-flex">
      <div className="header-ad-flex">
        <div className="header-ad">
          <span className="header-ad-text">
            첫 주문 시 10,000원 할인 쿠폰을 드립니다.
          </span>
          <div className="header-ad-button">
            <span>오늘 하루 그만 보기 </span>
            <img src={Xbutton} />
          </div>
        </div>
      </div>

      <div className="header-top-flex">
        <div className="header-top">
          <div className="header-top-left">
            <button className="">
              <img
                src={menu}
                className="menu-icon"
                onClick={() => {
                  $('.hm-mobile').show();
                }}
              />
            </button>

            <Link
              to={kcook() + "/"}
              onClick={() => {
                setNumLeftMobileF(1);
                $('.hm-pc-flex').show();
              }}
            >
              <img src={logo} className="logo-icon" />
            </Link>

            <form>
              <input type="text" placeholder="상품 또는 스토어를 검색하세요." />
            </form>

            <Link
              to={kcook() + "/"}
              onClick={() => {
                setNumLeftMobileF(1);
              }}
            >
              <img src={search} className="search-icon" />
            </Link>
          </div>

          <div className="header-top-right">
            {session ? 
              (<>
                <button>{auth.nickname}님 환영합니다</button>
                <Link
                  to={kcook() + "/SSOCalendar"}
                  onClick={() => {
                    setNumLeftMobileF(3);
                  }}>
                  <button style={{ cursor: "pointer", }}>판매자로 전환</button>
                </Link>
                <Link
                  to={kcook() + "/MypageOrder"}
                  onClick={() => {
                    setNumLeftMobileF(4);
                  }}
                >
                  <button style={{ cursor: "pointer", }}>마이페이지</button>
                </Link>
                <Link
                  to={kcook() + "/SignOut"}
                  onClick={() => {
                    setNumLeftMobileF(1);
                  }}
                >
                  <button style={{ cursor: "pointer", }}>회원탈퇴</button>
                </Link>
                <button
                  style={{ cursor: "pointer", }}
                  onClick={() => {
                    localStorage.removeItem('jwToken');
                    sessionStorage.removeItem('jwToken');
                    if (
                      localStorage.jwToken === undefined ||
                      sessionStorage.jwToken === undefined
                    )
                      document.location.href = '/';
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to={kcook() + "/SignUp"}
                  onClick={() => {
                    setNumLeftMobileF(1);
                  }}
                >
                  <button style={{ cursor: "pointer", }}>회원가입</button>
                </Link>
                <Link
                  to={kcook() + "/Login"}
                  onClick={() => {
                    setNumLeftMobileF(1);
                  }}
                >
                  <button style={{ cursor: "pointer", }}>로그인</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hm-pc-flex">
        <div className="hm-pc">
          <Link
            to={kcook() + "/"}
            className="header-link Home"
            onClick={() => {
              setNumLeftMobileF(1);
            }}
          >
            홈
          </Link>
          <Link
            to={kcook() + "/Cake"}
            className="header-link Cake"
            onClick={() => {
              setNumLeftMobileF(1);
            }}
          >
            케이크
          </Link>
          <Link
            to={kcook() + "/Store"}
            className="header-link Store"
            onClick={() => {
              setNumLeftMobileF(1);
            }}
          >
            스토어
          </Link>
          <Link
            to={kcook() + "/CS"}
            className="header-link CS"
            onClick={() => {
              setNumLeftMobileF(1);
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
