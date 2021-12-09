import React, {useEffect, useState }from "react";
import logo from "../assets/logo.webp";
import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/icon-menu.svg"
import introKcook from "../assets/intro-kcook.webp";
import coupon from "../assets/coupon.webp";
import "../styles/LandingPage.scss";
import dDayCount from "./dDayCount.jsx";
import axios from 'axios';
import { convertCompilerOptionsFromJson } from "typescript";

// // 디데이
// var title = document.querySelector(".end-time") as HTMLElement;

// const getdDay = () => {
//   const setDate = new Date("2022-01-01T00:00:00+0900");
//   const setDateYear = setDate.getFullYear();
//   const setDateMonth = setDate.getMonth() + 1;
//   const setDateDay = setDate.getDate();

//   const now = new Date();
//   const distance = setDate.getTime() - now.getTime();

//   const day = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   title.innerText = `${day}일 
//             ${hours < 10 ? `0${hours}` : hours}시간 
//             ${minutes < 10 ? `0${minutes}` : minutes}분 
//             ${seconds < 10 ? `0${seconds}` : seconds}초 남았습니다.` ;
// };

// const initDDay = () => {
//   getdDay();
//   setInterval(getdDay, 1000);
// };
// initDDay();


function UI(){
  axios.get(`https://prod.kcook-cake.com/app/cities`)
    .then(res =>{
      console.log(res);
	var array =[];
	for(int i=0; i<3; i++){
		array.push(<option>안녕</option>);
	}
	return array
}





const LandingPage=()=>{


  let [data, setData] =useState([]);
        useEffect(()=>{
            axios.get(`https://prod.kcook-cake.com/app/cities`)
                .then(res =>{
                    console.log(res);
                });
},[]);
      
  
const [phoneNumber, SetPhone] = useState("");
const [cityName, SetCity] =useState("");
const [locationName, SetLoc] = useState("");


  const phoneHandler = (e:any) => {
    e.preventDefault();
    SetPhone(e.target.value);
    console.log(phoneNumber);
  };
      
  const cityHandler = (e:any) => {
    e.preventDefault();
    SetCity(e.target.value);
    console.log(cityName);

  };
      
  const locHandler = (e:any) => {
    e.preventDefault();
    SetLoc(e.target.value);
    console.log(locationName);

  };
    
  const submitHandler = (e:any) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(phoneNumber);
    console.log(cityName);
    console.log(locationName);
    
    const postData = {
      phoneNumber: phoneNumber,
      cityName: cityName,
      locationName: locationName
    };
    
    axios
    .post("https://prod.kcook-cake.com/app/applicants", postData)
    .then((response: any) => console.log(response));
  };
    
    
    // const {applicantId, phoneNumber, cityName, locationName} =state
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

      <div className="get-email">
        <h1 className="get-email-title">출시 알림 신청하기</h1>
          <p className="get-email-desc">고객 정보(필수)</p>




        <form className="get-email-form">
            <span>휴대폰번호</span>
            <input placeholder="0100000000" type="number" value={phoneNumber} name="phoneNumber" onChange={phoneHandler}></input>
          <span>거주지역</span>
          <select className="dropdown-bar-do" value={cityName}  name="cityName" onChange={cityHandler} >
            <option disabled selected value="DEFAULT"> 지역</option>
            UI();
            <option value="서울특별시" >서울특별시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="세종특별자치시">세종특별자치시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도">전라남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="제주특별자치도">제주특별자치도</option>
          </select>
          <select className="dropdown-bar-si" value={locationName} name="locationName" onChange={locHandler}>
            <option disabled selected>시/군 선택 </option>
            <option>중구</option>
            <option>경기</option>
            <option>인천</option>
            <option>강릉</option>
            <option>부산</option>
          </select>
          <p className="get-email-sub">개인정보 제공 및 SMS 수신에 동의합니다.</p>
          <button type="submit" className="get-email-btn" onSubmit={submitHandler}>출시 알림 신청</button>
        </form>



        <footer className="kcook-info">
          케이쿡 | 대표 정예빈 | 입점 문의 : cakeorder.kcook@gmail.com
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
