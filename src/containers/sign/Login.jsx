import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Transition, CSSTransition } from "react-transition-group";
import axios from "axios";
import $ from 'jquery';

import "src/styles/common/LoginSignup.scss";
import "src/styles/sign/Login.scss";

import logo from "src/assets/logo.png";
import LinkClick from "src/utils/LinkClick";

function Login() {
  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [modalCSS, setModalCSS] = useState(false);
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  //onChange 될때마다 그 값을 handleInputId 메서드로 setInputId에 값을 변경한다.
  //setInputId 는 signInId의 값을 변경한다.
  const handleInputPw = (e) => {
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

  const handleSubmit = async (event) => {
    //눌러도 여러번 호출 못하게
    setDisabled(true);
    //새로고침 방지
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 10000));
    setDisabled(false);
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(() => {
    $(".hm-pc-flex").hide();
    LinkClick("Login");
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    //업데이트될 때는 useEffect() 실행하지 말아주세요 라는 뜻
    []
  );

  return (
    <div className="login-flex">
      <form className="login" onSubmit={handleSubmit}>
        <img src={logo} className="logo" />
        <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
        
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

        <div className="login-sub">
          <div className="login-auto">
            <input type="checkbox" id="loginAuto"></input>
            <label htmlFor="loginAuto"></label>
            <div className="login-auto-contents">자동 로그인</div>
          </div>
          <Link to="/LoginFind">비밀번호찾기</Link>
        </div>

        <div
          type="submit"
          className="login-btn"
          onClick={onClickLogin}
          disabled={
            signInId.length !== 0 && password.length >= 8 ? false : true
          }>
          로그인
        </div>

        <button className="login-register">
          아직 계정이 없으신가요?
          <Link to="/SignUp" style={{ marginLeft: "4px", }}>가입하기</Link>
          {failModal === true ? (
            <div className="login-iscorrect">
              로그인 정보가 일치하지 않습니다.
            </div>
          ) : // </CSSTransition>
          null}
        </button>

      </form>
    </div>
  );
}

export default Login;
