import React from 'react';
import '../../styles/mypage/ProductReview.scss';

import ProductReviewPC from 'src/components/mypage/pc/ProductReviewPC';
import ProductReviewMobile from 'src/components/mypage/mobile/ProductReviewMobile';

import cake6 from   '../../assets/cake6.png';

function ProductReview (){
    return(
        <>
            <ProductReviewPC/>
            <ProductReviewMobile/>
        </>
        
    )
}


export default ProductReview;