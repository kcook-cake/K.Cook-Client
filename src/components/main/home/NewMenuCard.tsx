import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/card/main/NewMenuCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import MakePrice from 'src/utils/MakePrice';


interface Props {
    getData: any,
    resize: number,
    slidePx: number,
}

function NewMenuCard({getData, resize, slidePx, }: Props) {
    return (
        <Link to="/Cake/0">
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any, )=>{
                return (
                    <>
                        <li
                            className="newmenucard"
                            style={{
                                top: idx%2==0||resize<=767 ? 0: 200,
                                left: resize<=767? (345*idx): idx%2==0? (299.8*idx+10) : (299.8*(idx-1)+10),
                                transform: `translateX(${slidePx}px)`,
                                transition: "0.5s ease",
                            }}
                            >
                            <div className="newmenucard-card" key={data.productId}>
                                <div className="newmenucard-card-img-flex">
                                    {data.image == null?
                                        <div className="newmenucard-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} />
                                    }
                                </div>
                                <div className="newmenucard-card-info">
                                    <div className="card-rating-star">
                                        {star(data.raiting)}
                                    </div>
                                    <div className="card-shop-name">
                                        {data.storeName}
                                        <div className="newmenucard-mobile card-review">
                                            {"리뷰 "+data.reviewCount}
                                        </div>
                                    </div>
                                    <div className="card-cake-name">
                                        {data.name}
                                    </div>
                                    <div className="card-minprice">
                                        {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~"}
                                    </div>
                                    <div className="newmenucard-pc card-review">
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

export default NewMenuCard;