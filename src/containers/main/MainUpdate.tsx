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
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="recommend-flex">
            <div className="recommend">
                <div className="recommend-header">
                    <SectionTitle title="최근 업데이트"/>
                </div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default MainUpdate;