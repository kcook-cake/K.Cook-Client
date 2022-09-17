import React, { useState, useEffect } from 'react';
import '../../../styles/seller/sso-ssh/SSO_SSH_Card.scss';

import rightArrow from "../../../assets/right-arrow.svg";
import cake6 from   '../../../assets/cake6.png';

interface Props {
    getData: any
}

type userType = {
    [key: string]: any;
}

function SSO_SSH_Card ({getData}: Props) {
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
                        <div className={"mobile sso-ssh-card-date sso-ssh-card-date-"+index}>{key}</div>
                        {data[key].map((data: { image: any, })=>{
                            return (
                                <div className="sso-ssh-card">
                                    <div className="pc sso-ssh-card-date">오늘 15:00</div>
                                    <div className="sso-ssh-card-box">
                                        <div className="pc seller-img-box">
                                            {data.image === ""?
                                                <div className="seller-img-none">~준비중 입니다~</div>:
                                                <img src={data.image} className="seller-img"/>
                                            }
                                            {/* <img src={cake6}/> */}
                                        </div>
                                        <div className="sso-ssh-card-box-inner">
                                            <div className="sso-ssh-card-title">
                                                하트볼터치 곰돌이 케이크
                                            </div>
                                            <div className="sso-ssh-card-middle">
                                                픽업예정 15:00
                                            </div>
                                            <div className="sso-ssh-card-title sso-ssh-card-bottom">
                                                19,900원
                                            </div>
                                        </div>
                                        <div className="mobile sso-ssh-card-arrow">
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

export default SSO_SSH_Card;