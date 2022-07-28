import React from 'react';
import '../../../../styles/card/mypage/MPR_PcCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function MPR_PcCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="review-content">
                        <div className="review-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="review-info">
                            <div className="review-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="review-option">
                            2021. 03. 11  14:00  1호  29,000원
                            </div>
                            <button className="review-button">후기 작성하기 <span>( +적립금 500원)</span></button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MPR_PcCard;