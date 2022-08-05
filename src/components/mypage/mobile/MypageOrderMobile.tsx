import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WidthwiseCard from 'src/components/WidthwiseCard';
import LengthwiseCard from 'src/components/LengthwiseCard';

import cake6 from   '../../assets/cake6.png';
import PickCard from 'src/components/main/PickCard';
import getAxios from 'src/utils/getAxios';

interface Props {
    getData: any,
}

function MypageOrderMobile ({getData}:Props){

    return(
        <div className="mmo-moobile ms-all-mypage">
            {/* <div className="title2">
                <div className="sso-mobile-front-title">주문확인</div>
                <div className="sso-mobile-middle-title">처리할 예약 주문입니다.</div>
                <Link
                    to="/FullCalendarApp"
                    onClick={()=>{
                        LinkClick("FullCalendarApp");
                        sellerLinkClick("FullCalendarApp");
                    }}
                ><div className="sso-mobile-calendar">달력보기</div></Link>
            </div> */}

            <div className="ms-all-box mmo-moobile-inner">
                <div className="title">
                    <div className="mmo-mobile-front-title">주문내역</div>
                    <div className="seller-mypage-middle-title">이전에 주문하신 내역입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="contents">
                    <LengthwiseCard getData={getData} link=""/>
                </div>
            </div>

            <div className="mmo-pick-card">
                <PickCard />
            </div>
        </div>
    )
}


export default MypageOrderMobile;