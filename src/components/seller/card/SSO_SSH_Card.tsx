import React, { useState, useEffect } from 'react';
import '../../../styles/card/seller/SSO_SSH_Card.scss';

import rightArrow from "../../../assets/right-arrow.svg";

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
                        <div className={"sso-mobile-card-date sso-mobile-card-date-"+index}>{key}</div>
                        {data[key].map((data: { })=>{
                            // <Link to="/Detail/0">
                            //     <div className="sso-ssh-pc-card-flex">
                            //         <div className="order-time">오늘 15:00</div>
                            //         <div className="sso-ssh-content">
                            //             <div className="ss-all-img">
                            //                 <img src={cake6}/>
                            //             </div>
                            //             <div className="order-content" style={{ width: "562px"}}>
                            //                 <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                            //                 <div className="order-cake-shop">정예빈 | 추가문의없음</div>
                            //                 <div className="order-option">
                            //                     옵션1. 사이즈 : 1호&nbsp;&nbsp;&nbsp;
                            //                     옵션2. 맛 : 생크림&nbsp;&nbsp;&nbsp;
                            //                     옵션3. 맛 : 인절미&nbsp;&nbsp;&nbsp;
                            //                     옵션4. 하판레터링 : 선택안함&nbsp;&nbsp;&nbsp;
                            //                     옵션5. 초 : 꼬불꼬불초&nbsp;&nbsp;&nbsp;
                            //                     <div className="pickup-time">주문시간 21.08.09 17:00  픽업 예정시간 21.08.11 15:00</div>
                            //                 </div>
                            //                 <div className="order-price">17,000원
                            //                     <span className="pay">카드결제 완료</span>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </Link>
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

export default SSO_SSH_Card;