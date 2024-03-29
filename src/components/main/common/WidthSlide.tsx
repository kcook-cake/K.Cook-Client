import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card/WidthSlide.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import MakePrice from 'src/utils/MakePrice';
import kcook from 'src/utils/kcook';


interface Props {
    getData: {
        productId: number, 
        name: string, 
        storeName: string, 
        price: number, 
        raiting: number, 
        image: string, 
        status: string, 
        isCake: boolean, 
        resultPrice: number, 
        salePrice: number, 
        reviewCount: number, 
    }[],
    resize: number,
    slidePx: number,
}

function WidthSlide({getData, resize, slidePx, }: Props) {
    return (
        <Link to={kcook() + "/Cake/0"}>
            {getData.map((data: { 
                productId: number, 
                name: string, 
                storeName: string, 
                price: number, 
                raiting: number, 
                image: string, 
                status: string, 
                isCake: boolean, 
                resultPrice: number, 
                salePrice: number, 
                reviewCount: number, 
            }, idx: number, )=>{
                return (
                    <>
                        <li
                            className="widthslide"
                            style={{
                                top: idx%2===0||resize<=767 ? 0: 200,
                                left: resize<=767? (345*idx): idx%2===0? (299.8*idx+10) : (299.8*(idx-1)+10),
                                transform: `translateX(${slidePx}px)`,
                                transition: "0.5s ease",
                            }}
                            >
                            <div className="widthslide-card" key={data.productId}>
                                <div className="widthslide-card-img-flex">
                                    {data.image === null?
                                        <div className="widthslide-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} />
                                    }
                                </div>
                                <div className="widthslide-card-info">
                                    <div className="card-rating-star">
                                        {star(data.raiting, "")}
                                    </div>
                                    <div className="card-shop-name">
                                        {data.storeName}
                                        <div className="widthslide-mobile card-review">
                                            {"리뷰 "+data.reviewCount}
                                        </div>
                                    </div>
                                    <div className="card-cake-name">
                                        {data.name}
                                    </div>
                                    <div className="card-minprice">
                                        {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~"}
                                    </div>
                                    <div className="widthslide-pc card-review">
                                        {"리뷰 "+data.reviewCount}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </>
                );
            })}
        </Link>
    );
}

export default WidthSlide;