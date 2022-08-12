import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '../../../styles/main/home/MainRecommend.scss'

import axios from 'axios';

import LengthwiseCard from '../../../components/LengthwiseCard';
import SectionTitle from '../../../components/SectionTitle';
import getAxios from 'src/utils/getAxios';

const Recommend = ()=>{
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);
    // console.log(environment.apiUrl);
    useEffect(()=>{
        axios
            .get(`https://prod.kcook-cake.com/app/cakes`)
            .then((res) => {
                console.log(res.data.result.content);
                setData(res.data.result.content);
            })
            .catch((error) => {
                console.log(error);
            });
        // getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <div className="home-recommend-flex home-flex">
            <div className="home-recommend home">
                <div className="title">
                    <SectionTitle title="인기상품" link="TodaysRec"/>
                </div>
                <div className="contents">
                    <LengthwiseCard getData={data} link="Detail"/>
                </div>
            </div>
        </div>
    )
}


export default Recommend;