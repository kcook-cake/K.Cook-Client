import React, { useState, useEffect } from "react";
import axios from 'axios';
import "src/styles/landing/LandingPage.scss";
import "src/styles/landing/LandingSky-Spring.scss";

function Block() {

  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [modalCSS, setModalCSS] = useState(false);
  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>,) => {
    setInputId(e.target.value);
  };
  //onChange 될때마다 그 값을 handleInputId 메서드로 setInputId에 값을 변경한다.
  //setInputId 는 signInId의 값을 변경한다.
  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>, ) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(`/app/sign-in`, {
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