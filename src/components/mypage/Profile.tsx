import React, { useState, useEffect } from 'react';
import isSession from 'src/utils/isSession';
import LinkClick from 'src/utils/LinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';
import '../../styles/mypage/Profile.scss';

interface Props {
    session: boolean;
    auth: {
        accountId: number,
        address: string,
        dateOfBirth: string,
        email: string,
        nickname: string,
        phoneNumber: string,
    };
}

function Profile ({session, auth,}:Props){
    const [failModalText, setFailModalText] = useState("수정 정보가 일치하지 않습니다.");
    const [failModal, setFailModal] = useState(false);



    const [email, setEmail] = useState("");
    const [pastPw, setPastPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const [nickname, setNickname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [emailFail, setEmailFail] = useState(true);
    const [pastPwFail, setPastPwFail] = useState(true);
    const [newPwFail, setNewPwFail] = useState(true);
    const [checkPwFail, setCheckPwFail] = useState(false);
    const [nicknameFail, setNicknameFail] = useState(true);
    const [phoneFail, setPhoneFail] = useState(true);
  
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>,) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        setEmail(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value))
            setEmailFail(false)
        else
            setEmailFail(true)
    };
    const handlePastPw = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setPastPw(e.target.value);
        if (e.target.value.length >= 8)
            setPastPwFail(false)
        else
            setPastPwFail(true)
    };
    const handleNewPw = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setNewPw(e.target.value);
        if (e.target.value.length >= 8)
            setNewPwFail(false)
        else
            setNewPwFail(true)
      };
    const handleCheckPw = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setCheckPw(e.target.value);
        if (e.target.value === checkPw)
            setCheckPwFail(false)
        else
            setCheckPwFail(true)
    };
  
    const handleNickname = (e: React.ChangeEvent<HTMLInputElement>,) => {
        const nekRegex = /[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        setNickname(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && !nekRegex.test(e.target.value))
            setNicknameFail(false)
        else
            setNicknameFail(true)
    };
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setAddress(e.target.value);
    };
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value.replace("-", ""));
        if (e.target.value.length !== 0)
            setPhoneFail(false)
        else
            setPhoneFail(true)
    };

    const ChangeProfile = () => {
        if (emailFail || pastPwFail || newPwFail || checkPwFail || 
            newPw != checkPw || nicknameFail || phoneFail) {
            setFailModal(true);
            setTimeout(() => {
              setFailModal(false);
            }, 5000);
        } else {
            //axios
        }
    };

    useEffect(() => {
        LinkClick("Profile");
        mypageLinkClick("Profile");
    },[]);

    return(
        <div className="profile">
            <div className="seller-mypage-ss-mp">
                <h3>회원 정보 수정</h3>
            </div>
            <div className="profile-list">
                <p className="profile-name">아이디</p>
                <input
                    value={email}
                    className="profile-content"
                    onChange={handleEmail}/>
            </div>
            <div className="profile-list">
                <p className="profile-name">비밀번호</p>
                <div className="password-set">
                    <input
                        placeholder="기존 비밀번호 입력"
                        className="profile-content"
                        onChange={handlePastPw}/>
                    <input
                        placeholder="변경할 비밀번호 입력"
                        className="profile-content"
                        onChange={handleNewPw}/>
                    <input
                        placeholder="비밀번호 확인"
                        className="profile-content"
                        onChange={handleCheckPw}/>
                </div>
            </div>
            <div className="profile-list">
                <p className="profile-name">이름(별명)</p>
                <input
                    value={nickname}
                    className="profile-content"
                    onChange={handleNickname}/>
            </div>
            <div className="profile-list">
                <p className="profile-name">주소</p>
                <input
                    value={address}
                    className="profile-content"
                    onChange={handleAddress}/>
            </div>
            <div className="profile-list">
                <p className="profile-name">연락처</p>
                <input
                    value={phone}
                    className="profile-content"
                    onChange={handlePhone}/>
            </div>
            <button
                className="correction-btn"
                onClick={ChangeProfile}>
                수정
            </button>

            {failModal? 
                <div className="login-iscorrect">
                    {failModalText}
                </div>
            : null}
        </div>
            
    
    )
}


export default Profile;