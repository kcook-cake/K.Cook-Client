import React from 'react';
import '../../styles/main/MainUpdate.scss'
import '../../styles/main/MainRecommend.scss'
import LengthwiseCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';
// import '../../src/styles/main/MainRecommend.scss'



function MainUpdate (){
    return(
        <div className="recommend">
            <div className="recommend-header">
                {/* <SectionTitle title="최근 업데이트"/> */}
            </div>
            <div className="recommend-contents">
                {/* <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/> */}
            </div>
        </div>
    )
}


export default MainUpdate;