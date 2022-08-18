import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/NewMenu.scss'
import '../../../styles/main/home/Popular.scss'

import axios from 'axios';

import SectionTitle from '../../../components/SectionTitle';
import WidthwiseCard from '../../../components/WidthwiseCard';
import getAxios from 'src/utils/getAxios';
import NewMenuCard from 'src/components/main/home/NewMenuCard';

function NewMenu (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

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
        <div className="newmenu-flex">
            <div className="newmenu home">
                    <div className="newmenu-title-flex">
                        <div className="newmenu-title">신상품</div>
                        <div className="newmenu-btn">                        
                            <div>{num}/5</div>
                            <button
                                className="newmenu-btn-arrow"
                                onClick={()=>{
                                    setNum(num-1);
                                    setSlidePx(slidePx+1199);
                                    if (num == 1) {
                                        setNum(5);
                                        setSlidePx(-4796);
                                    }
                                }}
                                style={{ marginLeft: "5px", }}
                                >&lt;
                            </button>
                            <button 
                                className="newmenu-btn-arrow"
                                onClick={()=>{
                                    setNum(num+1);
                                    setSlidePx(slidePx-1199);
                                    if (num == 5) {
                                        setNum(1);
                                        setSlidePx(0);
                                    }
                                }}
                                >&gt;
                            </button>
                        </div>
                    </div>
                    <div className="newmenu-inner">
                        <ul className="newmenu-contents">
                            <NewMenuCard getData={data} resize={resize} slidePx={slidePx} />
                        </ul>
                    </div>
            </div>
        </div>
    )
}


export default NewMenu;