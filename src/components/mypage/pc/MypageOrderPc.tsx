import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../../assets/cake6.png';
import MMO_PcCard from '../card/pc/MMO_PcCard';

function MypageOrderPc (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="seller-mypage-top-flex moh-pc">
            <div className="seller-mypage-top">
                <h3>주문내역</h3>
                <span>이전에 주문하신 내역입니다.</span>
            </div>

            <MMO_PcCard getData={data} />
        </div>
    )
}


export default MypageOrderPc;