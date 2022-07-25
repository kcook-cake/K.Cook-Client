import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SellerReview.scss';
import cake6 from   '../../assets/cake6.png';
import SellerReviewPC from 'src/components/seller/pc/SellerReviewPC';
import SellerOrderMobile from 'src/components/seller/mobile/SellerOrderMobile';

function SellerReview (){
    return(
        <>
            <SellerReviewPC/>
            <SellerOrderMobile/>
        </>
    )
}


export default SellerReview;