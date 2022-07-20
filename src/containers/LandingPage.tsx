import React, { useState, useEffect } from "react";
import "../styles/LandingPage.scss";
import "../styles/LandingSky-Spring.scss";

import logo from "../assets/logo.webp";
import introKcook from "../assets/intro-kcook.svg";
import coupon from "../assets/coupon.webp";
import menuIcon from "../assets/icon-menu.svg";
import searchIcon from "../assets/search.svg";

import axios from 'axios';

import dDayCount from "./dDayCount";

function LandingPage() {
  // 디데이
  useEffect(()=>{
    getdDay();
    setInterval(getdDay, 1000);
  });

  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // 디데이
  const getdDay = () => {
    const setDate = new Date("2022-09-05T01:00:00+0900");
    const setDateYear = setDate.getFullYear();
    const setDateMonth = setDate.getMonth() + 1;
    const setDateDay = setDate.getDate();
  
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
  
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDay(day); setHours(hours); setMinutes(minutes); setSeconds(seconds);
  };

  const [phoneNumber, setPhone] = useState("");

  const handlePhone = (e: any) => {
    setPhone(e.target.value.replace("-", ""));
    const numRegex = /[^0-9]/
    if (!numRegex.test(e.target.value))
      setPhone(e.target.value.replace("-", ""));
  };

  useEffect(()=>{
    axios.get(`/app/cities`)
    .then(res =>{
      // console.log(res);
        // setData(res.data.result.content);
    });
  },[]);
  
  return (
    <div id="landing" className="landing-page">
      <header className="landing-header">
        <img src={menuIcon} alt="menu" className="menu landing-mobile" />
        <img src={logo} alt="logo" className="logo"/>
        <img src={searchIcon} alt="search" className="search landing-mobile"/>
      </header>

      <div className="intro">
        {/* <div style={{ width: "5px", height: "50px", }}></div> */}
        <div className="kcook-img">
          <img src={introKcook} alt="kcook-logo" className="kcook-logo" />
        </div>
        <p className="intro-span">
          <span>쉽게! 간편하게!</span>
          <br />
          커스텀케이크 주문 플랫폼이 온다.
        </p>
        <div className="end-time" id="end-time">
          {/* {dDayCount} */}
          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{day%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(day/10)}</div>
                <div className="end-time-timer-4">{day%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">일</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{hours%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(hours/10)}</div>
                <div className="end-time-timer-4">{hours%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">시간</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{minutes%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(minutes/10)}</div>
                <div className="end-time-timer-4">{minutes%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">분</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{seconds%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(seconds/10)}</div>
                <div className="end-time-timer-4">{seconds%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">초</div>
          </div>
        </div>
        <div style={{ padding: "21.5px 0px" }}>
          <hr className="end-time-hr"/>
        </div>
        <p className="intro-title">
          <span>케이쿡 Beta 0.1.0</span>
          <br />
          출시 알림 신청 이벤트
        </p>
        <p className="title-desc">출시 알림 신청하고, 랜덤 쿠폰 받자!</p>
        <div className="coupon-img">
          <img src={coupon} className="kcook-coupon" alt="kcook-coupon" />
        </div>
        <span className="intro-footer">
          *이벤트 및 베타 서비스 일정은 내부 사정 등에 의해 변경될 수 있습니다.
        </span>
      </div>
      <div className="center-footer"></div>
      <div className="get-email-flex">
        <div className="get-email">
          <h1 className="get-email-title">출시 알림 신청하기</h1>
          <p className="get-email-form-title">고객 정보(필수)</p>
          <div style={{ display: "flex", }}>
            <form className="get-email-form">
            <dl>휴대폰 번호</dl>
            <div className="input-email">
              {/* <span className="landing-mobile">휴대폰번호</span> */}
              <input
                className="input-num"
                type="tel"
                onChange={handlePhone}
                value={phoneNumber}
              ></input>
            </div>
            <dl>거주 지역</dl>
            <select className="dropdown-bar-do">
              {/* <span className="landing-mobile">거주지역</span> */}
              <option disabled selected>
                지역 선택
              </option>
              <option>서울</option>
              <option>경기</option>
              <option>인천</option>
              <option>강릉</option>
              <option>부산</option>
            </select>
            <select className="dropdown-bar-si">
              <option disabled selected>
                시/군 선택
              </option>
              <option>서울</option>
              <option>경기</option>
              <option>인천</option>
              <option>강릉</option>
              <option>부산</option>
            </select>
          </form>
          <div className="landing-pc" style={{ width: "35px", height: "5px", }}></div>
          </div>
          <p className="get-email-sub">개인정보 제공 및 SMS 수신에 동의합니다.</p>
          <button className="get-email-btn">출시 알림 신청</button>

          <footer className="kcook-info">
            케이쿡 | 대표 정예빈 | 입점 문의 : cakeorder.kcook@gmail.com{" "}<br/>
            서울특별시 동작구 상도로 369 창신관 313호
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;