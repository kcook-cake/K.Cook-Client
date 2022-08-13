import React, { useState, useEffect } from 'react';
import '../../styles/mypage/Coupon.scss';

import getAxios from 'src/utils/getAxios';
import MCCard from 'src/components/mypage/card/MCCard';

function Coupons (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <div className="mc seller-mypage-top-flex">
            <div className="ms-all-box">
                <div className="seller-mypage-top">
                    <div className="seller-mypage-front-title">쿠폰</div>
                    <div className="mc-code">
                        <input placeholder="할인 쿠폰 번호를 입력하세요"></input>
                        <button className="mc-button">등록하기</button>
                    </div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="mc-content">
                    <MCCard getData={data} />
                </div>
            </div>
        </div>
        </>
    )
}


export default Coupons;