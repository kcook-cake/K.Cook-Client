import React from 'react';
import 'src/styles/main/card/WidthwiseCard.scss';
import 'src/styles/main/card/LengthwiseCard.scss';

import star from 'src/utils/star';


interface LengthwiseCardProps {
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
}

function WidthwiseCard({ getData }: LengthwiseCardProps) { 
    return (
        <>
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
    })=>{
        return (
        <div className="widthwise-card" key={data.productId}>
            <div className="widthwise-card-img-flex">
                {data.image === null?
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