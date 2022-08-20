import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card/detail/StoreDetailCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import MakePrice from 'src/utils/MakePrice';


interface Props {
    getData: any,
    resize: number,
    slidePx: number,
}

function StoreDetailCard({getData, resize, slidePx, }: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any, )=>{
                return (
                    <Link to="/Cake/0">
                        <li
                            className="store-detail-card-flex"
                            style={{
                                top: idx%2==0||resize<=767 ? 0: 500,
                                left: resize<=767? (345*idx): idx%2==0? (150*idx+10) : (150*(idx-1)+10),
                                transform: `translateX(${slidePx}px)`,
                                transition: "0.5s ease",
                            }}
                            >
                            <div className="store-detail-card">
                                <div className="store-detail-card-img-flex">
                                    {data.image == null?
                                        <div className="store-detail-card-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} className="store-detail-card-img"/>
                                    }
                                </div>
                                <div className="store-detail-card-info">
                                    <div className="card-top-info">
                                        <div className="card-rating-star">{star(data.raiting)}</div>
                                        <div className="card-review">{"리뷰 "+data.reviewCount}</div>
                                    </div>
                                    <div className="card-shop-name">{data.storeName}</div>
                                    <div className="card-cake-name">{data.name}</div>
                                    <div className="card-minprice">{MakePrice(data.price)}</div>
                                </div>
                            </div>
                        </li>
                    </Link>
                );
            })}
        </>
    );
}

export default StoreDetailCard;