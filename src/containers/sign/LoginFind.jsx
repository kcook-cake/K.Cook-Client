import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "src/styles/common/LoginSignup.scss";
import "src/styles/sign/Login.scss";

import axios from "axios";
import $ from 'jquery';

import logo from "src/assets/logo.png";
import LinkClick from "src/utils/LinkClick";

function LoginFind() {
    const [failModalText, setFailModalText] = useState("정보가 일치하지 않습니다.");
    const [failModal, setFailModal] = useState(false);
    const [page, setPage] = useState(true);

    //핸드폰 인증 함수
    const [phoneResult, setPhoneResult] = useState("1111");
    const onSMS = () => {
        axios
            .patch(`https://prod.kcook-cake.com/app/accounts/email/sms-token`, {
                email: email,
            })
            .then((res) => {
                setPhoneResult(res.data.result);
                setFailModalText("인증번호가 발송되었습니다.");
                setFailModal(true);
                setTimeout(() => {
                setFailModal(false);
                }, 5000);
            })
            .catch((error) => {
                setFailModalText("정보가 일치하지 않습니다.");
                setFailModal(true);
                setTimeout(() => {
                setFailModal(false);
                }, 5000);
            });
    }

    const [email, setEmail] = useState("");
    const [phoneSms, setPhoneSms] = useState("");
    const [password, setPassword] = useState("");
    const [chPassword, setCheckPw] = useState("");

    const [emailFail, setEmailFail] = useState(true);
    const [phoneSmsFail, setPhoneSmsFail] = useState(false);
    const [passwordFail, setPasswordFail] = useState(true);
    const [chPasswordFail, setCheckPwFail] = useState(false);

    const handleEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        setEmail(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value)) {
            setEmailFail(false)
            setPhoneSmsFail(true)
        } else {
            setEmailFail(true)
            setPhoneSmsFail(false)
        }
    };
    const handlePhoneSms = (e) => {
        setPhoneSms(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length >= 8)
            setPasswordFail(false)
        else
            setPasswordFail(true)
        if (password === chPassword)
            setCheckPwFail(true)
    };
    const handleCheckPassword = (e) => {
        setCheckPw(e.target.value);
        if (e.target.value === password)
            setCheckPwFail(false)
        else
            setCheckPwFail(true)
    };

    const Find = () => {
        if (emailFail || phoneSmsFail) {
            setFailModalText("이메일과 인증번호를 정확히 입력해주세요.");
            setFailModal(true);
            setTimeout(() => {
              setFailModal(false);
            }, 5000);
        } else
            setPage(false);
    };
    const Change = () => {
        if (passwordFail || chPasswordFail) {
            setFailModalText("비밀번호를 정확히 입력해주세요.");
            setFailModal(true);
            setTimeout(() => {
              setFailModal(false);
            }, 5000);
        } else {
            axios
                .patch(`https://prod.kcook-cake.com/app/accounts/email/password`, {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    if (res.data.isSuccess)
                        document.location.href = "/Login";
                })
                .catch((error) => {
                    setFailModalText("정보가 일치하지 않습니다.");
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
        $(".hm-pc-flex").hide();
        LinkClick("Login");
    },[]);

    return (
        <div className="login-flex">
            {page?
            <>
            <form className="login" onSubmit={handleSubmit}>
                <img src={logo} className="logo" />
                <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
                <p className="login-sub-title">가입하신 이메일 주소와 휴대폰 번호를 인증해 주세요. 비밀번호를 재설정할 수 있습니다.</p>
                
                <p className="login-center">이메일</p>
                <div className="login-input signup-phone">
                    <input
                        type="email"
                        onChange={handleEmail}
                        value={email}
                        placeholder="xxx@xxx.xxx"
                    ></input>
                    <button
                        className="phone-input-btn"
                        onClick={onSMS}
                    >인증문자 발송</button>
                </div>
                {emailFail ?
                    <p className="signup-confirm-text" style={{ marginBottom: '3px', }}>이메일 형식이 맞지 않습니다.</p>
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
                    className="phone-input-btn phone-sms-input-btn"
                    onClick={()=>{
                      if ((phoneSms == phoneResult) && phoneSms != "") setPhoneSmsFail(false);
                      else setPhoneSmsFail(true);
                    }}
                >확인하기</button>
                </div>
                {phoneSmsFail ?
                    <p className="signup-confirm-text" style={{ margin: '0px 0px 3px 0px', }}>전화번호를 인증하셔야 합니다.</p>
                    : null
                }

                <div className="login-sub">
                    <div className="login-auto"></div>
                    <Link to="/Login">로그인하기</Link>
                </div>

                <button
                    type="submit"
                    className="login-btn"
                    onClick={Find}
                    disabled={
                        email.length !== 0 ? false : true
                    }
                >
                찾기
                </button>

                <div className="login-register">
                아직 계정이 없으신가요?
                <Link to="/SignUp" style={{ marginLeft: "4px", }}>가입하기</Link>
                {failModal === true ? (
                    <div className="login-iscorrect">
                        {failModalText}
                    </div>
                ) : null}
                </div>
            </form>
            </>: 
            <>
            <form className="login" onSubmit={handleSubmit}>
                <img src={logo} className="logo" />
                <h1 className="login-title">&nbsp;&nbsp;나만의 케이크 주문, 케이쿡</h1>
                
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

                <button
                    type="submit"
                    className="login-btn"
                    onClick={Change}
                    disabled={
                        password.length >= 8 ? false : true
                    }>
                    재설정하기
                </button>

                <div className="login-register">
                    {failModal === true ? (
                        <div className="login-iscorrect">
                            {failModalText}
                        </div>
                    ) : null}
                </div>
            </form>
            </>
            }
        </div>
    );
}

export default LoginFind;
