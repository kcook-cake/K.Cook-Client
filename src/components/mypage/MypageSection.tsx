import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import $ from 'jquery';

import '../../styles/common/Section.scss';
import '../../styles/mypage/MypageSection.scss'

import LinkClick from 'src/utils/LinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';

import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';

import { ReactComponent as Question } from '../../assets/seller/question.svg';


function MypageSection (){

    useEffect(()=>{
        $(".hm-pc-flex").hide();
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
    },[]);

    return(
        <div className="ms-flex">
            <div className="section ms">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="ms-menu-flex">
                    <div className="ms-menu" >
                        <Link
                            to="/MypageOrder"
                            className="ms-link MypageOrder">
                            <Menu className="icon"/>
                            <span>주문내역</span>
                        </Link>
                    </div>
                    <div className="ms-menu" >
                        <Link
                            to="/ProductReview"
                            className="ms-link ProductReview">
                            <SpeechBubble className="icon"/>
                            <span>상품후기</span>
                        </Link>
                    </div>
                    <div className="ms-menu" >
                        <Link
                            to="/Membership"
                            className="ms-link Membership">
                            <Coin className="icon"/>
                            <span> 적립금</span>
                        </Link>
                    </div>
                    <div className="ms-menu" >
                        <Link
                            to="/Coupon"
                            className="ms-link Coupon">
                            <CPicon className="icon"/>
                            <span>쿠폰 </span>
                        </Link>
                    </div>
                    <div className="ms-menu" >
                        <Link
                            to="/Profile"
                            className="ms-link Profile">
                            <SettingIcon className="icon"/>
                            <span>회원정보</span>
                        </Link>
                    </div>
                </div>
                <div className="section-footer ms-footer">
                    <Question className="icon"/><span>고객센터</span>
                </div>

            </div>
        </div>
    )
}


export default MypageSection;