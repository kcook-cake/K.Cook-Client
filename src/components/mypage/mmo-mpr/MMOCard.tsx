import React from 'react';
import '../../../styles/mypage/card/MMOCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function MMOCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: number, name: string, storeName: string, price: number, raiting: number, image: string, status: string, isCake: boolean, resultPrice: number, salePrice: number, reviewCount: number, }, idx: number)=>{
                return (
                    <div key={idx} className="mmocard">
                        <div className="mypage-img-box">
                            {data.image === null?
                                <div className="mypage-img-none">~준비중 입니다~</div>:
                                <img src={data.image} className="mypage-img"/>
                            }
                        </div>
                        <div className="mmocard-content">
                            <div className="mmocard-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="mmocard-cake-shop">원모먼트</div>
                            <div className="mmocard-option">
                                옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                <div className="mmocard-time">21.02.15 17:00</div>
                            </div>
                            <div className="mmocard-price">17,000원</div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MMOCard;