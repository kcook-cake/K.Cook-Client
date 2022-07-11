import React from 'react';
import '../../styles/main/MainCake.scss'
import '../../styles/main/MainRecommend.scss'

import SectionTitle from '../../components/SectionTitle';
import WidthwiseCard from '../../components/WidthwiseCard';

function MainCake (){

    return(
        <div className="main-cake-flex">
            <div className="main-cake">
                <div className="recommend-header">
                    <SectionTitle title="케이크" link="/Cake" />
                </div>
                <div className="cake-contents">
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                </div>
            </div>
        </div>
    )
}


export default MainCake;