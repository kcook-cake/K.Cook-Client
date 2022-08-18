import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../assets/cake6.png';
import { ReactComponent as AddSmalllIcon } from '../../assets/seller/add-small.svg';
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
            optionDirect: false,
            optionDirectText: "",
        },
    ]);

    const handleAddName = (e: any, ) => {
        setAddName(e.target.value);
    };

    const [update, setUpdate] = useState([]);
    const [updateOption, setUpdateOption] = useState([
        {
            name: "케이크1",
            thumbnail: "",
            list:
            [   
                {
                    optionId: 1,
                    optionName: "크기",
                    optionList: [
                        {
                            optionListId: 1,
                            optionListName: "1호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 2,
                            optionListName: "2호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 3,
                            optionListName: "3호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 4,
                            optionListName: "",
                            optionListPrice: 0,
                        },
                    ],
                    optionDirect: true,
                    optionDirectText: "",
                },
                {
                    optionId: 2,
                    optionName: "맛",
                    optionList: [
                        {
                            optionListId: 1,
                            optionListName: "딸기",
                            optionListPrice: 1000,
                        },
                    ],
                    optionDirect: false,
                    optionDirectText: "",
                },
            ],
        },
        {
            name: "케이크2",
            thumbnail: "",
            list:
            [   
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
                    optionDirect: false,
                    optionDirectText: "",
                }
            ],
        },
    ]);
    const [direct, setDirect] = useState([]);
    const [data, setData] = useState([
        {
            name: "케이크1",
            thumbnail: "",
            list:
            [   
                {
                    optionId: 1,
                    optionName: "크기",
                    optionList: [
                        {
                            optionListId: 1,
                            optionListName: "1호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 2,
                            optionListName: "2호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 3,
                            optionListName: "3호",
                            optionListPrice: 1000,
                        },
                        {
                            optionListId: 4,
                            optionListName: "",
                            optionListPrice: 0,
                        },
                    ],
                    optionDirect: true,
                    optionDirectText: "",
                },
                {
                    optionId: 2,
                    optionName: "맛",
                    optionList: [
                        {
                            optionListId: 1,
                            optionListName: "딸기",
                            optionListPrice: 1000,
                        },
                    ],
                    optionDirect: false,
                    optionDirectText: "",
                },
            ],
        },
        {
            name: "케이크2",
            thumbnail: "",
            list:
            [   
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
                    optionDirect: false,
                    optionDirectText: "",
                }
            ],
        },
    ]);
    const [dataLength, setDataLength] = useState(0);
    useEffect(()=>{
        // $("#option-title1").val("크기");
        // $("#option-input-text1").val("1호");
        // $("#add-price-1").val(1000);
        // getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
        var u: any = update;
        var d: any = [];
        for (var i=0; i< data.length; i++) { //dataLength
            u[i] = false;
            setUpdate(u);
            d[i] = [];
            for (var j=0; j< data[i].list.length; j++) {
                // d[i][j] = data[i].list[j]
                // setDirect();
            }
            // ud[i] = data[i].list;
            // setUpdateOption(ud);
        }
        console.log(data);
        console.log(updateOption);
    },[]);

    return(
        <>
            <div className="seller-mypage-top-flex">
                <div className="spm-ssr-mobile-box">
                    {/* title */}
                    <div className="seller-mypage-top spm-ssr-title">
                        <div className="seller-mypage-front-title">상품관리</div>
                        <div className="seller-mypage-middle-title">현재 판매 중인 상품입니다</div>
                    </div>
                    <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                    <div className="seller-content">
                        <SPMCard getData={data} update={update} setDataF={setData} updateOption={updateOption} setUpdateOptionF={setUpdateOption} setUpdateF={setUpdate}/>
                    </div>

                    {addDiv? 
                    <div className="spm-add">
                        <div className="spm-add-inner">
                            <div
                                className="move-tap"
                                onClick={()=>{
                                    alert("추가"); //addOption, addName
                                    //axios.add
                                }}>
                                <DragBtn/>
                            </div>
                            <div className="spm-add-content">
                                <div className="spm-add-img">
                                    <AddIcon/>
                                </div>
                                <div>
                                    <div style={{ display: "flex", }}>
                                        <input
                                            className="spm-add-main-title spm-add-title"
                                            placeholder="상품명"
                                            onChange={(e)=>{
                                                handleAddName(e);
                                            }}
                                        />
                                        <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                        <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                    </div>
                                    {/* <button className="mobile spm-add-img-m">
                                        <AddIcon />
                                    </button> */}
                                    <div className="spmcard-update-input spmcard-update-input-top">
                                        <div id="spm-none-1" className="spmcard-update-input-left">
                                            <DragCBtn className="spmcard-update-input-left-icon"/>
                                        </div>
                                        <div style={{ width: "100%", }}>
                                            <input
                                                id="spm-none-1"
                                                className="spmcard-update-input-text"
                                                type="text"
                                                // name={"name"+optionList.optionListId}
                                                // value={option.optionDirect&&option.optionList.length==optionList.optionListId? "직접 입력": optionList.optionListName}
                                                // onChange={(e)=>{handleOptionListName(e, idx, option.optionId, optionList.optionListId)}}
                                                // disabled={option.optionDirect&&option.optionList.length==optionList.optionListId}
                                            />
                                        </div>
                                        <input
                                            className="spmcard-update-input-price"
                                            type="text"
                                            min="0"
                                            placeholder="0원"
                                            // value={optionList.optionListPrice}
                                            // onChange={(e)=>{handleOptionListPrice(e, idx, option.optionId, optionList.optionListId)}}
                                        />
                                        <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                    </div>
                                    <SPMCard_Add addOption={addOption} setAddOptionF={setAddOption}/>
                                </div>
                            </div>
                        </div>

                        <div className="pc spm-tap">
                            <button
                                onClick={()=>{
                                    setAddDiv(false);
                                }}>
                                <CloseBtn/>
                            </button>
                        </div>
                    </div>
                    :null}
                </div>

                {/* addButton */}
                <div className="pc">
                    <div
                        className="spm-btn"
                        onClick={()=>{
                            setAddDiv(true);
                        }}
                    >
                        <AddIcon/>
                    </div>
                </div>
                <div className="mobile">
                    <div className="spm-bottom">
                        <button className="spm-bottom-inner spm-bottom-left">
                            <CopyBtn/>
                        </button>
                        <button
                            className="spm-bottom-inner spm-bottom-middle"
                            onClick={()=>{
                                setAddDiv(true);
                            }}
                        >
                            {/* <AddSmalllIcon/> */}
                            <img src={cake6}/>
                        </button>
                        <button
                            className="spm-bottom-inner spm-bottom-right"
                            onClick={()=>{
                                setAddDiv(false);
                            }}>
                            <CloseBtn/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default ProductManagement;