import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SSO_SSH.scss';

import getAxios from 'src/utils/getAxios';
import SSO_SSH_PcCard from 'src/components/seller/card/pc/SSO_SSH_PcCard';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import SSO_SSH_MobileCard from 'src/components/seller/card/mobile/SSO_SSH_MobileCard';

function SalesHistory (){
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
        <div className="seller-mypage-top-flex ssh-pc">
            <div className="seller-mypage-top sso-ssh-top">
                    <div className="seller-mypage-front-title">판매내역</div>
                    <div className="seller-mypage-middle-title">처리할 예약 주문입니다</div>
                <div className='ss-fc-link-flex'>
                    <Link
                        to='/FullCalendarApp'
                        className='ss-fc-link'
                        onClick={()=>{
                            LinkClick("FullCalendarApp");
                            sellerLinkClick("FullCalendarApp");
                        }}
                    >달력보기</Link>
                    |
                    <Link
                        to='/SellerOrder'
                        className='ss-fc-link' 
                        onClick={()=>{
                            LinkClick("SalesHistory");
                            sellerLinkClick("SalesHistory");
                        }}
                        style={{ color: "#ea5450", }}
                    >목록보기</Link>
                </div>
            </div>

            <SSO_SSH_PcCard getData={data}/>
        </div>
        <div className="ssh-mobile sso-ssh-mobile-flex">
            <div className="sso-ssh-mobile-box">
                <div className="seller-mypage-top">
                    <div className="seller-mypage-front-title">판매내역</div>
                    <div className="seller-mypage-middle-title">처리할 예약 주문입니다</div>
                    <Link
                        to="/FullCalendarApp"
                        onClick={()=>{
                            LinkClick("FullCalendarApp");
                            sellerLinkClick("FullCalendarApp");
                        }}
                    ><div className="sso-mobile-calendar">달력보기</div></Link>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSO_SSH_MobileCard getData={data}/>
                </div>
            </div>
        </div>
        </>
    )
}


export default SalesHistory;