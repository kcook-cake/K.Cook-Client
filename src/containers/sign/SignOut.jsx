import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/common/LoginSignup.scss';
import 'src/styles/sign/Login.scss';

import axios from 'axios';
import $ from 'jquery';

import logo from 'src/assets/logo.png';
import LinkClick from 'src/utils/LinkClick';

function SignOut() {
  const [failModalText, setFailModalText] =
    useState('정보가 일치하지 않습니다.');
  const [failModal, setFailModal] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFail, setPasswordFail] = useState(true);

  const handleInputPw = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) setPasswordFail(false);
    else setPasswordFail(true);
  };

  const onClickSignOut = () => {
    if (passwordFail) {
      setFailModalText('비밀번호를 입력해주세요.');
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 5000);
    } else {
      var jwToken = undefined;
      if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
      else jwToken = sessionStorage.jwToken;

      axios
        .patch(
          `https://prod.kcook-cake.com/app/accounts/auth`,
          {
            password: password,
          },
          {
            headers: {
              'X-ACCESS-TOKEN': jwToken,
            },
          }
        )
        .then((res) => {
          if (res.data.isSuccess) document.location.href = '/';
        })
        .catch((error) => {
          setFailModalText('정보가 일치하지 않습니다.');
          setFailModal(true);
          setTimeout(() => {
            setFailModal(false);
          }, 5000);
        });
    }
  };

  const [disabled, setDisabled] = useState(false);
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
    $('.hm-pc-flex').hide();
    LinkClick('SignOut');
  }, []);

  return (
    <div className="login-flex">
      <form className="login" onSubmit={handleSubmit}>
        <img src={logo} className="logo" />
        <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
        <p className="login-sub-title">
          회원탈퇴를 할 수 있습니다. 비밀번호를 입력해주세요.
        </p>

        <p className="login-center">비밀번호</p>
        <input
          className="login-input"
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          autoComplete="on"
          onChange={handleInputPw}
        ></input>

        <div
          type="submit"
          className="login-btn"
          onClick={onClickSignOut}
          disabled={password.length >= 8 ? false : true}
        >
          회원탈퇴
        </div>

        {failModal ? (
          <div className="login-iscorrect">{failModalText}</div>
        ) : null}
      </form>
    </div>
  );
}

export default SignOut;
