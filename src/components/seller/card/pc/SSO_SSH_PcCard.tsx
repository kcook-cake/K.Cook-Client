import React from 'react';
import '../../../../styles/card/seller/SSO_SSH_PcCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../../assets/cake6.png';

interface Props {
    getData: any
}

function SSO_SSH_PcCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="sso-ssh-pc-card-flex">
                        <div className="order-time">오늘 15:00</div>
                        <div className="sso-ssh-content">
                            <div className="ss-all-order-img">
                                <img src={cake6}/>
                            </div>    
                            <div className="order-content">
                                <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                                <div className="order-cake-shop">정예빈 | 추가문의없음</div>
                                <div className="order-option">
                                    옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                    <div className="pickup-time">주문시간 21.08.09 17:00  픽업 예정시간 21.08.11 15:00</div>
                                </div>
                                <div className="order-price">17,000원
                                    <span className="pay">카드결제 완료</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SSO_SSH_PcCard;