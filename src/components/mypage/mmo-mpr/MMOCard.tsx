import React from 'react';
import 'src/styles/mypage/card/MMOCard.scss';

import rightArrow from "src/assets/right-arrow.svg";
import cake6 from   'src/assets/cake6.png';

interface Props {
    getData: {
        image1: string,
        name: string, 
        price: number, 
        saleTime: string, 
        saleDate: string, 
        optionsList: Props2[]
    }[]
}

interface Props2 {
    optionName: string, 
    itemList: Props3[],
}

interface Props3 {
    itemNumber: number,
    itemName: string,
}

function MMOCard({getData}: Props) {
    return (
        <>
            {getData.map((data: {         
                image1: string,
                name: string, 
                price: number, 
                saleTime: string, 
                saleDate: string, 
                optionsList: Props2[] }, idx: number)=>{
                return (
                    <div key={idx} className="mmocard">
                        <div className="mypage-img-box">
                            {data.image1 === "" || data.image1 === null || data.image1 === undefined || data.image1.length === 133?
                                <div className="mypage-img-none">~준비중 입니다~</div>:
                                <img src={data.image1} className="mypage-img"/>
                            }
                        </div>
                        <div className="mmocard-content">
                            <div className="mmocard-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="mmocard-cake-shop">원모먼트</div>
                            <div className="mmocard-option">
                                {data.optionsList.map((data2: { optionName: string, itemList: Props3[] }, idx2: number)=>{
                                    return (
                                        <div key={idx2} style={{ display: "flex", }}>
                                            {data2.optionName}:&nbsp;
                                            {data2.itemList.map((item: { itemNumber: number, itemName: string, }, idx3: number)=>{
                                                return (
                                                    <div key={idx3}>
                                                        {item.itemName}
                                                        {(item.itemNumber===data2.itemList.length-1)? null: <>,&nbsp;</>}
                                                    </div>
                                                );
                                            })}
                                            {(idx2===data.optionsList.length-1)? null: <>,&nbsp;</>}
                                        </div>
                                    );
                                })}
                                {/* 옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                <div className="mmocard-time">21.02.15 17:00</div> */}
                            </div>
                            <div className="mmocard-price">17,000원</div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default MMOCard;