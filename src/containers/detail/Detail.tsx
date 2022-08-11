import React, { useState, useEffect } from 'react';
import '../../styles/detail/Detail.scss';

import DetailAd from "../../assets/detail-ad.png";
import TestImg from "../../assets/searchIcon.png";

import LengthwiseCard from 'src/components/LengthwiseCard';
import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';

const Detail = () =>{
    const [height, setHeight] = useState(0);

    const [data, setData] = useState([]);
    //0페이지부터 시작한다
    const [pageTodays, setPageTodays] = useState(0);
    const [lengthTodays, setLengthTodays] = useState(0);
    useEffect(()=>{
        $(".hm-pc-flex").show();
        LinkClick("Detail");
        if ($(".seller-flex").height() != null) setHeight(Number($(".seller-flex").height()));

        getAxios(setData, setLengthTodays, "cakes", [], 8, pageTodays, 0);
    },[]);

    return(
        <>
        <div className="detail-flex">
            <div className="detail">
                <div className="detail-top">
                    <div className="detail-top-img">
                        {/* <img src={DetailAd} /> */}
                    </div>
                    <div className="detail-top-box">
                        <div className="detail-store-name">원모먼트</div>
                        <div className="detail-store-ad">연리단길 지역 판매량 1위!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</div>
                        <div className="detail-store-address">서울시 용산구 이태원로 111-11ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</div>
                        <div className="detail-store-content-box">
                            <div className="detail-store-content">#특별한날</div>
                            <div className="detail-store-content">#기념일</div>
                            <div className="detail-store-content">#유니크한</div>
                            <div className="detail-store-content">#커스텀</div>
                            <div className="detail-store-content">#우히힛ㅎ</div>
                            <div className="detail-store-content">#기념일</div>
                            <div className="detail-store-content">#유니크한</div>
                            <div className="detail-store-content">#커스텀</div>
                        </div>
                        <div className="detail-store-button-box">
                            <button className="detail-store-button" style={{ float: "left", }}>
                                <img src={TestImg} />
                                99
                            </button>
                            <button className="detail-store-button" style={{ float: "right", }}>
                                <img src={TestImg} />
                                공유하기
                            </button>
                        </div>
                        <button className="detail-store-button-bottom">주문하기</button>
                    </div>
                </div>
                <img src={DetailAd} className="detail-ad" />

                <div className="detail-contents">
                    <div className="contents">
                        <LengthwiseCard getData={data} link="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pc" style={{width: "5px", height: (2100-height),}}></div>
        </>
    )
}


export default Detail;