import React, { useState, useEffect } from 'react';
import '../../../../styles/card/seller/SSO_SSH_MobileCard.scss';

import rightArrow from "../../../../assets/right-arrow.svg";
import { Dictionary } from '@fullcalendar/react';

interface Props {
    getData: any
}

type userType = {
    [key: string]: any;
}

function SSO_SSH_MobileCard ({getData}: Props) {
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
                        <div className={"sso-mobile-card-date sso-mobile-card-date-"+index}>{key}</div>
                        {data[key].map((data: { })=>{
                            return (
                                <div className="sso-mobile-card">
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
                )
            )
            }
        </>
    );
}

export default SSO_SSH_MobileCard;