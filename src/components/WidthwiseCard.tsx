import React from 'react';
import '../styles/WidthwiseCard.scss';
import '../styles/LengthwiseCard.scss';

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
    {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
        return (
        <div className="widthwise-card" key={data.productId}>
            <div className="widthwise-card-img">
                <img src={data.thumbnail} alt="cake-image" width={263.2} height={154.4} />
            </div>
            <div className="widthwise-card-info">
                <div className="card-rating-star">
                    {star(data.raiting)}
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
                <div className="card-review">
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