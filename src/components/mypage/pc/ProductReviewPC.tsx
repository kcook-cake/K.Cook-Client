import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../../assets/cake6.png';
import MPR_PcCard from '../card/pc/MPR_PcCard';

function ProductReviewPC (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="seller-mypage-top-flex product-review mprp">
            <div className="seller-mypage-top">
                <h3>상품후기</h3>
                <span>후기를 작성하고 포인트를 받으세요</span>
            </div>
            
            <MPR_PcCard getData={data} />
        </div>
        
    )
}


export default ProductReviewPC;