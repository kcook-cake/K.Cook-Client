import React from 'react';
import '../../../styles/card/MMMCard.scss';

interface MPRMCardProps {
    getData: any,
    box: any,
}

function MMMCard({getData, box}: MPRMCardProps) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <>
                    {box?
                    <div className="mmmcard"  key={data.productId}>
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
                    </div>: 
                    <div className="mcmcard"  key={data.productId}>
                        <div className="mcmcard-box">
                            <div className="mcmcard-title">
                                30,000원
                                <div className="mcmcard-top">
                                    {true? 
                                        <div style={{ color: "#ea5450", }}>D-Day</div>: 
                                        <div>D-5</div>
                                    }
                                </div>
                            </div>
                            <div className="mcmcard-content">
                                <div className="mcmcard-date">
                                    <div className="mcmcard-bottom">
                                        오늘만 반값, 여름 특별 할인 쿠폰
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    }
                    </>
                )
                })
            }
        </>
    );
}

export default MMMCard;