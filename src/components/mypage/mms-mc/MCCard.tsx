import React from 'react';
import '../../../styles/mypage/card/MCCard.scss';

interface Props {
    getData: {
        price: number, 
        contents: string, 
        deadLineDate: string,
    }[]
}

function MCCard({ getData }: Props) {
    return (
        <>
            {getData.map((data: { 
                price: number, 
                contents: string, 
                deadLineDate: string, }, idx: number)=>{
                return (
                    <div key={idx} className="mccard">
                        <div className="mccard-top">                        
                            30,000원
                            {new Date().getFullYear() === new Date(data.deadLineDate).getFullYear() &&
                            new Date().getMonth() === new Date(data.deadLineDate).getMonth() &&
                            new Date().getDate() === new Date(data.deadLineDate).getDate()?
                                <div className="mccard-top-day" style={{ color: "#ea5450", }}>D-Day</div>: 
                                (new Date() > new Date(data.deadLineDate)?
                                    <div className="mccard-top-day">만료</div>:
                                    <div className="mccard-top-day">{'D-'+Math.floor((new Date(data.deadLineDate).getTime()-new Date().getTime()) / (1000*60*60*24))}</div>
                                )
                            }
                        </div>
                        <p className="mccard-middle">오늘만 반값, 여름 특별 할인 쿠폰</p>
                        <div className="pc mccard-bottom">
                            {/* {true?
                                <div className="mccard-bottom-day" style={{ color: "#ea5450", }}>D-Day</div>: 
                                <div className="mccard-bottom-day">D-5</div>
                            } */}
                            <button className="mccard-using">사용하러 가기 &gt;</button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MCCard;