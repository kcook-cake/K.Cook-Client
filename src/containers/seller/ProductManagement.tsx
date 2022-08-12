import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../assets/seller/drag-column-btn.svg';

import { Link } from 'react-router-dom';
import getAxios from 'src/utils/getAxios';
import SPMCard from 'src/components/seller/card/SPMCard';
import SPMCard_Add from 'src/components/seller/card/SPMCard_Add';

function ProductManagement () {

    const [num, setNum] = useState(0);
    const [addDiv, setAddDiv] = useState(false);
    const [addName, setAddName] = useState("");
    const [addOption, setAddOption] = useState([
        {
            optionId: 1,
            optionName: "크기",
            optionList: [
                {
                    optionListId: 1,
                    optionListName: "1호",
                    optionListPrice: 1000,
                },
            ],
        },
    ]);

    const handleAddName = (e: any, ) => {
        setAddName(e.target.value);
    };

    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        // $("#option-title1").val("크기");
        // $("#option-input-text1").val("1호");
        // $("#add-price-1").val(1000);
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
            <div className="seller-mypage-top-flex">
                <div className="spm-mobile-flex">
                    <div className="spm-ssr-mobile-box">
                        {/* title */}
                        <div className="seller-mypage-top">
                            <div className="mmo-mobile-front-title">상품관리</div>
                            <div className="seller-mypage-middle-title">현재 판매 중인 상품입니다</div>
                        </div>
                        <div className="spm-mobile" style={{ width: "5px", height: "25px", }}></div>
                        <div className="content">
                            <SPMCard getData={data} />
                        </div>

                        {addDiv? 
                        <div className="spm-add">
                            <div className="spm-add2">
                                <div
                                    className="move-tap"
                                    // onClick={()=>{ setAdd(false); }}
                                >
                                    <DragBtn/>
                                </div>
                                <div className="spm-mobile-add-margin-flex">
                                    <div className="spm-pc-add-content">
                                        <div className="spm-pc add-img order-img">
                                            <AddIcon/>
                                        </div>
                                        <div>
                                            <input
                                                className="add-cake-name"
                                                placeholder="상품명"
                                                onChange={(e)=>{
                                                    handleAddName(e);
                                                }}
                                            />
                                            <button className="spm-mobile store-img-add">
                                                <AddIcon />
                                            </button>
                                            <SPMCard_Add setAddOptionF={setAddOption} getData={addOption}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spm-pc management-tap">
                                <button
                                    className="delete-btn"
                                    onClick={()=>{
                                        setAddDiv(false);
                                    }}
                                >
                                    <CloseBtn/>
                                </button>
                                <button className="copy-btn"><CopyBtn/></button>
                            </div>
                            <div className="spm-mobile">
                                <button onClick={()=>{
                                    console.log(addName);
                                    console.log(addOption);
                                }}>
                                    추가
                                </button>
                                <button onClick={()=>{
                                    setAddName("");
                                    setAddOption ([{
                                        optionId: 1,
                                        optionName: "크기",
                                        optionList: [
                                            {
                                                optionListId: 1,
                                                optionListName: "1호",
                                                optionListPrice: 1000,
                                            },
                                        ],
                                    }])
                                    setAddDiv(false);
                                }}>
                                    삭제
                                </button>
                            </div>
                        </div>
                        :null}
                    </div>
                </div>

                {/* addButton */}
                <div className="spm-pc">
                    <div
                        className="option-add-btn"
                        onClick={()=>{
                            setAddDiv(true);
                        }}
                    >
                        <AddIcon/>
                    </div>
                </div>
                <div className="spm-mobile">
                    <div className="spmm-bottom">
                        <button className="spmm-bottom-inner spmm-bottom-left">
                            <img src={cake6}/>
                        </button>
                        <button
                            className="spmm-bottom-inner spmm-bottom-middle"
                            onClick={()=>{
                                setAddDiv(true);
                            }}
                        >
                            <img src={cake6}/>
                        </button>
                        <button className="spmm-bottom-inner spmm-bottom-right">
                            <img src={cake6}/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default ProductManagement;