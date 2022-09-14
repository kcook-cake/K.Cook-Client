import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/admin/kpm/KPMCard.scss';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as SettingIcon } from '../../../assets/seller/spr-setting.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import setting from "../../../assets/seller/spm-setting.png";

interface Props {
    idx: any,
    num: any,
    setNum: any,

    oriShow: any,
    oriData: any,
    oriImage: any,
}

function KPMCard({ 
        idx, num, setNum,
        oriShow, oriData, oriImage,
    }: Props) {

    useEffect(()=>{
        
    },[]);
    
    return (
        <>
            <div className="spmcard">
                <div className="spmcard-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = false;
                            setNum(num+1);
                        }}>
                        <DragBtn/>
                    </div>
                    <div className="spmcard-content">
                        <div className="spmcard-img">
                            {oriImage[idx][0]==""?
                                <div className="spmcard-img-inner"><AddIcon/></div>:
                                <img src={oriImage[idx][0]} />
                            }
                        </div>
                        <div className="spmcard-content-inner">
                            <div className="spmcard-title">{oriData[idx].name}</div>
                            {oriData[idx].list.map((option: { optionId: any, optionName: any, optionList: any, optionImage: any, optionImageText: any, })=>{
                                return (
                                    <>
                                        {option.optionName}:&nbsp;
                                        {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                            return (
                                                <>
                                                    {optionList.optionListName.split("&")[0] == "텍스트"? 
                                                        (optionList.optionListName.split("&")[1] == ""? "텍스트 입력": optionList.optionListName.split("&")[1]): 
                                                        (option.optionImage&&option.optionList.length==optionList.optionListId? 
                                                            (option.optionImageText == ""? "이미지 입력": option.optionImageText) : optionList.optionListName)}
                                                    {(optionList.optionListId==option.optionList.length)? null: <>,&nbsp;</>}
                                                    {/* {optionList.optionListId==option.optionList.length-1&&option.optionDirect? (option.optionDirectText==""? "직접 입력": option.optionDirectText): null} */}
                                                </>
                                            );
                                        })}
                                        <br/>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="spm-tap">
                    <label className="switch-button">
                        <input
                            id='studies_togetherTrue'
                            type='checkbox'
                            onClick={() => {
                                //노출
                            }}
                            // checked={false} //노출 여부 판단 후 적음
                        />
                        <span className="onoff-switch"></span>
                    </label>
                </div>
            </div>
        </>
    );   
}

export default KPMCard;