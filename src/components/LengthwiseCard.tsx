import React from 'react';
import '../styles/LengthwiseCard.scss';
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';
import emptystar from '../assets/empty-star.svg';
import fillstar from '../assets/fill-star.svg';


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
    console.log(getData);
    return (
        <div className="container">
            {getData.map((data: { name: any,id:any,userName:any})=>{
                return (
                    <div className="container"  key={data.id}>
                        <div className="vertical-card">
                                <img src={cake1}  alt="cake-image" className="vertical-card-img"/>
                                <div className="vertical-card-info">
                                    <div className="card-top-info">
                                        <div className="card-rating-star">
                                            <img src={fillstar} alt="lating-star" />
                                            <img src={fillstar} alt="lating-star" />
                                            <img src={fillstar} alt="lating-star" />
                                            <img src={emptystar} alt="lating-star" />
                                            <img src={emptystar} alt="lating-star" />
                                        </div>
                                    <div className="card-review">
                                        리뷰 27
                                    </div>
                                </div>
                                <div className="card-shop-name">
                                    {/* {shop} */}
                                    {data.name}
                                </div>
                                <div className="card-cake-name">
                                    {/* {cakename} */}
                                    {data.userName}
                                </div>
                                <div className="card-minprice">
                                    {/* {minprice+"~"} */}
                                    {data.id+"~"}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
    );
}

export default LengthwiseCard;