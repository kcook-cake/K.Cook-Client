import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

import "../styles/common/LoginSignup.scss";
import "../styles/SignUp.scss";

import PopupDom from "../components/PopupDom.js";
import PostCode from "../components/PostCode.js";
import LoginCheckbox from "../components/LoginCheckbox";

import logo from "../assets/logo.png";
import X from "../assets/address_x.png"

function SignUp() {
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

    console.log(checkedItems);
    if (checkedItems.length == 4) setIsChecked(false);
    else if (isChecked && checkedItems.length == 3) setIsChecked(true);
  }

  const [failModal, setFailModal] = useState(false);
  const [modalCSS, setModalCSS] = useState(false);

  const [phoneFailD, setPhoneFailD] = useState(true);
  const [phoneToken, setPhoneToken] = useState("");
  const [phonejwToken, setPhonejwToken] = useState("");
  const onSMS = () => {
    axios
      .patch(`/app/accounts/sms-token`, {
        phoneNumber: phoneNumber,
      }, {
        headers: {
            'X-ACCESS-TOKEN': phonejwToken,
        }
      })
      .then((res) => {
        if (res.isSuccess) {
          setPhoneFailD(false)
          document.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error)
        setFailModal(true);
        setModalCSS(true);
        setTimeout(() => {
          setFailModal(false);
        }, 5000);
      });
  }
  const onSMSCheck = () => {
    axios
      .patch(`/app/accounts/sms-certification`, {
        smsToken: phonejwToken,
      })
      .then((res) => {
        if (res.isSuccess) {
          setPhoneFailD(false)
          document.location.href = "/";
        }
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
  const [phoneSmsFail, setPhoneSmsFail] = useState(false);
  const [addressFail, setAddressFail] = useState(true);

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
    if (addressMain !== '')
      setAddressFail(false)
    else
      setAddressFail(true)
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const onClickSignUp = () => {
    if ((signInIdFail || passwordFail || chPasswordFail || birthdayFail || nicknameFail || emailFail || phoneFail || (addressMain === "") || signInIdFailD || nicknameFailD || emailFailD || addressFail) ||
      (!(checkedItems.find(data => data == 1)) || !(checkedItems.find(data => data === 2)) || !(checkedItems.find(data => data === 3)))) {
      setFailModal(true);
      setModalCSS(true);
      setTimeout(() => {
        setFailModal(false);
      }, 1000);
    } else {
      axios
        .post("/app/sign-up", {
          address: addressMain,
          dateOfBirth: birthday,
          email: email,
          nickname: nickname,
          password: password,
          phoneNumber: phoneNumber,
          signInId: signInId,
        })
        .then((res) => {
          setPhonejwToken(res.data.result.jwt);
          setPhoneSmsFail(true);

          //성공시 메인으로 이동
          // sessionStorage.setItem("authenticated", authenticated);
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
          }, 5000);
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
      {/* {isPopupOpen?
        <div className="login-background" style={{ left: backWidth-65, }}></div>
      : null} */}

      <div className="login">
        <img src={logo} className="logo" />
        <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
        
        <p className="login-center">아이디</p>
        <input
          className="login-input"
          type="text"
          onChange={handleId}
          value={signInId}
          placeholder="3~20자 입력 / 영어, 숫자만 가능"
        ></input>
        {signInIdFail ?
          <p className="signup-confirm-text">아이디 형식이 맞지 않습니다.</p>
          : null
        }
        {signInIdFailD ?
          <p className="signup-confirm-text">중복된 아이디입니다.</p>
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
        
        <p className="login-center">닉네임</p>
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
        <input
          className="login-input"
          type="tel"
          onChange={handlePhone}
          value={phoneNumber}
          placeholder="번호 입력"
        ></input>
        {phonejwToken == "" ?
          <></>:
          <button
            className="phone-input-btn"
            onClick={onSMS}
          >인증문자 발송</button>
        }
        {phoneFail ?
          <p className="signup-confirm-text" style={{ margin: '0px 0px 3px 0px', }}>전화번호 형식이 맞지 않습니다.</p>
          : null
        }
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
            signInId.length >= 3 && password.length >= 8 ? false : true
          }
        >
        가입하기
        </button>

          {failModal === true ? 
            <div className="login-iscorrect">
              회원가입 정보가 일치하지 않습니다.
            </div>
          : null}
      </div>
    </div>
  );
}

export default SignUp;
