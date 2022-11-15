import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/common/cake-store/StoreCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import kcook from 'src/utils/kcook';


interface Props {
    getData: {
        storeId: number,
        image1: string,
        name: string,
        intro: string,
        address: string,
    }[],
}

function StoreCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { 
                storeId: number,
                image1: string,
                name: string,
                intro: string,
                address: string,
             }, idx: number)=>{
                return (
                    <Link key={idx} className="cake-store-card" to={kcook() + "/Store/"+data.storeId}>
                        <div className="storecard-flex">
                            <div className="storecard">
                                <div className="storecard-img">
                                    <div className="storecard-img-inner">
                                        {data.image1===null || data.image1===undefined || data.image1==="" || data.image1.length===133?
                                            <div className="storecard-img-none">~준비중 입니다~</div>:
                                            <img src={data.image1} className="storecard-img"/>
                                        }
                                    </div>
                                </div>
                                <div className="storecard-info">
                                    <div className="card-top">{data.name}</div>
                                    <div className="card-title">{data.intro}</div>
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