import React from 'react';
import '../../styles/mypage/Profile.scss';

function Profile (){
    return(
        <div className="profile">
            <div className="mypage-top">
                <h3>회원 정보 수정</h3>
            </div>
            <div className="profile-list">
                <p className="profile-name">아이디</p>
                <input placeholder="cake" className="profile-content"></input>
            </div>
            <div className="profile-list">
                <p className="profile-name">비밀번호</p>
                <div className="password-set">
                    <input placeholder="기존 비밀번호 입력" className="profile-content"></input>
                    <input placeholder="변경할 비밀번호 입력" className="profile-content"></input>
                    <input placeholder="비밀번호 확인" className="profile-content"></input>
                </div>
            </div>
            <div className="profile-list">
                <p className="profile-name">이름(별명)</p>
                <input placeholder="케이쿡" className="profile-content"></input>
            </div>
            <div className="profile-list">
                <p className="profile-name">연락처</p>
                <input placeholder="010-1234-1234" className="profile-content"></input>
            </div>
            <div className="profile-list">
                <p className="profile-name">주소</p>
                <input placeholder="서울시 성동구 뚝섬로 123-12" className="profile-content"></input>
            </div>
            <button className="correction-btn">수정</button>
        </div>
            
    
    )
}


export default Profile;