import React, { useState, useEffect } from "react";
import "../styles/SignUp.scss";

import { Link } from "react-router-dom";
import axios from "axios";

import PopupDom from "../components/PopupDom.js";
import PostCode from "../components/PostCode.js";
import LoginCheckbox from "../components/LoginCheckbox.js";

import logo from "../assets/logo.png";

function SignUp() {
  const [signInId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [chPassword, setCheckPw] = useState("");
  const [addressMain, setAddressMain] = useState("");
  const [address, setAddress] = useState("");

  const handleId = (e) => {
    setInputId(e.target.value);
  };
  const handlePassword = (e) => {
    setInputPw(e.target.value);
  };
  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleCheckPassword = (e) => {
    setCheckPw(e.target.value);
  };
  const handleAddressMain = (addressMain) => {
    setAddressMain(addressMain);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

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

  const onClickSignUp = () => {
    console.log(signInId)
    console.log(password)
    console.log(phoneNumber)
    console.log(nickname)
    console.log(email)
    console.log(birthday)
    console.log(addressMain)
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
        // console.log(error)
        // setFailModal(true);
        // setModalCSS(true);
        // setInputPw("");
        // setInputId("");
        // setTimeout(() => {
        //   setFailModal(false);
        // }, 1000);
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
        <p className="confirm-text">중복된 아이디입니다.</p>

        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="password"
          onChange={handlePassword}
          value={password}
          placeholder="8자 이상 입력"
        ></input>
        <input
          className="input-id login-input"
          type="password"
          placeholder="비밀번호 재입력"
          onChange={handleCheckPassword}
          value={chPassword}
        ></input>
        <p className="confirm-text">비밀번호가 일치하지 않습니다.</p>
        
        <p className="login-list">생일</p>
        <input
          className="input-id login-input"
          type="text"
          onChange={handleBirthday}
          value={birthday}
          placeholder="yyyy-mm-dd"
        ></input>
        <p className="confirm-text"></p>
        
        <p className="login-list">닉네임</p>
        <input
          className="input-id login-input"
          type="text"
          onChange={handleNickname}
          value={nickname}
          placeholder="3~20자 입력 / 한글, 영어, 숫자만 가능"
        ></input>
        <p className="confirm-text">중복된 이름(닉네임)입니다.</p>

        <p className="login-list">이메일</p>
        <input
          className="input-id login-input"
          type="text"
          onChange={handleEmail}
          value={email}
          placeholder="xxx@xxx.xxx"
        ></input>
        <p className="confirm-text">중복된 이메일입니다.</p>

        <p className="login-list">휴대폰 번호(숫자만)</p>
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="number"
            onChange={handlePhone}
            value={phoneNumber}
            placeholder="010-xxxx-xxxx"
          ></input>
          <button className="input-btn">인증문자 발송</button>
        </div>
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="number"
            placeholder="인증번호 입력"
          ></input>
          <button className="input-btn">확인하기</button>
        </div>
        <p className="confirm-text">인증번호가 일치하지 않습니다.</p>

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
        <div 
          className="login-btn"
          onClick={onClickSignUp}
        >
        가입하기
        </div>
      </div>
    </div>
  );
}

export default SignUp;
