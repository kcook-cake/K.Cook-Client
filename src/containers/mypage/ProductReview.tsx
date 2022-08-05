import React, { useState, useEffect } from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import ProductReviewPC from 'src/components/mypage/pc/ProductReviewPC';
import ProductReviewMobile from 'src/components/mypage/mobile/ProductReviewMobile';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';

function ProductReview (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
            <ProductReviewPC getData={data}/>
            <ProductReviewMobile getData={data}/>
        </>
        
    )
}


export default ProductReview;