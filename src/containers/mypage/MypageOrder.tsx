import React from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import MypageOrderPc from 'src/components/mypage/pc/MypageOrderPc';
import MypageOrderMobile from 'src/components/mypage/mobile/MypageOrderMobile';

import cake6 from   '../../assets/cake6.png';

function MypageOrder (){
    return(
        <>
            <MypageOrderPc/>
            <MypageOrderMobile/>
        </>
    )
}


export default MypageOrder;