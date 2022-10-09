import React from 'react';
import '../../../styles/mypage/card/MPRCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import cake6 from   '../../../assets/cake6.png';
import MakePrice from 'src/utils/MakePrice';

interface Props {
    getData: {
        image1: string, 
        name: string, 
        price: number, 
        saleTime: string, 
        saleDate: string, 
        star: number,
        keywordsList: string[],
    }[]
}

function MPRCard({getData}: Props) {
    return (
        <>
            {getData.map((data: {         
                image1: string, 
                name: string, 
                price: number, 
                saleTime: string, 
                saleDate: string, 
                star: number,
                keywordsList: string[], }, idx: number)=>{
                return (
                    <div key={idx} className="mprcard">
                        <div className="mprcard-img-box">
                            {data.image1 === "" || data.image1 === null || data.image1 === undefined || data.image1.length === 133?
                                <div className="mprcard-img-none">~준비중~</div>:
                                <img src={data.image1} className="mprcard-img"/>
                            }
                        </div>
                        <div className="mprcard-info">
                            <div className="mprcard-cake">{data.name}</div>
                            <div className="mprcard-option">
                                {data.saleDate+" "+MakePrice(data.price)+"원"}
                            </div>
                            {data.star === 0? 
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