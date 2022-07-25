import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import $ from 'jquery';
import '../../../styles/seller/SellerSection.scss';

import designClick from 'src/utils/designClick';
import sellerDesignClick from 'src/utils/sellerDesignClick';

import { ReactComponent as SellerHouse } from '../../../assets/3170.svg';
import { ReactComponent as Menu } from '../../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../../assets/seller/coin.svg';
import { ReactComponent as Cube } from '../../../assets/seller/cube.svg';
import { ReactComponent as SpeechBubble } from '../../../assets/mypage/speech-bubble.svg';
import { ReactComponent as SettingIcon } from '../../../assets/seller/setting.svg';
import { ReactComponent as Question } from '../../../assets/seller/question.svg';


function SellerSectionPC (){
    useEffect(()=>{
        $(".menu-bar-flex").hide();
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
        sellerDesignClick(pathname);
    },[]);

    return(
        <div className="seller-section ssp">
            <div className="side-bar seller-list">
                <div className="seller-icon"><SellerHouse/></div>
                <div className="name">원모먼트</div>
                <div className="email">onemoment@naver.com</div>
                <div className="seller-menu">
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerOrder"
                            className="seller-menu-link SellerOrder"
                            onClick={()=>{
                                designClick("SellerOrder");
                                sellerDesignClick("SellerOrder");
                            }}
                        >
                            <Menu className="icon"/>
                            <span>주문확인 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SalesHistory"
                            className="seller-menu-link SalesHistory"
                            onClick={()=>{
                                designClick("SalesHistory");
                                sellerDesignClick("SalesHistory");
                            }}
                        >
                            <Coin className="icon"/>
                            <span>판매내역 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                           to="/ProductManagement"
                           className="seller-menu-link ProductManagement"
                           onClick={()=>{
                            designClick("ProductManagement");
                            sellerDesignClick("ProductManagement");
                        }}
                        >
                            <Cube className="icon"/>
                            <span>상품관리 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerReview"
                            className="seller-menu-link SellerReview"
                            onClick={()=>{
                                designClick("SellerReview");
                                sellerDesignClick("SellerReview");
                            }}
                        >
                            <SpeechBubble className="icon"/>
                            <span>상품후기 </span>
                        </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link
                            to="/SellerStore"
                            className="seller-menu-link SellerStore"
                            onClick={()=>{
                                designClick("SellerStore");
                                sellerDesignClick("SellerStore");
                            }}
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


export default SellerSectionPC;