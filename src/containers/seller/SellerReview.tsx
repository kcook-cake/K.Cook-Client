import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/seller/spm-ssr/SPM_SSR.scss';

import getAxios from 'src/utils/getAxios';
import SSRCard from 'src/components/seller/spm-ssr/SSRCard';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';

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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
        },
    ]);
    // const [data, setData] = useState([]);
    // const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        LinkClick("SellerReview");
        sellerLinkClick("SellerReview");
        // getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <div className="seller-mypage-top-flex">
            <div className="spm-ssr-mobile-box">
                <div className="seller-mypage-top spm-ssr-title">
                    <div className="seller-mypage-front-title">상품후기</div>
                    <div className="seller-mypage-middle-title">고객분들이 남겨주신 후기입니다</div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="seller-content">
                    <SSRCard getData={data} />
                </div>
            </div>
        </div>
        </>
    )
}


export default SellerReview;