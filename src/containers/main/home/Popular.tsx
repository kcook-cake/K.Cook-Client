import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '../../../styles/main/home/Popular.scss'

import axios from 'axios';

// import LengthwiseCard from '../../../components/LengthwiseCard';
import SectionTitle from '../../../components/SectionTitle';
import getAxios from 'src/utils/getAxios';

import PopularCard from 'src/components/main/home/PopularCard';
import { createImportSpecifier } from 'typescript';

const Popular = ()=>{
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    const [num, setNum] = useState(1);
    const [slidePx, setSlidePx] = useState(0);

    const [resize, setResize] = useState(0);

    const handleResize = () => {
        if (window.innerWidth<=767) {
            setNum(1);
            setSlidePx(0);
        }
        setResize(window.innerWidth);
    };
  
    useEffect(() => {
        getAxios(setData, setDataLength, "cakes", [], 20, 0, 0);
        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, []);

    return(
        <div className="popular-flex home-flex">
            <div className="popular home">
                <div className="popular-title-flex">
                    <div className="popular-title">인기상품</div>
                    <div className="popular-btn">
                        <div>{num}/5</div>
                        <button
                            className="popular-btn-arrow"
                            onClick={()=>{
                                setNum(num-1);
                                if (resize<=767) setSlidePx(slidePx+704);
                                else setSlidePx(slidePx+1199);
                                if (num == 1) {
                                    setNum(5);
                                    setSlidePx(-4796);
                                }
                            }}
                            style={{ marginLeft: "5px", }}
                            >&lt;
                        </button>
                        <button 
                            className="popular-btn-arrow"
                            onClick={()=>{
                                setNum(num+1);
                                if (resize<=767) setSlidePx(slidePx-704);
                                else setSlidePx(slidePx-1199);
                                if (num == 5) {
                                    setNum(1);
                                    setSlidePx(0);
                                }
                            }}
                            >&gt;
                        </button>
                    </div>
                </div>
                <div className="popular-inner">
                    <ul className="popular-contents">
                        <PopularCard getData={data} resize={resize} slidePx={slidePx} />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Popular;