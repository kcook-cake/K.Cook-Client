import React, {useEffect, useState }from "react";
import logo from "../assets/logo.webp";
import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/icon-menu.svg"
import introKcook from "../assets/intro-kcook.webp";
import coupon from "../assets/coupon.webp";
import "../styles/LandingPage.scss";
// import dDayCount from "./dDayCount";
import axios from 'axios';

interface dDayProp {
  day:any;
  hours:Number;
  minutes:Number;
  seconds:Number;
}

declare let setDate:Date;
declare let day:any;
declare let hours:Number;
declare let minutes:Number;
declare let seconds:Number;

let inputTime = document.querySelector(".end-time") as HTMLParagraphElement; 
// var title:any = document.querySelector(".end-time");

const getdDay:any = () => {
  // D-Day 날짜 지정
  const setDate = new Date("2022-01-01T00:00:00+0900");
  // D-day 날짜의 연,월,일 구하기
  const setDateYear = setDate.getFullYear();
  // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();

  // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  const now = new Date();

  // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
  const distance = setDate.getTime() - now.getTime();

  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  // 밀리초 값이기 때문에 1000을 곱한다.
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // D-Day 날짜를 가져오고,
  // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.
  // inputTime.innerText:HTMLParagraphElement = `${day}일 
  //           ${hours < 10 ? `0${hours}` : hours}시간 
  //           ${minutes < 10 ? `0${minutes}` : minutes}분 
  //           ${seconds < 10 ? `0${seconds}` : seconds}초 남았습니다.`;
};

const dDayInit:any = () => {
  // init 함수 생성해서 getDDay함수 호출하고,
  getdDay();
  // setInterval 메서드에서 getDDay함수를 1초(1000밀리초)마다 호출한다.
  setInterval(getdDay, 1000);
};

dDayInit();










function LandingPage() {

  let [data, setData] =useState([]);
        useEffect(()=>{
            axios.get(`https://prod.kcook-cake.com/app/cities`)
                .then(res =>{
                    console.log(res);
                });
        },[]);
  
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={menuIcon} alt="menu" className="menu" />
        <img src={logo} alt="logo" className="logo"/>
        <img src={searchIcon} alt="search" className="search"/>
      </header>


      <div className="intro">
        <div className="kcook-img">
          <img src={introKcook} alt="kcook-logo" className="kcook-logo" />
        </div>
        <p className="intro-span">
          <span>쉽게! 간편하게!</span>
          <br />
          커스텀케이크 주문 플랫폼이 온다.
        </p>
        <div className="end-time" id="end-time">
        `0${day}일 
          {hours < 10 ? `0${hours}` : hours}시간 
            {minutes < 10 ? `0${minutes}` : minutes}분 
            {seconds < 10 ? `0${seconds}` : seconds}초 남았습니다.`;
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

      <div className="get-email">
        <h1 className="get-email-title">출시 알림 신청하기</h1>
          <p className="get-email-desc">고객 정보(필수)</p>
        <form className="get-email-form">
            <span>휴대폰번호</span>
            <input placeholder="숫자만 입력" type="number"></input>
          <span>거주지역</span>
          <select className="dropdown-bar-do">
            <option disabled selected>
              지역
            </option>
            <option value={1} >서울특별시</option>
            <option value={2}>부산광역시</option>
            <option value="3">대구광역시</option>
            <option value="4">인천광역시</option>
            <option value="5">광주광역시</option>
            <option value="6">대전광역시</option>
            <option value="7">울산광역시</option>
            <option value="8">세종특별자치시</option>
            <option value="9">경기도</option>
            <option value="10">강원도</option>
            <option value="11">충청북도</option>
            <option value="12">전라북도</option>
            <option value="13">전라남도</option>
            <option value="14">경상북도</option>
            <option value="15">경상남도</option>
            <option value="16">제주특별자치도</option>
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
          케이쿡 | 대표 정예빈 | 입점 문의 : cakeorder.kcook@gmail.com{" "}
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
