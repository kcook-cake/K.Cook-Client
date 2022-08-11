import React, { useState, useEffect } from 'react';
import '../../../../styles/card/seller/SSR_MobileCard.scss';

import rightArrow from "../../../assets/right-arrow.svg";
import { ReactComponent as DragBtn } from '../../../../assets/seller/dragbtn.svg';

interface Props {
    getData: any,
}

type userType = {
    [key: string]: any;
}

function SSR_MobileCard({getData, }: Props) {
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
    );
}

export default SSR_MobileCard;