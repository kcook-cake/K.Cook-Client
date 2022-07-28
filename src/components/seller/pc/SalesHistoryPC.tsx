import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import SSO_SSH_PcCard from '../card/pc/SSO_SSH_PcCard';

import cake6 from   '../../../assets/cake6.png';

function SalesHistoryPC (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="seller-mypage-top-flex ssh-pc">
            <div className="seller-mypage-top sso-ssh-top">
                <h3>판매내역</h3>
                <span>이전에 판매된 내역입니다.</span>
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
                        onClick={()=>{
                            LinkClick("SalesHistory");
                            sellerLinkClick("SalesHistory");
                        }}
                        style={{ color: "#ea5450", }}
                    >목록보기</Link>
                </div>
            </div>

            <SSO_SSH_PcCard getData={data}/>
        </div>
    )
}


export default SalesHistoryPC;