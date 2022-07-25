import React from 'react';
import '../../../styles/card/SSRMCard.scss';

import rightArrow from "../../../assets/right-arrow.svg";

interface SSRMCardProps {
    getData: any
}

function SSRMCard({getData}: SSRMCardProps) {
    return (
        <>
            <div className="ssrmcard-date">어제</div>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="ssrmcard"  key={data.productId}>
                        <div className="ssrmcard-box">
                            <div className="ssrmcard-box-inner">
                                <div className="ssrmcard-title">
                                    <div className="ssrmcard-title-title">하트볼터치 곰돌이 케이크</div>
                                    <div className="ssrmcard-title-date">픽업 8/8 15:00</div>
                                </div>
                                <div className="ssrmcard-content">기대했던 것 이상으로 맛있어서 깜짝 놀랐습니다!! 디자인도 너무 귀엽네요^^</div>
                            </div>
                            <div className="ssrmcard-img">
                                <img src={data.thumbnail}/>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SSRMCard;