import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/mypage/Coupon.scss';

import MMMCard from '../card/MMMCard';

function CouponsMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);

    return(
        <div className="mp-top coupon mcm mypage-mobile">
            <div className="mcm-box mprm-box">
                <div className="title">
                    쿠폰
                    <div className="mcm-title-right">
                        <button className="mcm-title-button">등록하기</button>
                    </div>
                </div>
                <div className="content">
                    <MMMCard getData={data} box={false}/>
                </div>
            </div>
        </div>
            
    
    )
}


export default CouponsMobile;