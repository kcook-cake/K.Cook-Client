import React, { useState, useEffect } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import axios from "axios";
function Login() {
  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    // console.log("click login");
    // console.log(password);
    // console.log(signInId);
    axios
      .post("https://prod.kcook-cake.com/app/sign-in", {
        params: {
          password: password,
          signInId: signInId,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
    []
  );

  //글로벌 전역 상태값 setUser를 받아옴
  //로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
  //   const { setUser } = useUserContext();

  //url 이동을 위한 useHistory
  //   const history = useHistory();
  //input에 입력하면 자동적으로 account state값 변경
  //   중복제출 방지
  const [disabled, setDisabled] = useState(false);

  //   //동기식으로 로그인정보를 통신하여 출력
  //   const onSubmitAccount = async () => {
  //     try {
  //       const user = await fetchLogin(account);

  //       //성공하면 해당 user 아이디 패스워드값 셋팅
  //       setUser(user);
  //       //성공하면 해당 url로 이동(main페이지로)
  //       history.replace("/");
  //     } catch (error) {
  //       //실패하면 throw new Error("") 값 출력
  //       window.alert(error);
  //     }
  //   };

  //   ///////////////////////////////////////
  const handleSubmit = async (event) => {
    //눌러도 여러번 호출 못하게
    setDisabled(true);
    //새로고침 방지
    event.preventDefault();

    await new Promise((r) => setTimeout(r, 1000));

    setDisabled(false);
  };
  return (
    <div className="login">
      <form className="login-section" onSubmit={handleSubmit}>
        <img src={logo} className="logo" />
        <h1 className="login-title">나만의 케이크 주문, 케이쿡</h1>
        <p className="login-list">아이디</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="아이디입력"
          onChange={handleInputId}
        ></input>
        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="password"
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
          disabled={disabled}
        >
          로그인
        </button>
        <div className="login-go-to-register">
          아직 계정이 없으신가요?
          <Link to="/">가입하기</Link>
          <div className="iscorrect-login">
            로그인 정보가 일치하지 않습니다.
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
