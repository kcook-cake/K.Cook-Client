import React from 'react';
import '../../../styles/mypage/card/MMSCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function MMSCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <>
                    <div className="mms-table-all mms-table-card">
                        <div className="pc"></div>
                        <div className="mmscard-title">하트볼터치 곰돌이 케이크</div>
                        <div className="mmscard-company">원모먼트</div>
                        <div className="pc">2021.03.11</div>
                        <div className="pc">29,000</div>
                        <div className="mobile mmscard-date">
                            2021.03.11 | 29,000원
                        </div>
                        <div className="mmscard-price">+2,900원</div>
                    </div>
                    </>
                )
                })
            }
        </>
    );
}

export default MMSCard;