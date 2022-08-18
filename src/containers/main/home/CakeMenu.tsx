import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss'

import axios from 'axios';

import LengthwiseCard from '../../../components/LengthwiseCard';
import SectionTitle from '../../../components/SectionTitle';
import getAxios from 'src/utils/getAxios';

function CakeMenu (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <div className="home-flex">
            <div className="cake-store-menu cakemenu home">
                <div className="title">
                    <SectionTitle title="케이크" link="Cake"/>
                </div>
                <div className="contents">
                    <LengthwiseCard getData={data} link="Cake"/>
                </div>
            </div>
        </div>
    )
}


export default CakeMenu;