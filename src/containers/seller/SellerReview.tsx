import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SellerReview.scss';
import cake6 from   '../../assets/cake6.png';
import SellerReviewPC from 'src/components/seller/pc/SellerReviewPC';
import SellerReviewMobile from 'src/components/seller/mobile/SellerReviewMobile';

function SellerReview (){
    return(
        <>
            <SellerReviewPC/>
            <SellerReviewMobile/>
        </>
    )
}


export default SellerReview;