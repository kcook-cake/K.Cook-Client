import React, { useState, useEffect } from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';
import MPRCard from 'src/components/mypage/card/MPRCard';

function ProductReview (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <div className="mypage-top-flex mmo">
            <div className="ms-all-box">
                <div className="seller-mypage-top">
                    <div className="mmo-mobile-front-title">상품후기</div>
                    <div className="seller-mypage-middle-title">후기를 작성하고 포인트를 받으세요</div>
                </div>
                <div className="mmo-mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <MPRCard getData={data} />
                </div>
                <div className="mmo-moobile">
                    {/* <PickCard /> */}
                </div>
            </div>
        </div>
        </>
    )
}


export default ProductReview;