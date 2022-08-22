import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import $ from 'jquery';

import '../../styles/common/Section.scss';
import '../../styles/seller/SellerSection.scss';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import { ReactComponent as SellerHouse } from '../../assets/3170.svg';
import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as Cube } from '../../assets/seller/cube.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';
import { ReactComponent as Question } from '../../assets/seller/question.svg';

function SellerSection (){
    useEffect(()=>{
        $(".hm-pc-flex").hide();
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
    },[]);

    return(
        <div className="ss-flex">
            <div className="section ss">
                <div className="ss-icon"><SellerHouse/></div>
                <div className="name">원모먼트</div>
                <div className="email">onemoment@naver.com</div>

                <div className="ss-menu-flex">
                    <div className="ss-menu" >
                        <Link
                            to="/SSOCalendar"
                            className="ss-link SellerOrder">
                            <Menu className="icon"/>
                            <span>주문확인 </span>
                        </Link>
                    </div>
                    <div className="ss-menu" >
                        <Link
                            to="/SSHCalendar"
                            className="ss-link SalesHistory">
                            <Coin className="icon"/>
                            <span>판매내역 </span>
                        </Link>
                    </div>
                    <div className="ss-menu" >
                        <Link
                           to="/ProductManagement"
                           className="ss-link ProductManagement">
                            <Cube className="icon"/>
                            <span>상품관리 </span>
                        </Link>
                    </div>
                    <div className="ss-menu" >
                        <Link
                            to="/SellerReview"
                            className="ss-link SellerReview">
                            <SpeechBubble className="icon"/>
                            <span>상품후기 </span>
                        </Link>
                    </div>
                    <div className="ss-menu" >
                        <Link
                            to="/SellerStore"
                            className="ss-link SellerStore">
                            <SettingIcon className="icon"/>
                            <span>스토어 정보</span>
                        </Link>
                    </div>
                </div>
                <div className="section-footer ss-footer">
                    <Question className="icon"/>
                    <span>고객센터</span>
                </div>

            </div>
        </div>
    )
}


export default SellerSection;