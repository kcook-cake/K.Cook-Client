import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/ProductManagement.scss';

import SSRMCard from '../card/SSRMCard';
import SPMCardOption from '../card/SPMCardOption';

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
        <div className="mp-top spmm mypage-mobile">
            <div className="ssrm-box mprm-box">
                <div className="title">
                    <div
                        className="ssom-front-title"
                    >상품관리</div>
                    <div className="ssom-middle-title">판매 중인 상품입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSRMCard getData={data} box={true}/>
                </div>

                <div></div> {/* 추가하면 여기에 들어갈 것임 */}
            </div>
            {addDiv? 
            <div className="sprmcard">
                <div className="sprmcard-box sprmcard-box-add">
                    <div
                        className="sprmcard-move-tap"
                        // onClick={()=>{ setAdd(false); }}
                    >
                        <DragBtn/>
                    </div>
                    <div className="sprmcard-box-margin">
                        <div className="sprmcard-box-inner">
                            <input
                                className="add-cake-name"
                                placeholder="상품명"
                                onChange={(e)=>{
                                    handleAddName(e);
                                }}
                            />
                            <button className="store-img-add">
                                <AddIcon />
                            </button>
                            <div className="spmm-option">
                                <SPMCardOption setAddOptionF={setAddOption} getData={addOption}/>
                            </div>
                        </div>
                        <div className="sprmcard-img">
                            
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