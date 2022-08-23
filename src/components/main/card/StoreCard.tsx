import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/main/card/StoreCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    cakeDetail: any,
}

function StoreCard({getData, cakeDetail}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any)=>{
                return (
                    <Link className={"cake-store-card-"+((idx > 5)&&cakeDetail? "dummy": "")} to={"/Store/0"}>
                        <div className="storecard-flex" key={data.productId}>
                            <div className="storecard">
                                <div className="storecard-img-flex">
                                    {data.image == null?
                                        <div className="storecard-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} className="storecard-img"/>
                                    }
                                </div>
                                <div className="storecard-info">
                                    <div className="card-top-info">원모먼트</div>
                                    <div className="card-shop-name">{data.storeName}</div>
                                    <div className="card-cake-name">{data.name}</div>
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