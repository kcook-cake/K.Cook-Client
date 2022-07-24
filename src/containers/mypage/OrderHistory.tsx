import React from 'react';
import '../../styles/mypage/OrderHistory.scss';

import OrderHistoryPC from 'src/components/mypage/pc/OrderHistoryPC';
import OrderHistoryMobile from 'src/components/mypage/mobile/OrderHistoryMobile';

import cake6 from   '../../assets/cake6.png';

function OrderHistory (){
    return(
        <>
            <OrderHistoryPC/>
            <OrderHistoryMobile/>
        </>
    )
}


export default OrderHistory;