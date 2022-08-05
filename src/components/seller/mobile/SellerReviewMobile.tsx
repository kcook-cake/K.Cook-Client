import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import cake6 from   '../../assets/cake6.png';
import SPM_SSR_MobileCard from '../card/mobile/SPM_SSR_MobileCard';

function SellerReviewMobile (){
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
            thumbnail: "https://k-cook-s3.s3.ap-northeast-2.amazonaws.com/kcook/store/%E1%84%8B%E1%85%B2%E1%84%82%E1%85%B5%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-07-17+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.16.56.png",
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

    useEffect(()=>{
        // axios.get(`/app/cakes`)
        //     .then(res =>{
        //         setData(res.data.result.content);
        //     });
    },[]);

    return(
        <div className="ssr-mobile">
            <div className="spm-ssr-mobile-box">
                <div className="title">
                    <div className="spm-ssr-mobile-title-front">상품후기</div>
                    <div className="spm-ssr-mobile-title-middle">고객분들이 남겨주신 후기입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SPM_SSR_MobileCard getData={data.reverse()} box={false}/>
                </div>
            </div>
        </div>
    )
}


export default SellerReviewMobile;