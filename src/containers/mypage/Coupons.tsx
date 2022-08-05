import React, { useState, useEffect } from 'react';
import '../../styles/mypage/Coupon.scss';

import CouponsPC from 'src/components/mypage/pc/CouponsPC';
import CouponsMobile from 'src/components/mypage/mobile/CouponsMobile';
import getAxios from 'src/utils/getAxios';

function Coupons (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
            <CouponsPC getData={data}/>
            <CouponsMobile getData={data}/>
        </>
    )
}


export default Coupons;