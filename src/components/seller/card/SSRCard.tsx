import React, { useState, useEffect } from 'react';
import '../../../styles/seller/card/SSRCard.scss';

import rightArrow from "../../../assets/right-arrow.svg";
import { ReactComponent as DragBtn } from '../../../../assets/seller/dragbtn.svg';
import cake6 from   '../../../assets/cake6.png';

interface Props {
    getData: any,
}

type userType = {
    [key: string]: any;
}

function SSRCard({ getData, }: Props) {
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
                        <div className={"mobile spm-ssr-date spm-ssr-date-"+index}>{key}</div>
                        {data[key].map((data: { image: any, })=>{
                            return (
                                <div className="ssrcard">
                                    <div className="pc ssrcard-time">오늘 15:00</div>
                                    <div className="ssrcard-box">
                                        <div className="seller-img-box ssrcard-img">
                                            {data.image == ""?
                                                <div className="seller-img-none">~준비중~</div>:
                                                <img src={data.image} className="seller-img"/>
                                            }
                                        </div>
                                        <div className="ssrcard-box-inner">
                                            <div className="ssrcard-title">
                                                <div className="ssrcard-title-front">하트볼터치 곰돌이 케이크</div>
                                                <div className="mobile ssrcard-title-date">픽업 8/8 15:00</div>
                                            </div>
                                            <div className="ssrcard-content">기</div>
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

export default SSRCard;