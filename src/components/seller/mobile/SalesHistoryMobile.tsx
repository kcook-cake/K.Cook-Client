import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import LinkClick from '../../../utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import cake6 from   '../../../assets/cake6.png';
import SSO_SSH_MobileCard from '../card/mobile/SSO_SSH_MobileCard';

interface Props {
    getData: any,
}

function SalesHistoryMobile ({getData}:Props) {
    
    return(
        <div className="ssh-mobile sso-ssh-mobile-flex">
            <div className="sso-ssh-mobile-box">
                <div className="title2">
                    <div className="sso-mobile-front-title">판매내역</div>
                    <div className="seller-mypage-middle-title">처리할 예약 주문입니다.</div>
                    <Link
                        to="/FullCalendarApp"
                        onClick={()=>{
                            LinkClick("FullCalendarApp");
                            sellerLinkClick("FullCalendarApp");
                        }}
                    ><div className="sso-mobile-calendar">달력보기</div></Link>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSO_SSH_MobileCard getData={getData}/>
                </div>
            </div>
        </div>
    )
}


export default SalesHistoryMobile;