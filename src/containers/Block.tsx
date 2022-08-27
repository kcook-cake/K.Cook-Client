import React, { useState, useEffect } from "react";
import "../styles/LandingPage.scss";
import "../styles/LandingSky-Spring.scss";

import logo from "../assets/logo.webp";
import introKcook from "../assets/intro-kcook.svg";
import coupon from "../assets/coupon.webp";
import menuIcon from "../assets/icon-menu.svg";
import searchIcon from "../assets/search.svg";

import axios from 'axios';

import City from "src/components/landing/City";
import Location from "src/components/landing/Locations";
import isSession from "src/utils/isSession";

function Block() {

  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [modalCSS, setModalCSS] = useState(false);
  const handleInputId = (e: any,) => {
    setInputId(e.target.value);
  };
  //onChange 될때마다 그 값을 handleInputId 메서드로 setInputId에 값을 변경한다.
  //setInputId 는 signInId의 값을 변경한다.
  const handleInputPw = (e: any) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(`https://prod.kcook-cake.com/app/sign-in`, {
        password: password,
        email: signInId,
      })
      .then((res) => {
        if ($("#loginAuto").is(':checked')) 
          localStorage.setItem("jwToken", res.data.result.jwt);
        else
          sessionStorage.setItem("jwToken", res.data.result.jwt);
        document.location.href = "/";
      })
      .catch((error) => {
        setFailModal(true);
        setInputPw("");
        setTimeout(() => {
          setFailModal(false);
        }, 5000);
      });
  };


  
  return (
    <div id="landing" className="landing-page">
        <p className="login-center">이메일</p>
        <input
          className="login-input"
          type="text"
          value={signInId}
          placeholder="아이디입력"
          // disabled={disabled}
          onChange={handleInputId}
        ></input>
        <p className="login-center">비밀번호</p>
        <input
          className="login-input"
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          autoComplete="on"
          onChange={handleInputPw}
        ></input>
        <button
          type="submit"
          className="login-btn"
          onClick={onClickLogin}
          disabled={
            signInId.length !== 0 && password.length >= 8 ? false : true
          }
        >
          로그인
        </button>
    </div>
  );
}

export default Block;