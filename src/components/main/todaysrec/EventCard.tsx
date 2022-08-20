import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/main/todaysrec/EventCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';


interface Props {
    getData: any,
    link: string,
}

function EventCard({getData, link}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, image: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <Link to={"/"+link+"/"+data.productId}>
                        <div className="event-card">
                            <div className="card-img">
                                {data.image == ""?
                                    <div className="event-card-img-none">~준비중 입니다~</div>:
                                    <img src={data.image} alt="cake-image"/>
                                }
                            </div>
                            <h2 className="event-card-title">오늘 종료! 케이쿡 단독 최저가!</h2>
                            <div className="event-date">
                                <span>D-2 </span>
                                07.22 (목) ~ 07.31(토)
                            </div>
                        </div>
                    </Link>
                )
                })
            }
        </>
    );
}

export default EventCard;