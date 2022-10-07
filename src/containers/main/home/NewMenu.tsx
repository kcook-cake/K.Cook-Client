import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/PopularMenu.scss'
import '../../../styles/main/home/NewMenu.scss'

import axios from 'axios';

import getAxios from 'src/utils/getAxios';
import LengthSlide_One from 'src/components/main/common/LengthSlide_One';
import homeGetAxios from './homeGetAxios';
import Main_Popular_TestData from 'src/testdata/Main_Popular_TestData';

function NewMenu (){
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

        //get api/new-cake
        let isComponentMounted = true;
        setData(Main_Popular_TestData());
        return () => {
          isComponentMounted = false;
          window.removeEventListener("resize", handleResize);
        }
    }, []);

    return(
        <div className="popularmenu-flex home-flex newmenu-flex">
            <div className="popularmenu home newmenu">
                <div className="popularmenu-title-flex">
                    <div className="popularmenu-title">신상품</div>
                    <div className="popularmenu-btn">
                        <div>{num}/5</div>
                        <button
                            className="popularmenu-btn-arrow"
                            onClick={()=>{
                                setNum(num-1);
                                if (resize<=767) setSlidePx(slidePx+704);
                                else setSlidePx(slidePx+1199);
                                if (num === 1) {
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
                                if (num === 5) {
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


export default NewMenu;