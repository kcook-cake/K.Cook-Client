import React from 'react';
import '../../../styles/card/mypage/MPRCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../assets/cake6.png';

interface Props {
    getData: any
}

function MPRCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="mprcard">
                        <div className="mprcard-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="mprcard-info">
                            <div className="mprcard-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="mprcard-option">
                                2021. 03. 11  14:00  1호  29,000원
                            </div>
                            {true? 
                                <button
                                    className="mprcard-button-left mprcard-button"
                                    onClick={()=>{}}>
                                    미작성
                                    <span className="pc"> (+적립금 500원)</span>
                                </button>:
                                <button
                                    className="mprcard-button-right mprcard-button" 
                                    disabled>
                                    작성완료

                                </button>
                            }
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MPRCard;