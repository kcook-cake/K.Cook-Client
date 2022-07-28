import React from 'react';
import '../../../../styles/card/mypage/MPR_MobileCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any
}

function MPR_MobileCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="mprmcard"  key={data.productId}>
                        <div className="mprmcard-box">
                            <div style={{ display: "flex", }}>
                                <div><img src={data.thumbnail} /></div>
                                <div className="mprmcard-context">
                                    <div className="mprmcard-name">
                                        {data.name}
                                    </div>
                                    <div className="mprmcard-date">
                                        2021.03.11 14:00 1호 29,000원
                                    </div>
                                    {true? 
                                        <button
                                            style={{ color: "#ea5450", }}
                                            className="mprmcard-button"
                                            onClick={()=>{}}
                                        >
                                            미작성
                                        </button>: 
                                        <button style={{ color: "#333333", }} className="mprmcard-button" disabled>
                                            작성완료
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="vertical-card">
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
                        </div> */}
                    </div>
                )
                })
            }
        </>
    );
}

export default MPR_MobileCard;