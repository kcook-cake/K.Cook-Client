import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../../src/styles/mypage/MypageSection.scss'

import designClick from 'src/utils/designClick';

import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';

import { ReactComponent as Question } from '../../assets/seller/question.svg';


function MypageSection (){
    const designClickMypage = (i:any) => {
        $(".mypage-menu-link").css("color", "#fff");
        $(".mypage-menu-link").css("background", "none");
        $(".mypage-menu-link").css("font-weight", "normal");
        $(".mypage-menu-link"+" text").css("stroke", "#fff"); $(".mypage-menu-link"+" circle").css("stroke", "#fff"); $(".mypage-menu-link"+" path").css("stroke", "#fff"); $(".mypage-menu-link"+" g").css("stroke", "#fff"); $(".mypage-menu-link"+" tspan").css("stroke", "#fff"); $(".mypage-menu-link"+" ellipse").css("stroke", "#fff"); $(".mypage-menu-link"+" line").css("stroke", "#fff");

        $(".mypage-menu-link."+i).css("color", "#ea5450");
        $(".mypage-menu-link."+i).css("background", "#fff");
        $(".mypage-menu-link."+i).css("font-weight", "bold");
        $(".mypage-menu-link."+i+" text").css("stroke", "#ea5450"); $("."+i+" circle").css("stroke", "#ea5450"); $("."+i+" path").css("stroke", "#ea5450"); $("."+i+" g").css("stroke", "#ea5450"); $("."+i+" tspan").css("stroke", "#ea5450"); $("."+i+" ellipse").css("stroke", "#ea5450"); $("."+i+" line").css("stroke", "#ea5450");
    }

    useEffect(()=>{
        $(".menu-bar-flex").hide();
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
        $(".mypage-menu-link."+pathname).css("color", "#ea5450");
        $(".mypage-menu-link."+pathname).css("background", "#fff");
        $(".mypage-menu-link."+pathname).css("font-weight", "bold");
        $(".mypage-menu-link."+pathname+" text").css("stroke", "#ea5450"); $("."+pathname+" circle").css("stroke", "#ea5450"); $("."+pathname+" path").css("stroke", "#ea5450"); $("."+pathname+" g").css("stroke", "#ea5450"); $("."+pathname+" tspan").css("stroke", "#ea5450"); $("."+pathname+" ellipse").css("stroke", "#ea5450"); $("."+pathname+" line").css("stroke", "#ea5450");
    },[]);

    return(
        <div className="mypage-section">
            <div className="side-bar">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="mypage-menu">
                    <div className="mypage-menu-item" >
                        <Link
                            to="/MypageOrder"
                            className="mypage-menu-link MypageOrder"
                            onClick={()=>{designClickMypage("MypageOrder")}}
                        >
                            <Menu className="mypage-icon"/>
                            <span>주문내역</span>
                        </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link
                            to="/ProductReview"
                            className="mypage-menu-link ProductReview"
                            onClick={()=>{designClickMypage("ProductReview")}}
                        >
                            <SpeechBubble className="mypage-icon"/>
                            <span>상품후기</span>
                        </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link
                            to="/Membership"
                            className="mypage-menu-link Membership"
                            onClick={()=>{designClickMypage("Membership")}}
                        >
                            <Coin className="mypage-icon"/>
                            <span> 적립금</span>
                        </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link
                            to="/Coupon"
                            className="mypage-menu-link Coupon"
                            onClick={()=>{designClickMypage("Coupon")}}
                        >
                            <CPicon className="mypage-icon"/>
                            <span>쿠폰 </span>
                        </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link
                            to="/Profile"
                            className="mypage-menu-link Profile"
                            onClick={()=>{designClickMypage("Profile")}}
                        >
                            <SettingIcon className="mypage-icon"/>
                            <span>회원정보</span>
                        </Link>
                    </div>
                </div>
                <div className="customer-center">
                    <Question className="mypage-icon"/><span>고객센터</span>
                </div>

            </div>
        </div>
    )
}


export default MypageSection;