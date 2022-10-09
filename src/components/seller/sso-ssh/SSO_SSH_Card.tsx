import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import '../../../styles/seller/sso-ssh/SSO_SSH_Card.scss';

import rightArrow from "../../../assets/right-arrow.svg";
import cake6 from   '../../../assets/cake6.png';
import MakePrice from 'src/utils/MakePrice';

interface Props {
    getData: any,
    dateTF: boolean,
}

function SSO_SSH_Card ({ getData, dateTF }: Props) {
    useEffect(()=>{
    },[]);

    return (
        <>
            {Object.keys(getData).map((key: string, idx: number, )=>
                (
                    <div key={idx}>
                        <div className={classNames("sso-ssh-card-date", {'mobile': dateTF})}>{key}</div>
                        {getData[key].map((data: { image1: string, name: string, price: any, saleTime: string, saleDate: string, optionsList: any[], }, idx2: number, )=>{
                            return (
                                <div key={idx2} className="sso-ssh-card">
                                    <div className="pc sso-ssh-card-date">{data.saleTime}</div>
                                    <div className="sso-ssh-card-box">
                                        <div className="pc seller-img-box">
                                            {data.image1 === "" || data.image1 === null || data.image1 === undefined || data.image1.length===103?
                                                <div className="seller-img-none">~준비중 입니다~</div>:
                                                <img src={data.image1} className="seller-img"/>
                                            }
                                            {/* <img src={cake6}/> */}
                                        </div>
                                        <div className="sso-ssh-card-box-inner">
                                            <div className="sso-ssh-card-title">
                                                {data.name}
                                            </div>
                                            <div className="sso-ssh-card-middle" style={{ display: "flex", }}>
                                                {data.optionsList.map((data2: { optionName: string, itemList: any[], }, idx2: number, )=>{
                                                    return (
                                                        <div key={idx2} style={{ display: "flex", }}>
                                                            {data2.optionName}:&nbsp;
                                                            {data2.itemList.map((item: { itemNumber: number, itemName: string, }, idx3: number)=>{
                                                                return (
                                                                    <div key={idx3}>
                                                                        {item.itemName}
                                                                        {(item.itemNumber===data2.itemList.length-1)? null: <>,&nbsp;</>}
                                                                    </div>
                                                                );
                                                            })}
                                                            {(idx2===data.optionsList.length-1)? null: <>,&nbsp;</>}
                                                        </div>
                                                    );
                                                })}
                                                
                                            </div>
                                            <div className="sso-ssh-card-title sso-ssh-card-bottom">
                                                {MakePrice(data.price)+"원"}
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
                    </div>
                )
            )}
        </>
    );
}

export default SSO_SSH_Card;