import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/common/cake-store/StoreCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    cakeDetail: any,
}

function StoreCard({getData, cakeDetail}: Props) {
    return (
        <>
            {getData.map((data: { 
                image: any,
                accountName: any,
                address: any,
                area: any,
                contact: any,
                name: any,
                status: any,
                storeId: any,
             }, idx: any)=>{
                return (
                    <Link className="cake-store-card-" to={"/Store/0"}>
                        <div className="storecard-flex" key={data.storeId}>
                            <div className="storecard">
                                <div className="storecard-img-flex">
                                    {data.image == null?
                                        <div className="storecard-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} className="storecard-img"/>
                                    }
                                </div>
                                <div className="storecard-info">
                                    <div className="card-top">{data.accountName}</div>
                                    <div className="card-title">{data.name}</div>
                                    <div className="card-location">{data.address}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                })
            }
        </>
    );
}

export default StoreCard;