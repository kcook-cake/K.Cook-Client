import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import $ from 'jquery';
import '../../../src/styles/seller/SellerSection.scss';

import { ReactComponent as SellerHouse } from '../../assets/3170.svg';
import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as Cube } from '../../assets/seller/cube.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';
import { ReactComponent as Question } from '../../assets/seller/question.svg';


function SellerSection (){
    const designClick = (i:any) => {
        $(".seller-menu-link").css("color", "#999999");
        $(".seller-menu-link").css("background", "#fff");
        $(".seller-menu-link").css("stroke", "#fff");
        $(".seller-menu-link text").css("stroke", "#999999"); $(".seller-menu-link circle").css("stroke", "#999999"); $(".seller-menu-link path").css("stroke", "#999999"); $(".seller-menu-link tspan").css("stroke", "#999999"); $(".seller-menu-link ellipse").css("stroke", "#999999"); $(".seller-menu-link line").css("stroke", "#999999");

        $("."+i).css("color", "#fff");
        $("."+i).css("background", "#ea5450");
        $("."+i).css("stroke", "#ea5450");
        $("."+i+" text").css("stroke", "#fff"); $("."+i+" circle").css("stroke", "#fff"); $("."+i+" path").css("stroke", "#fff"); $("."+i+" tspan").css("stroke", "#fff"); $("."+i+" ellipse").css("stroke", "#fff"); $("."+i+" line").css("stroke", "#fff");
    }

    useEffect(()=>{
        $(".menu-bar-flex").hide();
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
        $("."+pathname).css("color", "#fff");
        $("."+pathname).css("background", "#ea5450");
        $("."+pathname).css("stroke", "#ea5450");
        $("."+pathname+" text").css("stroke", "#fff"); $("."+pathname+" circle").css("stroke", "#fff"); $("."+pathname+" path").css("stroke", "#fff"); $("."+pathname+" tspan").css("stroke", "#fff"); $("."+pathname+" ellipse").css("."+pathname+" stroke", "#fff"); $("."+pathname+" line").css("stroke", "#fff");
    },[]);

    return(
        <div className="seller-section">
            <div className="side-bar seller-list">
                <div className="seller-icon"><SellerHouse/></div>
                <div className="name">원모먼트</div>
                <div className="email">onemoment@naver.com</div>
                <div className="seller-menu">
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerOrder"
                            className="seller-menu-link SellerOrder"
                            onClick={()=>{designClick("SellerOrder")}}
                        >
                            <Menu className="icon"/>
                            <span>주문확인 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SalesHistory"
                            className="seller-menu-link SalesHistory"
                            onClick={()=>{designClick("SalesHistory")}}
                        >
                            <Coin className="icon"/>
                            <span>판매내역 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                           to="/ProductManagement"
                           className="seller-menu-link ProductManagement"
                           onClick={()=>{designClick("ProductManagement")}}
                        >
                            <Cube className="icon"/>
                            <span>상품관리 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerReview"
                            className="seller-menu-link SellerReview"
                            onClick={()=>{designClick("SellerReview")}}
                        >
                            <SpeechBubble className="icon"/>
                            <span>상품후기 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerStore"
                            className="seller-menu-link SellerStore"
                            onClick={()=>{designClick("SellerStore")}}
                        >
                            <SettingIcon className="icon"/>
                            <span>스토어 정보</span>
                        </Link>
                    </div>
                </div>
                <div className="seller-center">
                    <Question className="icon"/>
                    <span>
                    고객센터
                    </span>
                </div>

            </div>
        </div>
    )
}


export default SellerSection;