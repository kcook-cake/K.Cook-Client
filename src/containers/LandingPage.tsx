import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import introKcook from "../assets/intro-kcook.webp";
import coupon from "../assets/coupon.webp";
import "../styles/LandingPage.scss";
import dDayCount from "./dDayCount";

function LandingPage() {
  const [phoneNumber, setPhone] = useState("");

  const handlePhone = (e: any) => {
    setPhone(e.target.value.replace("-", ""));
    // if (e.target.value.length !== 0)
    //   setPhoneFail(false)
    // else
    //   setPhoneFail(true)
  };

  useEffect(()=>{

  },[]);
  
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} alt="logo" />
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
          {dDayCount}
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
        {/* <div style={{ width: "5px", height: "25px", }}></div> */}
        <div className="get-email">
        <h1 className="get-email-title">출시 알림 신청하기</h1>
        <form className="get-email-form">
          {/* <p>고객 정보(필수)</p> */}
          <span>고객 정보(필수)</span>
          <div className="input-email">
            {/* <span>휴대폰번호</span> */}
            <input
              className="input-num"
              type="tel"
              onChange={handlePhone}
              value={phoneNumber}
              placeholder="휴대폰번호"
            ></input>
          </div>
          <span>거주지역</span>
          <select className="dropdown-bar-do">
            <option disabled selected>
              지역
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