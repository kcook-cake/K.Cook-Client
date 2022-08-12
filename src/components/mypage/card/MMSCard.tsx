import React from 'react';
import '../../../styles/card/mypage/MMSCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function MMSCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <>
                    <div className="pc mms-pc-all mms-pc-card">
                        <div></div>
                        <div>하트볼터치 곰돌이 케이크</div>
                        <div>원모먼트</div>
                        <div>2021. 03. 11</div>
                        <div>29,000</div>
                        <div>2,900원</div>
                    </div>

                    <div className="mobile mmmcard"  key={data.productId}>
                        <div className="mmmcard-box">
                            <div className="mmmcard-title">
                                하트볼터치 곰돌이 케이크
                            </div>
                            <div className="mmmcard-content">
                                <div className="mmmcard-date">
                                    2021.03.11 | 29,000원
                                    <div className="mmmcard-price">
                                        +2,900원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
                })
            }
        </>
    );
}

export default MMSCard;