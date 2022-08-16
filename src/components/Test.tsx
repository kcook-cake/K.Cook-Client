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

    useEffect(()=>{
        // for(var i = 0; i < 4; i++) {
        //     data[i] = data2[i];
        // }
    },[]);

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
                                className="test-button-arrow"
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
                    <div className="test-inner">
                        <ul className="contents">
                            {data.map((data: { name: any, }, idx)=>{
                                return (
                                    <>
                                        <li
                                            className="testcard"
                                            style={{
                                                left: (306.7*idx-27.4*parseInt((idx/4).toString())),
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