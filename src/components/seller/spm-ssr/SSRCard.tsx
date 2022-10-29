import React, { useState, useEffect } from 'react';
import 'src/styles/seller/spm-ssr/SSRCard.scss';

interface Props {
    getData: {
        image: string,
        date: string,
    }[],
}

type userType = {
    [key: string]: any;
}

function SSRCard({ getData, }: Props) {
    const [data, setData] = useState<userType>({});
    useEffect(()=>{
        let updateData: userType = {};
        for (let i = 0; i < getData.length; i++) {
            updateData[getData[i].date] = [];
        }
        getData.forEach((d: userType, ) => {
            updateData[d.date][updateData[d.date].length] = d;
            setData(updateData);
        })
    },[]);

    return (
        <>
            {Object.keys(data).map((key: string, idx: number, )=>
                (
                    <div key={idx}>
                        <div className={"mobile spm-ssr-date spm-ssr-date-"+idx}>{key}</div>
                        {data[key].map((data: { image: string, date: string }, idx2: number, )=>{
                            return (
                                <div key={idx2} className="ssrcard">
                                    <div className="pc ssrcard-time">오늘 15:00</div>
                                    <div className="ssrcard-box">
                                        <div className="seller-img-box ssrcard-img">
                                            {data.image === null || data.image === undefined || data.image === "" || data.image.length === 133?
                                                <div className="seller-img-none">~준비중~</div>:
                                                <img src={data.image} className="seller-img"/>
                                            }
                                        </div>
                                        <div className="ssrcard-box-inner">
                                            <div className="ssrcard-title">
                                                <div className="ssrcard-title-front">하트볼터치 곰돌이 케이크</div>
                                                <div className="mobile ssrcard-title-date">픽업 8/8 15:00</div>
                                            </div>
                                            <div className="ssrcard-content">기</div>
                                        </div>

                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                )
            )
            }
        </>
    );
}

export default SSRCard;