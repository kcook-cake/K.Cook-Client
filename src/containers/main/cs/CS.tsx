import React, { useState, useEffect } from 'react';
import LinkClick from 'src/utils/LinkClick';
import '../../../styles/main/CakeStore.scss';

function CS (){
    useEffect(()=>{
        LinkClick("CS");
    },[]);
    return(
        <div className="cake-flex">
            <div className="cake" style={{ padding: "23px 10px", }}>
                <div className="sorted-item">
                    ~준비중 입니다~
                    {/* <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/> */}

                </div>

            </div>
        </div>
    )
}



export default CS;