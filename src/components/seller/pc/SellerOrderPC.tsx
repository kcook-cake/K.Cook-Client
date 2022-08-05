import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import SSO_SSH_PcCard from '../card/pc/SSO_SSH_PcCard';

interface Props {
    getData: any,
}

function SellerOrderPC ({getData}:Props) {
    return(
        <div className="seller-mypage-top-flex sso-pc">
            <div className="seller-mypage-top sso-ssh-top">
                <h3>주문확인</h3>
                <span>처리할 예약 주문입니다.</span>
                <div className='ss-fc-link-flex'>
                    <Link
                        to='/FullCalendarApp'
                        className='ss-fc-link'
                        onClick={()=>{
                            LinkClick("FullCalendarApp");
                            sellerLinkClick("FullCalendarApp");
                        }}
                    >달력보기</Link>
                    |
                    <Link
                        to='/SellerOrder'
                        className='ss-fc-link'
                        style={{ color: "#ea5450", }}
                        onClick={()=>{
                            LinkClick("SellerOrder");
                            sellerLinkClick("SellerOrder");
                        }}
                    >목록보기</Link>
                </div>
            </div>

            <SSO_SSH_PcCard getData={getData}/>
        </div>
    )
}


export default SellerOrderPC;