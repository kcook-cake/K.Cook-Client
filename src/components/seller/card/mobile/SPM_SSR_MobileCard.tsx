import React, { useState, useEffect } from 'react';
import '../../../../styles/card/seller/SPM_SSR_MobileCard.scss';

import rightArrow from "../../../assets/right-arrow.svg";
import { ReactComponent as DragBtn } from '../../../../assets/seller/dragbtn.svg';

interface Props {
    getData: any,
    box: any,
}

type userType = {
    [key: string]: any;
}

function SPM_SSR_MobileCard({getData, box}: Props) {
    const [data, setData] = useState<userType>({});
    useEffect(()=>{
        var updateData: userType = {};
        for (var i = 0; i < getData.length; i++) {
            updateData[getData[i].date] = [];
        }
        getData.forEach((d: any, ) => {
            updateData[d.date][updateData[d.date].length] = d;
            setData(updateData);
        })
    },[]);

    return (
        <>
            {box? 
                <>
                    <div className="sprmcard-date"></div>
                    {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                    return (
                        <div className="sprmcard"  key={data.productId}>
                            <div className="sprmcard-box">
                                <div className="spm-mobile-add-move-tap"><DragBtn/></div>
                                <div className="sprmcard-box-margin">
                                    <div className="sprmcard-box-inner">
                                        <div className="sprmcard-title">
                                            <div className="sprmcard-title-title">하트볼터치 곰돌이 케이크</div>
                                            <div className="sprmcard-title-content">호수: 1호, 2호, 3호, 4호</div>
                                            <div className="sprmcard-title-content">맛: 생크림, 스트로베리, 고구마</div>
                                        </div>
                                    </div>
                                    <div className="sprmcard-img">
                                        <img src={data.thumbnail}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })
                    }
                </>
                :
                <>
                {Object.keys(data).map((key: string, index: number, )=>
                    (
                        <>
                            <div className={"spm-mobile-card-date spm-mobile-card-date-"+index}>{key}</div>
                            {data[key].map((data: { thumbnail: any, })=>{
                                return (
                                    <div className="ssrmcard">
                                        <div className="ssrmcard-box">
                                            <div className="ssrmcard-box-inner">
                                                <div className="ssrmcard-title">
                                                    <div className="ssrmcard-title-title">하트볼터치 곰돌이 케이크</div>
                                                    <div className="ssrmcard-title-date">픽업 8/8 15:00</div>
                                                </div>
                                                <div className="ssrmcard-content">기</div>
                                                {/* <div className="ssrmcard-content">기대했던 것 이상으로 맛있어서 깜짝 놀랐습니다!! 디자인도 너무 귀엽네요^^</div> */}
                                            </div>
                                            <div className="ssrmcard-img">
                                                <img src={data.thumbnail}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </>
                    )
                )
                }
            </>
            }
        </>
    );
}

export default SPM_SSR_MobileCard;