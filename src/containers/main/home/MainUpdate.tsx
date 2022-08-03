import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/MainUpdate.scss'
import '../../../styles/main/home/MainRecommend.scss'

import axios from 'axios';

import LengthwiseCard from '../../../components/LengthwiseCard';
import SectionTitle from '../../../components/SectionTitle';
import getAxios from 'src/utils/getAxios';

function MainUpdate (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <div className="home-update-flex home-flex">
            <div className="home-update home">
                <div className="title">
                    <SectionTitle title="최근 업데이트"/>
                </div>
                <div className="contents">
                    <LengthwiseCard getData={data} link="Update"/>
                </div>
            </div>
        </div>
    )
}


export default MainUpdate;