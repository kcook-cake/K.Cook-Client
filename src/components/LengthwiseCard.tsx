import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LengthwiseCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    link: string,
}

function LengthwiseCard({getData, link}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    // <Link to={"/"+link+"/"+data.productId}>
                    <Link to={"/"+link+"/0"}>
                        <div className="lengthwise-flex" key={data.productId}>
                            <div className="lengthwise">
                                <div className="lengthwise-img-flex">
                                    {data.thumbnail == ""?
                                        <div className="lengthwise-img-none">~준비중 입니다~</div>:
                                        <img src={data.thumbnail} className="lengthwise-img"/>
                                    }
                                </div>
                                <div className="lengthwise-info">
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
                    </Link>
                )
                })
            }
        </>
    );
}

export default LengthwiseCard;