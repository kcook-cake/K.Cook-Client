import React, { useState, useEffect } from "react";
import "../styles/SignUp.scss";

import { Link } from "react-router-dom";
import axios from "axios";

import PopupDom from "../components/PopupDom.js";
import PostCode from "../components/PostCode.js";
import LoginCheckbox from "../components/LoginCheckbox.js";

import logo from "../assets/logo.png";

function SignUp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열고닫기
  const openclosePostCode = () => {
    if (isPopupOpen)
      setIsPopupOpen(false);
    else
      setIsPopupOpen(true);
  };
  
  const [checkedItems, setCheckedItems] = useState([])

  const checkboxs = [
    { description: '서비스 이용약관 동의 (필수)', show: '보기', },
    { description: '개인정보 수집 및 이용 동의 (필수)', show: '보기', },
    { description: '만 14세 이상입니다 (필수)', show: '', },
    { description: '광고성 정보 수신 동의 (선택)', show: '보기', }
  ]

  //체크박스 전체 선택/해제
  const onCheckAll = (checked) => {
    if (checked) {
      const checkedItemsArray = []
      checkboxs.forEach(data => checkedItemsArray.push(data.description))
      setCheckedItems(checkedItemsArray)
    } else {
      setCheckedItems([])
    }
  }
  //체크박스 개별 선택/해제
  const checkedItemHandler = (code, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, code])
    } else if (!isChecked && checkedItems.find(one => one === code)) {
      const filter = checkedItems.filter(one => one !== code)
      setCheckedItems([...filter])
    }
  }

  const [failModal, setFailModal] = useState(false);
  const [modalCSS, setModalCSS] = useState(false);
  const nodeRef = React.useRef(null);

  const [phoneFailD, setPhoneFailD] = useState(true);
  const [phoneToken, setPhoneToken] = useState("");
  const onSMS = () => {
    axios
      .patch("https://prod.kcook-cake.com/app/accounts/sms-token", {
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        console.log(res)
        if (res.isSuccess)
          setPhoneToken(res.message)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  const onSMSCheck = () => {
    axios
      .patch("https://prod.kcook-cake.com/app/accounts/sms-certification", {
        smsToken: phoneSign,
      })
      .then((res) => {
        console.log(res)
        if (res.isSuccess)
          setPhoneFailD(false)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [phoneSign, setPhoneSign] = useState("");
  const [chPassword, setCheckPw] = useState("");
  const [addressMain, setAddressMain] = useState("");
  const [address, setAddress] = useState("");

  const [signInIdFail, setSignInIdFail] = useState(true);
  const [passwordFail, setPasswordFail] = useState(true);
  const [chPasswordFail, setCheckPasswordFail] = useState(false);
  const [birthdayFail, setBirthdayFail] = useState(true);
  const [nicknameFail, setNicknameFail] = useState(true);
  const [emailFail, setEmailFail] = useState(true);
  const [phoneFail, setPhoneFail] = useState(true);

  const [signInIdFailD, setSignInIdFailD] = useState(false);
  const [nicknameFailD, setNicknameFailD] = useState(false);
  const [emailFailD, setEmailFailD] = useState(false);

  const handleId = (e) => {
    setInputId(e.target.value);

    const neRegex = /[^a-z0-9]/
    if (e.target.value.length >= 3 && e.target.value.length <= 20 && !neRegex.test(e.target.value))
      setSignInIdFail(false)
    else
      setSignInIdFail(true)
  };

  const handlePassword = (e) => {
    setInputPw(e.target.value);
    if (e.target.value.length >= 8)
      setPasswordFail(false)
    else
      setPasswordFail(true)
    console.log(password === chPassword)
    if (password === chPassword)
      setCheckPasswordFail(true)
  };

  const handleCheckPassword = (e) => {
    setCheckPw(e.target.value);
    if (e.target.value === password)
      setCheckPasswordFail(false)
    else
      setCheckPasswordFail(true)
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    if (e.target.value !== '')
      setBirthdayFail(false)
    else
      setBirthdayFail(true)
  };

  const handleNickname = (e) => {
    const nekRegex = /[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
    setNickname(e.target.value);
    if (e.target.value.length >= 3 && e.target.value.length <= 20 && !nekRegex.test(e.target.value))
      setNicknameFail(false)
    else
      setNicknameFail(true)
  };

  const handleEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setEmail(e.target.value);
    if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value))
      setEmailFail(false)
    else
      setEmailFail(true)
  };

  const handlePhone = (e) => {
    setPhone(e.target.value.replace("-", ""));
    if (e.target.value.length !== 0)
      setPhoneFail(false)
    else
      setPhoneFail(true)
  };

  const handlePhoneSign = (e) => {
    setPhoneSign(e.target.value);
  };

  const handleAddressMain = (addressMain) => {
    setAddressMain(addressMain);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const onClickSignUp = () => {
    if ((signInIdFail || passwordFail || chPasswordFail || birthdayFail || nicknameFail || emailFail || phoneFail || (addressMain === "") || signInIdFailD || nicknameFailD || emailFailD || phoneFailD) &&
      (!(checkedItems.find(data => data == '서비스 이용약관 동의 (필수)')) || !(checkedItems.find(data => data === '개인정보 수집 및 이용 동의 (필수)')) || !(checkedItems.find(data => data === '만 14세 이상입니다 (필수)')))) {
      setFailModal(true);
      setModalCSS(true);
      setTimeout(() => {
        setFailModal(false);
      }, 1000);
      return;
    }

    axios
      .post("https://prod.kcook-cake.com/app/sign-up", {
        address: addressMain,
        dateOfBirth: birthday,
        email: email,
        nickname: nickname,
        password: password,
        phoneNumber: phoneNumber,
        signInId: signInId,
      })
      .then((res) => {
        console.log(res)
        document.location.href = "/";

        //성공시 메인으로 이동
        // localStorage.setItem("authenticated", authenticated);
      })
      .catch((error) => {
        console.log(error.response.data.message)
        if (error.response.data.message === '중복된 이메일입니다.') {
          setEmailFailD(true)
        } else if (error.response.data.message === '중복된 아이디입니다.') {
          setSignInIdFailD(true)
        } else if (error.response.data.message === '중복된 닉네임입니다.') {
          setNicknameFailD(true)
        }
        setFailModal(true);
        setModalCSS(true);
        setTimeout(() => {
          setFailModal(false);
        }, 1000);
      });
  };

  return (
    <div className="login">
      <div className="login-section">
        <img src={logo} className="logo" />
        <h1 className="login-title">나만의 케이크 주문, 케이쿡</h1>
        
        <p className="login-list">아이디</p>
        <input
          className="input-id login-input"
          type="text"
          onChange={handleId}
          value={signInId}
          placeholder="3~20자 입력 / 영어, 숫자만 가능"
        ></input>
        {signInIdFail ?
          <p className="confirm-text">아이디 형식이 맞지 않습니다.</p>
          : null
        }
        {signInIdFailD ?
          <p className="confirm-text">중복된 아이디입니다.</p>
          : null
        }

        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="password"
          onChange={handlePassword}
          value={password}
          placeholder="8자 이상 입력"
        ></input>
        {passwordFail ?
          <p className="confirm-text" style={{ margin: '0px 0px 3px 0px', }}>비밀번호 형식이 맞지 않습니다.</p>
          : null
        }
        <input
          className="input-id login-input"
          type="password"
          placeholder="비밀번호 재입력"
          onChange={handleCheckPassword}
          value={chPassword}
        ></input>
        {chPasswordFail ?
          <p className="confirm-text">비밀번호가 일치하지 않습니다.</p>
          : null
        }
        
        <p className="login-list">생일</p>
        <input
          className="input-id login-input"
          type="date"
          onChange={handleBirthday}
          value={birthday}
          placeholder="yyyy-mm-dd"
        ></input>
        <p className="confirm-text"></p>
        {birthdayFail ?
          <p className="confirm-text">생일 형식이 맞지 않습니다.</p>
          : null
        }
        
        <p className="login-list">닉네임</p>
        <input
          className="input-id login-input"
          type="text"
          onChange={handleNickname}
          value={nickname}
          placeholder="3~20자 입력 / 한글, 영어, 숫자만 가능"
        ></input>
        {nicknameFail ?
          <p className="confirm-text">닉네임 형식이 맞지 않습니다.</p>
          : null
        }
        {nicknameFailD ?
          <p className="confirm-text">중복된 이름(닉네임)입니다.</p>
          : null
        }

        <p className="login-list">이메일</p>
        <input
          className="input-id login-input"
          type="email"
          onChange={handleEmail}
          value={email}
          placeholder="xxx@xxx.xxx"
        ></input>
        {emailFail ?
          <p className="confirm-text">이메일 형식이 맞지 않습니다.</p>
          : null
        }
        {emailFailD ?
          <p className="confirm-text">중복된 이메일입니다.</p>
          : null
        }

        <p className="login-list">휴대폰 번호(숫자만)</p>
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="tel"
            onChange={handlePhone}
            value={phoneNumber}
            placeholder="번호 입력"
          ></input>
          <button
            className="input-btn"
            onClick={onSMS}
          >인증문자 발송</button>
        </div>
        {phoneFail ?
          <p className="confirm-text" style={{ margin: '0px 0px 3px 0px', }}>전화번호 형식이 맞지 않습니다.</p>
          : null
        }
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="tel"
            onChange={handlePhoneSign}
            value={phoneSign}
            placeholder="인증번호 입력"
          ></input>
          <button
            className="input-btn"
            onClick={onSMSCheck}
          >확인하기</button>
        </div>
        {phoneFailD ?
          <p className="confirm-text">인증번호가 일치하지 않습니다.</p>
          : null
        }

        <p className="login-list">주소</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="지번, 도로명, 건물명으로 검색"
          onClick={openclosePostCode}
          onChange={handleAddress}
          value={addressMain}
        >
        </input>
        <div id="popupDom" style={{ height: '5px', }}>
          {isPopupOpen && (
            <PopupDom>
              <PostCode
                onClose={openclosePostCode}
                parentCallback={handleAddressMain}
              />
            </PopupDom>
          )}
        </div>
        <input
          className="input-id login-input"
          type="text"
          placeholder="상세주소 입력"
          onChange={handleAddress}
          value={address}
        ></input>

        <div id="wrap"></div>

        <div className="agreement">
          <input
            type="checkbox"
            id="AgreeAll"
            onChange={(e) => onCheckAll(e.target.checked)}
          ></input>
          <label for="AgreeAll">전체동의</label>
        </div>
        <div className="agreement-sub">
          {checkboxs.map(data => <LoginCheckbox description={data.description} show={data.show} checkedItems={checkedItems} checkedItemHandler={checkedItemHandler} />)}
        </div>
        <button 
          className="login-btn"
          onClick={onClickSignUp}
          disabled={
            signInId.length >= 3 && password.length >= 8 ? false : true
          }
        >
        가입하기
        </button>
          {failModal === true ? (
            // <CSSTransition
            //   in={modalCSS}
            //   timeout={500}
            //   className="wow"
            //   nodeRef={nodeRef}
            // >
            <div className="iscorrect-login" ref={nodeRef}>
              회원가입 정보가 일치하지 않습니다.
            </div>
          ) : // </CSSTransition>
          null}
      </div>
    </div>
  );
}

export default SignUp;
