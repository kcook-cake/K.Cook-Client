import React from 'react';
import '../styles/LengthwiseCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface LengthwiseCardProps {
    getData: any

    // img? : string,
    // star? : number,
    // review? : number,
    // shop : string,
    // cakename : string ,
    // minprice : number
}

function LengthwiseCard({getData}: LengthwiseCardProps) {


    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                // const star = [false, false, false, false, false];
                // for(var i = 0; i < 5; i++) if(data.raiting >= i && data.raiting != 0) star[i] = true;
                // console.log(star)
                
                return (
                    <div className="container"  key={data.productId}>
                        <div className="vertical-card">
                            <img src={data.thumbnail}  alt="cake-image" className="vertical-card-img" width={279.8} height={304}/>
                            <div className="vertical-card-info">
                                <div className="card-top-info">
                                    <div className="card-rating-star">
                                        {star(data.raiting)}
                                    </div>
                                    <div className="card-review">
                                        {"리뷰 "+data.reviewCount}
                                    </div>
                                </div>
                                <div className="card-shop-name">
                                    {data.storeName}
                                </div>
                                <div className="card-cake-name">
                                    {data.name}
                                </div>
                                <div className="card-minprice">
                                    {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~"}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default LengthwiseCard;