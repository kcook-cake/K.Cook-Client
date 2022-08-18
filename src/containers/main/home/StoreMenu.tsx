import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss'

import axios from 'axios';

import LengthwiseCard from '../../../components/LengthwiseCard';
import SectionTitle from '../../../components/SectionTitle';
import getAxios from 'src/utils/getAxios';

function StoreMenu (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <div className="">
            <div className="cake-store-menu storemenu home">
                <div className="title">
                    <SectionTitle title="스토어" link="Store"/>
                </div>
                <div className="contents">
                    <LengthwiseCard getData={data} link="Store"/>
                </div>
            </div>
        </div>
    )
}


export default StoreMenu;