import React from 'react';
import '../../../styles/card/mypage/MCCard.scss';

interface Props {
    getData: any
}

function MCCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="coupon-card">
                        <div className="coupon-price">                        
                            <div className="coupon-top">
                                30,000원
                                {true?
                                    <div className="mobile coupon-top-inner" style={{ color: "#ea5450", }}>D-Day</div>: 
                                    <div className="mobile coupon-top-inner">D-5</div>
                                }
                            </div>
                        </div>
                        <p className="coupon-name">오늘만 반값, 여름 특별 할인 쿠폰</p>
                        <div className="coupon-bottom">
                            {true?
                                <div className="pc coupon-duedate" style={{ color: "#ea5450", }}>D-Day</div>: 
                                <div className="pc coupon-duedate">D-5</div>
                            }
                            <button className="pc using-coupon">사용하러 가기 &gt;</button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MCCard;