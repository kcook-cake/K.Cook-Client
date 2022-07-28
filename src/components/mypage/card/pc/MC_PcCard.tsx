import React from 'react';
import '../../../../styles/card/mypage/MC_PcCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function MC_PcCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="coupon-card">
                        <h3 className="coupon-price">30000원</h3>
                        <p className="coupon-name">오늘만 반값, 여름 특별 할인 쿠폰</p>
                        <div className="coupon-bottom">
                            <div className="coupon-duedate">D-5</div>
                            <button className="using-coupon">사용하러 가기 &gt;</button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MC_PcCard;