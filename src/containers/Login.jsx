import React from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="login">
      <div className="login-section">
        <img src={logo} className="logo" />
        <h1 className="login-title">나만의 케이크 주문, 케이쿡</h1>
        <p className="login-list">아이디</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="아이디입력"
        ></input>
        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="비밀번호 입력"
        ></input>
        <div className="login-sub">
          <div className="auto-login">
            <input type="checkbox" id="autoLogin"></input>
            <label for="cb1">자동 로그인</label>
          </div>
          <Link to="/">비밀번호찾기</Link>
        </div>
        <div className="login-btn">로그인</div>
        <div className="login-go-to-register">
          아직 계정이 없으신가요?
          <Link to="/">가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
