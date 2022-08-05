import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import LinkClick from '../../../utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import cake6 from   '../../../assets/cake6.png';
import SSO_SSH_MobileCard from '../card/mobile/SSO_SSH_MobileCard';

function SalesHistoryMobile (){
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

    useEffect(()=>{
        // axios.get(`/app/cakes`)
        //     .then(res =>{
        //         setData(res.data.result.content);
        //     });
    },[]);
    
    return(
        <div className="ssh-mobile sso-ssh-mobile-flex">
            <div className="sso-ssh-mobile-box">
                <div className="title2">
                    <div className="sso-mobile-front-title">판매내역</div>
                    <div className="sso-mobile-middle-title">처리할 예약 주문입니다.</div>
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
    )
}


export default SalesHistoryMobile;