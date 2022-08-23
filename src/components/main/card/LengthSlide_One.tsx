import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/main/card/LengthSlide.scss';

import star from 'src/utils/star';

import MakePrice from 'src/utils/MakePrice';


interface Props {
    getData: any,
    resize: number,
    slidePx: number,
}

function LengthSlide_One({ getData, resize, slidePx, }: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any, )=>{
                return (
                    <Link to="/Cake/0">
                        <li
                            className="lengthslide-flex"
                            style={{
                                left: resize<=767? ((176)*idx) : (300*idx+10),
                                transform: `translateX(${slidePx}px)`,
                                transition: "0.5s ease",
                            }}
                            >
                            <div className="lengthslide">
                                <div className="lengthslide-img-flex">
                                    {data.image == null?
                                        <div className="lengthslide-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} className="lengthslide-img"/>
                                    }
                                </div>
                                <div className="lengthslide-info">
                                    <div className="card-top-info">
                                        <div className="card-rating-star">{star(data.raiting, "")}</div>
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

export default LengthSlide_One;