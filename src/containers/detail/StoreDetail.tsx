import React, { useState, useEffect } from 'react';
import axios from "axios";
import $ from 'jquery';
import 'src/styles/detail/StoreDetail.scss';

import cake6 from "src/assets/cake6.png";
import profileNone from "src/assets/detail/store/profile.png";
import timeImg from "src/assets/detail/store/time.png";
import phoneImg from "src/assets/detail/store/phone.png";
import locationImg from "src/assets/detail/store/location.png";
import DetailAd from "src/assets/detail-ad.png";
import TestImg from "src/assets/searchIcon.png";

import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import LengthSlide_Two from 'src/components/detail/LengthSlide_Two';

const StoreDetail = (auth: any) =>{
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
                        {false? <img src={cake6} />:<div>~준비중 입니다~</div>}
                    </div>
                    <div className="store-detail-top-box">
                        <div className='store-detail-profile'>
                            {false? 
                                <></>:
                                <img src={profileNone} />
                            }
                        </div>
                        <div className="store-detail-store-name">{auth.nickname}</div>
                        <div className="store-detail-store-textarea">연리단길 지역 판매량 1위!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</div>
                        <hr className="store-detail-store-hr"/>

                        <div className="store-detail-store-info">
                            <img src={timeImg} />
                            서울 용산구 이태원로55길 111
                        </div>
                        <div className="store-detail-store-info">
                            <img src={phoneImg} />
                            서울 용산구 이태원로55길 111
                        </div>
                        <div className="store-detail-store-info">
                            <img src={locationImg} />
                            서울 용산구 이태원로55길 111
                        </div>

                        <div id="main-map" style={{ height: "178px", marginBottom: "20px", }}></div> {/* 위도 : 37.536345325879864, 경도 : 126.9970627691766 */}
                        
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
                            <LengthSlide_Two getData={data} resize={resize} slidePx={slidePx} />
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