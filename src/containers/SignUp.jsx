import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $, { htmlPrefilter } from "jquery";

import "../styles/common/LoginSignup.scss";
import "../styles/SignUp.scss";

import PopupDom from "../components/PopupDom.js";
import PostCode from "../components/PostCode.js";
import LoginCheckbox from "../components/LoginCheckbox";

import logo from "../assets/logo.png";
import X from "../assets/address_x.png"

function SignUp() {
  const [failModalText, setFailModalText] = useState("회원가입 정보가 일치하지 않습니다.");
  const [failModal, setFailModal] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업창 열고닫기
  const openclosePostCode = () => {
    if (isPopupOpen) 
      setIsPopupOpen(false);
    else
      setIsPopupOpen(true);
  };
  
  const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  const checkboxs = [
    { id: 1, description: '서비스 이용약관 동의 (필수)', show: '보기', },
    { id: 2, description: '개인정보 수집 및 이용 동의 (필수)', show: '보기', },
    { id: 3, description: '만 14세 이상입니다 (필수)', show: '', },
    { id: 4, description: '광고성 정보 수신 동의 (선택)', show: '보기', }
  ]

  //체크박스 전체 선택/해제
  const onCheckAll = (checked) => {
    if (checked) {
      setIsChecked(true);
      const checkedItemsArray = []
      checkboxs.forEach(data => checkedItemsArray.push(data.id))
      setCheckedItems(checkedItemsArray)
    } else {
      setIsChecked(false);
      setCheckedItems([])
    }
  }
  //체크박스 개별 선택/해제
  const checkedItemHandler = (code, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, code])
    } else {
      const filter = checkedItems.filter(one => one !== code)
      setCheckedItems([...filter])
    }

    if (checkedItems.length == 4) setIsChecked(false);
    else if (isChecked && checkedItems.length == 3) setIsChecked(true);
  }

  //핸드폰 인증 함수
  const [phoneResult, setPhoneResult] = useState("");
  const onSMS = () => {
    axios
      .patch(`https://prod.kcook-cake.com/app/accounts/sms-token`, {
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        setPhoneResult(res.result);
      })
      .catch((error) => {
        // setFailModalText(error.response.data.message);
        setFailModal(true);
        setTimeout(() => {
          setFailModal(false);
        }, 5000);
        // setFailModalText("회원가입 정보가 일치하지 않습니다.");
      });
  }

  const [email, setEmail] = useState("");
  const [password, setInputPw] = useState("");
  const [chPassword, setCheckPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [addressMain, setAddressMain] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneSms, setPhoneSms] = useState("");

  const [emailFail, setEmailFail] = useState(true);
  const [emailFailD, setEmailFailD] = useState(false); //이메일 중복체크 -> 백엔드에서 확인
  const [passwordFail, setPasswordFail] = useState(true);
  const [chPasswordFail, setCheckPasswordFail] = useState(false);
  const [nicknameFail, setNicknameFail] = useState(true);
  const [nicknameFailD, setNicknameFailD] = useState(false); //닉네임 중복체크 -> 백엔드에서 확인
  const [birthdayFail, setBirthdayFail] = useState(true);
  const [addressFail, setAddressFail] = useState(true);
  const [phoneFail, setPhoneFail] = useState(true);
  const [phoneSmsFail, setPhoneSmsFail] = useState(false); //전화번호 인증

  const handleEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setEmail(e.target.value);
    if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value))
      setEmailFail(false)
    else
      setEmailFail(true)
  };

  const handlePassword = (e) => {
    setInputPw(e.target.value);
    if (e.target.value.length >= 8)
      setPasswordFail(false)
    else
      setPasswordFail(true)
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

  const handleNickname = (e) => {
    const nekRegex = /[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
    setNickname(e.target.value);
    if (e.target.value.length >= 3 && e.target.value.length <= 20 && !nekRegex.test(e.target.value))
      setNicknameFail(false)
    else
      setNicknameFail(true)
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    if (e.target.value !== '')
      setBirthdayFail(false)
    else
      setBirthdayFail(true)
  };

  const handleAddressMain = (addressMain) => {
    setAddressMain(addressMain);
    if (addressMain !== '')
      setAddressFail(false)
    else
      setAddressFail(true)
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value.replace("-", ""));
    if (e.target.value.length !== 0) {
      setPhoneFail(false)
      setPhoneSmsFail(true)
    }
    else{
      setPhoneFail(true)
      setPhoneSmsFail(false)
    }
  };

  const handlePhoneSms = (e) => {
    console.log(e.target.value);
    console.log(phoneResult);
    setPhoneSms(e.target.value);
  };

  const onClickSignUp = () => {
    console.log(emailFail);
    console.log(passwordFail);
    console.log(chPasswordFail);
    console.log(nicknameFail);
    console.log(birthdayFail);
    console.log(addressMain);
    console.log(phoneFail);
    console.log(phoneSmsFail);
    console.log((!(checkedItems.find(data => data == 1)) || !(checkedItems.find(data => data === 2)) || !(checkedItems.find(data => data === 3))));
    if (emailFail || passwordFail || chPasswordFail || nicknameFail || birthdayFail || (addressMain === "") || addressFail || phoneFail || phoneSmsFail ||
      (!(checkedItems.find(data => data == 1)) || !(checkedItems.find(data => data === 2)) || !(checkedItems.find(data => data === 3)))) 
    {
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 5000);
    } else {
      axios
        .post("https://prod.kcook-cake.com/app/sign-up", {
          address: addressMain + " " + address,
          dateOfBirth: birthday,
          email: email,
          nickname: nickname,
          password: password,
          phoneNumber: phoneNumber,
        })
        .then((res) => {
          sessionStorage.setItem("jwToken", res.data.result.jwt);
          document.location.href = "/";
        })
        .catch((error) => {
          setFailModalText(error.response.data.message);
          setFailModal(true);
          setTimeout(() => {
            setFailModal(false);
          }, 5000);
          setFailModalText("회원가입 정보가 일치하지 않습니다.");
        });
    }
  };

  useEffect(()=>{
    BackgroundF();
    $(".hm-pc-flex").hide();
  },[]);

  const [backWidth, setBackWidth] = useState(0);
  const BackgroundF = () => {
    var n = ($(".login-flex").width() - $(".login").width())/2;
    setBackWidth(n);
  };

  return (
    <div className="login-flex">
      <div className="login">
        <img src={logo} className="logo" />
        <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
        
        <p className="login-center">이메일</p>
        <input
          className="login-input"
          type="email"
          onChange={handleEmail}
          value={email}
          placeholder="xxx@xxx.xxx"
        ></input>
        {emailFail ?
          <p className="signup-confirm-text">이메일 형식이 맞지 않습니다.</p>
          : null
        }
        {emailFailD ?
          <p className="signup-confirm-text">중복된 이메일입니다.</p>
          : null
        }

        <p className="login-center">비밀번호</p>
        <input
          className="login-input"
          type="password"
          onChange={handlePassword}
          value={password}
          placeholder="8자 이상 입력"
        ></input>
        {passwordFail ?
          <p className="signup-confirm-text" style={{ margin: '0px 0px 3px 0px', }}>비밀번호 형식이 맞지 않습니다.</p>
          : null
        }
        <input
          className="login-input"
          type="password"
          placeholder="비밀번호 재입력"
          onChange={handleCheckPassword}
          value={chPassword}
        ></input>
        {chPasswordFail ?
          <p className="signup-confirm-text">비밀번호가 일치하지 않습니다.</p>
          : null
        }
        
        <p className="login-center">이름(닉네임)</p>
        <input
          className="login-input"
          type="text"
          onChange={handleNickname}
          value={nickname}
          placeholder="3~20자 입력 / 한글, 영어, 숫자만 가능"
        ></input>
        {nicknameFail ?
          <p className="signup-confirm-text">닉네임 형식이 맞지 않습니다.</p>
          : null
        }
        {nicknameFailD ?
          <p className="signup-confirm-text">중복된 이름(닉네임)입니다.</p>
          : null
        }

        <p className="login-center">생일</p>
        <input
          className="login-input"
          type="date"
          onChange={handleBirthday}
          value={birthday}
          placeholder="yyyy-mm-dd"
        ></input>
        <p className="signup-confirm-text"></p>
        {birthdayFail ?
          <p className="signup-confirm-text">생일 형식이 맞지 않습니다.</p>
          : null
        }

        <p className="login-center">주소</p>
        <input
          className="login-input signup-address"
          type="text"
          placeholder="지번, 도로명, 건물명으로 검색"
          onClick={openclosePostCode}
          onChange={handleAddress}
          value={addressMain}
        >
        </input>
        <div id="popupDom">
          {isPopupOpen ? 
          <>
            <div className="signup-adress-top">
              주소 검색
              <img
                src={X}
                onClick={()=>{
                  setIsPopupOpen(false);
                }} 
              />
            </div>
            <PopupDom>
              <PostCode
                onClose={openclosePostCode}
                parentCallback={handleAddressMain}
              />
            </PopupDom>
          </> :null}
        </div>
        <input
          className="login-input"
          type="text"
          placeholder="상세주소 입력"
          onChange={handleAddress}
          value={address}
        ></input>
        {addressFail ?
          <p className="signup-confirm-text">주소 형식이 맞지 않습니다.</p>
          : null
        }

        <p className="login-center">휴대폰 번호(숫자만)</p>
        <div className="login-input signup-phone">
          <input
            type="tel"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            placeholder="번호 입력"
          ></input>
          <button
            className="phone-input-btn"
            onClick={onSMS}
          >인증문자 발송</button>
        </div>
        {phoneFail ?
          <p className="signup-confirm-text" style={{ margin: '0px 0px 3px 0px', }}>전화번호 형식이 맞지 않습니다.</p>
          : null
        }
        <div className="login-input signup-phone">
          <input
            type="number"
            onChange={handlePhoneSms}
            value={phoneSms}
            placeholder="인증번호 입력"
          ></input>
          <button
            className="phone-input-btn"
            onClick={()=>{
              if ((phoneSms == phoneResult) && phoneSms != "") setPhoneSmsFail(false);
            }}
          >확인하기</button>
        </div>
        {phoneSmsFail ?
          <p className="signup-confirm-text" style={{ margin: '0px 0px 3px 0px', }}>전화번호를 인증하셔야 합니다.</p>
          : null
        }

        {/* <div id="wrap"></div> */}

        <div className="signup-agreement">
          <input
            type="checkbox"
            id="AgreeAll"
            checked={isChecked}
            onChange={(e) => 
              onCheckAll(e.target.checked)
            }
          ></input>
          <label for="AgreeAll"></label>
          <div className="login-auto-contents">전체동의</div>
        </div>
        <div className="signup-agreement-sub">
          {checkboxs.map(data => 
            <LoginCheckbox 
              id={data.id}
              description={data.description} 
              show={data.show} 
              checkedItems={checkedItems} 
              checkedItemHandler={checkedItemHandler} 
            />
          )}
        </div>
        <button
          className="login-btn"
          onClick={onClickSignUp}
          disabled={
            email.length >= 3 && password.length >= 8 ? false : true
          }
        >
        가입하기
        </button>

          {failModal? 
            <div className="login-iscorrect">
              {failModalText}
            </div>
          : null}
      </div>
    </div>
  );
}

export default SignUp;
