import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/seller/card/SPMCard.scss';

import cake6 from   '../../../assets/cake6.png';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as SettingIcon } from '../../../assets/seller/spr-setting.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import setting from "../../../assets/seller/spm-setting.png";
import ImageModal from './image-modal/ImageModal';

interface Props {
    idx: any,
    num: any,
    setNum: any,

    oriShow: any,
    oriData: any,
    oriImage: any,
}

function SPMCard({ 
        idx, num, setNum,
        oriShow, oriData, oriImage,
    }: Props) {

    useEffect(()=>{
    },[]);
    
    return (
        <>
            <div className="spm-add2">
                <div className="spm-add-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = false;
                            setNum(num+1);
                        }}>
                        <DragBtn/>
                    </div>
                    <div className="spm-add-content2">
                        <div className="spm-modal-img-inner2">
                            {oriImage[idx][0]==""?
                                <div className="spm-add-img2"><AddIcon/></div>:
                                <img src={oriImage[idx][0]} />
                            }
                        </div>
                        <div className="spm-option-title">
                            <div className="spm-title">{oriData[idx].name}</div>
                                {oriData[idx].list.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, })=>{
                                    return (
                                        <>
                                            {option.optionName}:&nbsp;
                                            {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                                return (
                                                    <>
                                                        {optionList.optionListName}
                                                        {(optionList.optionListId==option.optionList.length)? null: <>,&nbsp;</>}
                                                        {optionList.optionListId==option.optionList.length-1&&option.optionDirect? (option.optionDirectText==""? "직접 입력": option.optionDirectText): null}
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
                    <button
                        onClick={()=>{
                            alert("삭제");
                            // setAddDiv(false);
                        }}>
                        <CloseBtn/>
                    </button>
                    <button
                        className="spm-tap-btn"
                        onClick={()=>{
                            alert("복제");
                        }}>
                        <CopyBtn/>
                    </button>
                    <Link to="/ProductManagement/0">
                        <div className="spm-tap-btn">
                            <img src={setting}/>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );   
}

export default SPMCard;