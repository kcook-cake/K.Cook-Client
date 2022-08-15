import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/card/main/CakeCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    cakeDetail: any,
    link: string,
}

function CakeCard({getData, cakeDetail, link}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, }, idx: any)=>{
                return (
                    // <Link to={"/"+link+"/"+data.productId}>
                    <Link className={"cake-store-card-"+((idx > 7)&&cakeDetail? "dummy": "")} to={"/"+link+"/0"}>
                        <div className="cakecard-flex" key={data.productId}>
                            <div className="cakecard">
                                <div className="cakecard-img-flex">
                                    {data.thumbnail == ""?
                                        <div className="cakecard-img-none">~준비중 입니다~</div>:
                                        <img src={data.thumbnail} className="cakecard-img"/>
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
                    </Link>
                )
                })
            }
        </>
    );
}

export default CakeCard;