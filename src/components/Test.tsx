import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/Test.scss'

interface Props {
}

type userType = {
    
}

function Test({ }: Props) {
    const [data, setData] = useState([
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
    ]);
    const [data2, setData2] = useState([
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
        {
            name: "Hi",
        },
    ]);

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
        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="test-flex">
                <div className="test">
                    <div className="title">
                        <div className="test-button">
                            <div>{num}/5</div>
                            <button
                                className="test-button-arrow"
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
                                className="test-button-arrow"
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
                    <div className="test-inner">
                        <ul className="contents">
                            {data.map((data: { name: any, }, idx)=>{
                                return (
                                    <>
                                        <li
                                            className="testcard"
                                            style={{
                                                left: resize<=767? ((176)*idx) : (306.7*idx-27.4*parseInt((idx/4).toString())),
                                                transform: `translateX(${slidePx}px)`,
                                                transition: "0.5s ease",
                                            }}
                                            >
                                            <div>{idx}</div>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Test;