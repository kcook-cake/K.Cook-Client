import React from 'react';
import '../../../../styles/card/seller/SSR_PcCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function SSR_PcCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                <div className="ssr-pc-card-flex">
                    <div className="order-time">오늘 15:00</div>
                    <div className="ssr-content">
                        <div className="ss-all-order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content">
                            <h3 className="ordered-cake">상품명 : 하트볼터치 곰돌이 케이크</h3>
                            <p className="review-content">기대했던 것 이상으로 맛있어서 깜짝 놀랐습니다!!<br/>디자인도 너무 귀엽네요^^</p>
                        </div>
                    </div>
                </div>
                )
                })
            }
        </>
    );
}

export default SSR_PcCard;