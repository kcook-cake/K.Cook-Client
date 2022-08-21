import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main/CakeCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    cakeDetail: any,
}

function CakeCard({ getData, cakeDetail, }: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any)=>{
                return (
                    <a className={"cake-store-card-"+((idx > 7)&&cakeDetail? "dummy": "")} href={"/Cake/0"}>
                        <div className="cakecard-flex" key={data.productId}>
                            <div className="cakecard">
                                <div className="cakecard-img-flex">
                                    {data.image == null?
                                        <div className="cakecard-img-none">~준비중 입니다~</div>:
                                        <img src={data.image} className="cakecard-img"/>
                                    }
                                </div>
                                <div className="cakecard-info">
                                    <div className="card-top-info">
                                        <div className="card-rating-star">{star(data.raiting)}</div>
                                        <div className="card-review">{"리뷰 "+data.reviewCount}</div>
                                    </div>
                                    <div className="card-shop-name">{data.storeName}</div>
                                    <div className="card-cake-name">{data.name}</div>
                                    <div className="card-minprice">{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~"}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
                })
            }
        </>
    );
}

export default CakeCard;