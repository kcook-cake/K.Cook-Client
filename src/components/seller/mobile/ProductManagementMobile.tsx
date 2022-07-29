import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import SPM_SSR_MobileCard from '../card/mobile/SPM_SSR_MobileCard';
import SPM_MobileCard_Add from '../card/mobile/SRM_MobileCard_Add';

import cake6 from   '../../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

function ProductManagementMobile (){
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
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="spm-mobile">
            <div className="spm-ssr-mobile-box">
                <div className="title">
                    <div
                        className="spm-ssr-mobile-title-front"
                    >상품관리</div>
                    <div className="spm-ssr-mobile-title-middle">판매 중인 상품입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SPM_SSR_MobileCard getData={data} box={true}/>
                </div>

                <div></div> {/* 추가하면 여기에 들어갈 것임 */}
            </div>
            {addDiv? 
            <div className="spm-mobile-add">
                <div className="spm-mobile-add-box">
                    <div
                        className="spm-mobile-add-move-tap"
                        // onClick={()=>{ setAdd(false); }}
                    >
                        <DragBtn/>
                    </div>
                    <div className="spm-mobile-add-margin-flex">
                        <div className="spm-mobile-add-margin">
                            <input
                                className="spm-mobile-add-cake-name"
                                placeholder="상품명"
                                onChange={(e)=>{
                                    handleAddName(e);
                                }}
                            />
                            <button className="store-img-add">
                                <AddIcon />
                            </button>
                            <SPM_MobileCard_Add setAddOptionF={setAddOption} getData={addOption}/>
                        </div>
                    </div>
                    <button onClick={()=>{
                        console.log(addName);
                        console.log(addOption);
                    }}>
                        추가
                    </button>
                    <button onClick={()=>{
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
            </div>:
                <></>
            }
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
    )
}


export default ProductManagementMobile;