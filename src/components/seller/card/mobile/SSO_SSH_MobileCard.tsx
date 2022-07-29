import React from 'react';
import '../../../../styles/card/seller/SSO_SSH_MobileCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";

interface Props {
    getData: any
}

function SSO_SSH_MobileCard({getData}: Props) {
    return (
        <>
            <div className="sso-mobile-card-date">어제</div>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="sso-mobile-card"  key={data.productId}>
                        <div className="sso-mobile-card-box">
                            <div className="sso-mobile-card-box-inner">
                                <div className="sso-mobile-card-title">
                                    하트볼터치 곰돌이 케이크
                                </div>
                                <div className="sso-mobile-card-title-date">
                                    픽업예정 15:00
                                </div>
                                <div className="sso-mobile-card-title">
                                    19,900원
                                </div>
                            </div>
                            <div className="sso-mobile-card-arrow">
                                <img src={rightArrow}/>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SSO_SSH_MobileCard;