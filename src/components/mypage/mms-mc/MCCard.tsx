import React from 'react';
import '../../../styles/mypage/card/MCCard.scss';

interface Props {
    getData: any
}

function MCCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: number, name: string, storeName: string, price: number, raiting: number, image: string, status: string, isCake: boolean, resultPrice: number, salePrice: number, reviewCount: number, }, idx: number)=>{
                return (
                    <div key={idx} className="mccard">
                        <div className="mccard-top">                        
                            30,000원
                            {true?
                                <div className="mccard-top-day" style={{ color: "#ea5450", }}>D-Day</div>: 
                                <div className="mccard-top-day">D-5</div>
                            }
                        </div>
                        <p className="mccard-middle">오늘만 반값, 여름 특별 할인 쿠폰</p>
                        <div className="pc mccard-bottom">
                            {/* {true?
                                <div className="mccard-bottom-day" style={{ color: "#ea5450", }}>D-Day</div>: 
                                <div className="mccard-bottom-day">D-5</div>
                            } */}
                            <button className="mccard-using">사용하러 가기 &gt;</button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MCCard;