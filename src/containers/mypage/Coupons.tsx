import React from 'react';
import '../../styles/mypage/Coupon.scss';

import CouponsPC from 'src/components/mypage/pc/CouponsPC';
import CouponsMobile from 'src/components/mypage/mobile/CouponsMobile';

function Coupons (){
    return(
        <>
            <CouponsPC/>
            <CouponsMobile/>
        </>
    )
}


export default Coupons;