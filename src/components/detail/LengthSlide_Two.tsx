import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main/card/LengthSlide.scss';

import star from 'src/utils/star';

import MakePrice from 'src/utils/MakePrice';


interface Props {
    getData: any,
    resize: number,
    slidePx: number,
}

function LengthSlide_Two({getData, resize, slidePx, }: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any, )=>{
                return (
                    <Link to="/Cake/0">
                        <li
                            className="lengthslide-flex"
                            style={{
                                top: idx%2==0||resize<=767 ? 0: 500,
                                left: resize<=767? (170*idx): idx%2==0? (150*idx+10) : (150*(idx-1)+10),
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
                                        원모먼트
                                        <div className="card-review">{"리뷰 "+data.reviewCount}</div>
                                    </div>
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

export default LengthSlide_Two;