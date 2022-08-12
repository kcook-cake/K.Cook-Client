import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SPM_SSR.scss';

import getAxios from 'src/utils/getAxios';
import SSR_PcCard from 'src/components/seller/card/pc/SSR_PcCard';
import SSR_MobileCard from 'src/components/seller/card/mobile/SSR_MobileCard';

function SellerReview (){
    const [data, setData] = useState([
        {
            date: "2022-07-06",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 1,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-01",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 2,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-01",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 3,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-04",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 4,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
    ]);
    // const [data, setData] = useState([]);
    // const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        // getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <div className="seller-mypage-top-flex seller-review ssr-pc">
            <div className="seller-mypage-top">
                <div className="mmo-mobile-front-title">상품후기</div>
                <div className="seller-mypage-middle-title">고객분들이 남겨주신 후기입니다</div>
            </div>
            <SSR_PcCard getData={data} />
        </div>
        <div className="ssr-mobile">
            <div className="spm-ssr-mobile-box">
                <div className="seller-mypage-top">
                    <div className="mmo-mobile-front-title">상품후기</div>
                    <div className="seller-mypage-middle-title">고객분들이 남겨주신 후기입니다</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSR_MobileCard getData={data} />
                </div>
            </div>
        </div>
        </>
    )
}


export default SellerReview;