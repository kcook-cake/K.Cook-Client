import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../../assets/cake6.png';
import MPR_PcCard from '../card/pc/MPR_PcCard';

interface Props {
    getData: any,
}

function ProductReviewPC ({getData}:Props){

    return(
        <div className="seller-mypage-top-flex mpr-pc">
            <div className="seller-mypage-top">
                <h3>상품후기</h3>
                <span>후기를 작성하고 포인트를 받으세요</span>
            </div>
            
            <MPR_PcCard getData={getData} />
        </div>
        
    )
}


export default ProductReviewPC;