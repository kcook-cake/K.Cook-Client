import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/card/main/PopularCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import MakePrice from 'src/utils/MakePrice';


interface Props {
    getData: any,
    resize: number,
    slidePx: number,
}

function PopularCard({getData, resize, slidePx, }: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any, )=>{
                return (
                    <>
                        <li
                            className="popularcard-flex"
                            style={{
                                left: resize<=767? ((176)*idx) : (300*idx+10),
                                transform: `translateX(${slidePx}px)`,
                                transition: "0.5s ease",
                            }}
                            >
                            <div className="popularcard">
                                <div className="popularcard-img-flex">
                                    {data.thumbnail == ""?
                                        <div className="popularcard-img-none">~준비중 입니다~</div>:
                                        <img src={data.thumbnail} className="popularcard-img"/>
                                    }
                                </div>
                                <div className="popularcard-info">
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
                    </>
                );
            })}
        </>
    );
}

export default PopularCard;