import React,  { useEffect, useState }from 'react';
import '../../styles/main/MainUpdate.scss'
import '../../styles/main/MainRecommend.scss'

import axios from 'axios';
import LengthwiseCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';
// import '../../src/styles/main/MainRecommend.scss'

function MainUpdate (){
    let [data, setData] =useState([]);

    useEffect(()=>{
        axios.get(`https://prod.kcook-cake.com/app/cakes`)
            .then(res =>{
                var num = 4;
                if (res.data.result.content.length < 4) num = res.data.result.content.length;

                var changeData: any = [];
                for (var i = 0; i < num; i++) {
                    changeData[i] = res.data.result.content[i];
                }
                setData(changeData.reverse());
            });
    },[]);
    return(
        <div className="recommend-flex">
            <div className="recommend">
                <div className="recommend-header">
                    <SectionTitle title="최근 업데이트"/>
                </div>
                <div className="recommend-contents update-contents">
                    <LengthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default MainUpdate;