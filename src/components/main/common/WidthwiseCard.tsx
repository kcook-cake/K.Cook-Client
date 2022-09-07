import React from 'react';
import 'src/styles/main/card/WidthwiseCard.scss';
import 'src/styles/main/card/LengthwiseCard.scss';

import star from 'src/utils/star';


interface LengthwiseCardProps {
    getData: any
    // img? : string,
    // star? : number,
    // shop : string,
    // cakename : string ,
    // minprice : number
    // review? : number,
}

function WidthwiseCard({ getData }: LengthwiseCardProps) { 
    return (
        <>
    {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
        return (
        <div className="widthwise-card" key={data.productId}>
            <div className="widthwise-card-img-flex">
                {data.image == null?
                    <div className="widthwise-img-none">~준비중 입니다~</div>:
                    <img src={data.image} />
                }
            </div>
            <div className="widthwise-card-info">
                <div className="card-rating-star">
                    {star(data.raiting, "")}
                </div>
                <div className="card-shop-name">
                    {data.storeName}
                    <div className="mobile card-review">
                        {"리뷰 "+data.reviewCount}
                    </div>
                </div>
                <div className="card-cake-name">
                    {data.name}
                </div>
                <div className="card-minprice">
                    {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~"}
                </div>
                <div className="pc card-review">
                    {"리뷰 "+data.reviewCount}
                </div>
            </div>
        </div>
        );
        })
    }
    </>
    );
}

export default WidthwiseCard;