import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/SellerOrder.scss';

import cake6 from   '../../../assets/cake6.png';
import SSOMCard from '../card/SSOMCard';

function SellerOrderMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top product-review ssom mypage-mobile">
            <div className="mprm-box">
                <div className="title">
                    주문확인
                    <div className="ssom-middle-title">처리해야할 예약 입니다.</div>
                    <div className="ssom-calendar">달력보기</div>
                </div>
                <div className="content">
                    <SSOMCard getData={data}/>
                </div>
            </div>
    </div>
    )
}

export default SellerOrderMobile;