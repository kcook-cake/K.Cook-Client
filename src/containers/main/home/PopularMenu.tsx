import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import 'src/styles/main/home/PopularMenu.scss'

import axios from 'axios';

import LengthSlide_One from 'src/components/main/card/LengthSlide_One';
import homeGetAxios from './homeGetAxios';

const PopularMenu = ()=>{
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
  
    const [data, setData] = useState([]);
    useEffect(() => {
        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        var changeData: any = [];
        homeGetAxios(setData, changeData, "popular-products", 1);
    }, []);

    return(
        <div className="popularmenu-flex home-flex">
            <div className="popularmenu home">
                <div className="popularmenu-title-flex">
                    <div className="popularmenu-title">인기상품</div>
                    <div className="popularmenu-btn">
                        <div>{num}/5</div>
                        <button
                            className="popularmenu-btn-arrow"
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
                            className="popularmenu-btn-arrow"
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
                <div className="popularmenu-inner">
                    <ul className="popularmenu-contents">
                        <LengthSlide_One getData={data} resize={resize} slidePx={slidePx} />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default PopularMenu;