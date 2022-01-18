import React, { useState, useEffect } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import { Transition, CSSTransition } from "react-transition-group";
import logo from "../assets/logo.png";
import axios from "axios";
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
      .post("https://prod.kcook-cake.com/app/sign-in", {
        password: password,
        signInId: signInId,
      })
      .then((res) => {
        document.location.href = "/";
        //성공시 메인으로 이동
      })
      .catch((error) => {
        setFailModal(true);
        setModalCSS(true);
        setInputPw("");
        setInputId("");
        setTimeout(() => {
          setFailModal(false);
        }, 1000);
      });
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("https://prod.kcook-cake.com/app/accounts/auth")
        .then((res) => console.log(res))
        .catch(() => console.log("실패했어요"));
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    //업데이트될 때는 useEffect() 실행하지 말아주세요 라는 뜻
    []
  );

  const handleSubmit = async (event) => {
    //눌러도 여러번 호출 못하게
    setDisabled(true);
    //새로고침 방지
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 10000));
    setDisabled(false);
  };
  const nodeRef = React.useRef(null);

  return (
    <div className="login">
      <form className="login-section" onSubmit={handleSubmit}>
        <img src={logo} className="logo" />
        <h1 className="login-title">나만의 케이크 주문, 케이쿡</h1>
        <p className="login-list">아이디</p>
        <input
          className="input-id login-input"
          type="text"
          value={signInId}
          placeholder="아이디입력"
          disabled={disabled}
          onChange={handleInputId}
        ></input>
        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          autoComplete="on"
          onChange={handleInputPw}
        ></input>
        <div className="login-sub">
          <div className="auto-login">
            <input type="checkbox" id="autoLogin"></input>
            <label htmlFor="autoLogin">자동 로그인</label>
          </div>
          <Link to="/">비밀번호찾기</Link>
        </div>
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
        <div className="login-go-to-register">
          아직 계정이 없으신가요?
          <Link to="/SignUp">가입하기</Link>
          {failModal === true ? (
            // <CSSTransition
            //   in={modalCSS}
            //   timeout={500}
            //   className="wow"
            //   nodeRef={nodeRef}
            // >
            <div className="iscorrect-login" ref={nodeRef}>
              로그인 정보가 일치하지 않습니다.
            </div>
          ) : // </CSSTransition>
          null}
        </div>
      </form>
    </div>
  );
}

export default Login;
