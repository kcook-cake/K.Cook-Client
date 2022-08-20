import React, { useState, useEffect } from 'react';
import axios from "axios";
import $ from 'jquery';
import '../../styles/detail/StoreDetail.scss';

import DetailAd from "../../assets/detail-ad.png";
import TestImg from "../../assets/searchIcon.png";

import LengthwiseCard from 'src/components/LengthwiseCard';
import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import CakeCard from 'src/components/main/cake/CakeCard';
import PopularCard from 'src/components/main/home/PopularCard';
import StoreDetailCard from 'src/components/detail/StoreDetailCard';

const StoreDetail = () =>{
    const [maxNum, setMaxNum] = useState(0);
    const [num, setNum] = useState(1);
    const [slidePx, setSlidePx] = useState(0);
    const [resize, setResize] = useState(0);
    const handleResize = () => {
        if (window.innerWidth<=767) {
            setNum(1);
            setSlidePx(0);
        }
        setResize(window.innerWidth);
    };

    const [height, setHeight] = useState(0);

    const [data, setData] = useState([]);
    //0페이지부터 시작한다
    const [pageTodays, setPageTodays] = useState(0);
    const [lengthTodays, setLengthTodays] = useState(0);
    useEffect(()=>{
        $(".hm-pc-flex").show();
        LinkClick("Store");
        if ($(".seller-flex").height() != null) setHeight(Number($(".seller-flex").height()));

        getAxios(setData, setLengthTodays, "cakes", [], 16, pageTodays, 0);
        axios
            .get(`https://prod.kcook-cake.com/app/cakes`)
            .then((res) => {
                setLengthTodays(res.data.result.content.length);
                setMaxNum(Math.ceil(res.data.result.content.length/8));
                setData(res.data.result.content);
            })
            .catch((error) => {
            });
        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);
    },[]);

    return(
        <>
        <div className="store-detail-flex">
            <div className="store-detail">
                <div className="store-detail-top">
                    <div className="store-detail-top-img">
                        {/* <img src={DetailAd} /> */}
                    </div>
                    <div className="store-detail-top-box">
                        <div className="store-detail-store-name">원모먼트</div>
                        <div className="store-detail-store-ad">연리단길 지역 판매량 1위!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</div>
                        <div className="store-detail-store-address">서울 용산구 이태원로55길 111</div> {/* 위도 : 37.536345325879864, 경도 : 126.9970627691766 */}
                        <div id="map" style={{ height: "200px", marginBottom: "20px", }}></div>
                        {/* <div id="map" style={{height: "500px"}}></div> */}
                        <div className="store-detail-store-content-box">
                            <div className="store-detail-store-content">#특별한날</div>
                            <div className="store-detail-store-content">#기념일</div>
                            <div className="store-detail-store-content">#유니크한</div>
                            <div className="store-detail-store-content">#커스텀</div>
                            <div className="store-detail-store-content">#우히힛ㅎ</div>
                            <div className="store-detail-store-content">#기념일</div>
                            <div className="store-detail-store-content">#유니크한</div>
                            <div className="store-detail-store-content">#커스텀</div>
                        </div>
                        <div className="store-detail-store-button-box">
                            <button className="store-detail-store-button" style={{ float: "left", }}>
                                <img src={TestImg} />
                                99
                            </button>
                            <button className="store-detail-store-button" style={{ float: "right", }}>
                                <img src={TestImg} />
                                공유하기
                            </button>
                        </div>
                        <button className="store-detail-store-button-bottom">주문하기</button>
                    </div>
                </div>
                <img src={DetailAd} className="store-detail-ad" />

                <div className="store-detail-cakelist home">
                    <div className="store-detail-title-flex">
                        <div className="store-detail-title">케이크</div>
                        <div className="store-detail-btn">
                            <div>{num}/{maxNum}</div>
                            <button
                                className="store-detail-btn-arrow"
                                onClick={()=>{
                                    setNum(num-1);
                                    if (resize<=767) setSlidePx(slidePx+704);
                                    else setSlidePx(slidePx+1199);
                                    if (num == 1) {
                                        setNum(5);
                                        setSlidePx(-1199*(maxNum-1));
                                    }
                                }}
                                style={{ marginLeft: "5px", }}
                                >&lt;
                            </button>
                            <button 
                                className="store-detail-btn-arrow"
                                onClick={()=>{
                                    setNum(num+1);
                                    if (resize<=767) setSlidePx(slidePx-704);
                                    else setSlidePx(slidePx-1199);
                                    if (num == maxNum) {
                                        setNum(1);
                                        setSlidePx(0);
                                    }
                                }}
                                >&gt;
                            </button>
                        </div>
                    </div>
                    <div className="store-detail-inner">
                        <ul className="store-detail-contents">
                            <StoreDetailCard getData={data} resize={resize} slidePx={slidePx} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="pc" style={{width: "5px", height: (2000-height),}}></div>
        </>
    )
}


export default StoreDetail;