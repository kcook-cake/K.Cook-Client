import React from 'react';
import '../../styles/mypage/OrderHistory.scss';
import '../../styles/seller/SellerOrder.scss';
import cake6 from   '../../assets/cake6.png';
import { Link } from 'react-router-dom';
import SalesHistoryPC from 'src/components/seller/pc/SalesHistoryPC';
import SalesHistoryMobile from 'src/components/seller/mobile/SalesHistoryMobile';

function SalesHistory (){
    return(
        <>
            <SalesHistoryPC/>
            <SalesHistoryMobile/>
        </>
    )
}


export default SalesHistory;