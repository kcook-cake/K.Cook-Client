import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/seller/spm-ssr/SPM_Add_Update.scss';

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
import ImageModal from 'src/components/seller/spm-ssr/modal/ImageModal';
import MakePrice from 'src/utils/MakePrice';

interface Props {
    idx: any,
    NumF: any,
    resize: any,

    oriShow: any,
    getUpdateData: any,
}

function SPM_Update({ 
        idx, NumF, resize, 
        oriShow, getUpdateData,
    }: Props) {
    const addPhoto = useRef(null);
    const [addFormData, setAddFormData] = useState(null);
    
    const handleAddName = (e: any, ) => {
        setUpdateName(e.target.value);
    };
    const handleAddPrice = (e: any, ) => {
        setUpdatePrice(e.target.value.replace(/[^0-9]/g, ""));
    };
    
    const handleOptionName = (e: any, optionId: any, ) => {
        updateOption[optionId-1].optionName = e.target.value;
        NumF();
        setUpdateOption(updateOption);
    };
    const handleOptionListNameText = (e: any, optionId: any, optionListId: any, ) => {
        updateOption[optionId-1].optionList[optionListId-1].optionListName = "텍스트&"+e.target.value;
        NumF();
        setUpdateOption(updateOption);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        updateOption[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        NumF();
        setUpdateOption(updateOption);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        updateOption[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(e.target.value.replace(/[^0-9]/g, ""));
        NumF();
        setUpdateOption(updateOption);
    };



    const [updateImageModal, setUpdateImageModal] = useState(false);
    const [updateImgNum, setUpdateImgNum] = useState(0);
    const [updateImg, setUpdateImg] = useState(getUpdateData.image);
    const [updateName, setUpdateName] = useState(getUpdateData.name);
    const [updatePrice, setUpdatePrice] = useState(getUpdateData.price);
    const [updateOption, setUpdateOption] = useState<any>(getUpdateData.newOptionsList);

    useEffect(()=>{
    },[]);
    
    return (
        <>
            {/* <ImageModal
                NumF={()=>NumF()} resize={resize} TF={false}
                imageModalShow={updateImageModal} setImageModalShowF={setUpdateImageModal}
                imageData={updateImage}
            /> */}

            <div className="spm-add-update">
                <div className="spm-add-update-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = true;
                            NumF();
                            alert("업데이트"); //updateOption
                            // axios.update
                        }}>
                        <DragBtn/>
                    </div>
                    <div className="spm-add-update-content">
                        <div>
                            <div
                                className="spm-add-update-img"
                                onClick={()=>{
                                    setUpdateImageModal(true);
                                }}>
                                <div className="spm-add-update-img-inner">
                                    {updateImg[updateImgNum]==="" || updateImg[updateImgNum]===null || updateImg[updateImgNum]===undefined?
                                        <div className="spmcard-img-inner">
                                            <AddIcon/>
                                        </div>:
                                        <img src={updateImg[updateImgNum]} />
                                    }
                                </div>
                            </div>
                            <div className='spm-add-update-img-bar'>
                                <ul style={{ display: "flex", }}>
                                    {[0, 1, 2, 3, 4].map((data: any,)=>{
                                        return (
                                            <li 
                                                className={classNames('spm-add-update-dot', {
                                                    'spm-add-update-dot-active': updateImgNum===data,
                                                })}
                                                onClick={()=>{
                                                    setUpdateImgNum(data);
                                                }}>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div> {/* spmcard-content-inner */}
                            <div style={{ display: "flex"}}>
                                <input
                                    id="spm-update-name"
                                    className="spm-add-update-main-title spm-add-update-title"
                                    placeholder="상품명"
                                    value={updateName}
                                    onChange={handleAddName}
                                />
                                <div className="spm-add-update-right">x</div>
                            </div>
                            <div className="spm-add-update-price">
                                <div className="spm-add-update-item-left">
                                    <DragCBtn className="spm-add-update-item-left-icon"/>
                                </div>
                                <div style={{ width: "100%", }}>
                                    <input className="spm-add-update-item-text"/>
                                </div>
                                <input
                                    id="spm-update-price"
                                    className="spm-add-update-price-inner"
                                    type="text"
                                    placeholder="0"
                                    value={MakePrice(updatePrice)}
                                    onChange={handleAddPrice}
                                />원
                                <div className="spm-add-update-right">x</div>
                            </div>
                            <>
                                {updateOption.map((option: { optionNumber: any, optionName: any, itemList: any, })=>{
                                    return (
                                        <form>
                                            <div className="spm-add-update-option">
                                                <input
                                                    className="spm-add-update-title"
                                                    placeholder={"옵션"+(option.optionNumber+1)+" 이름"}
                                                    value={option.optionName}
                                                    onChange={(e)=> {handleOptionName(e, option.optionNumber+1)}}
                                                />
                                                <div
                                                    className="spm-add-update-right"
                                                    onClick={()=>{
                                                        for (var i = option.optionNumber; i < updateOption.length-1; i++) {
                                                            updateOption[i] = updateOption[i+1];
                                                            updateOption[i].optionNumber = i+1;
                                                        }
                                                        updateOption.pop();
                                                        NumF();
                                                    }}>x
                                                </div>
                                            </div>

                                            {/* {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                                return (
                                                    <div className="spm-add-update-item">
                                                        <div
                                                            id={option.optionImage&&option.optionList.length===optionList.optionListId? "spm-none-1": ""}
                                                            className="spm-add-update-item-left"
                                                            onDragStart={(e)=>{
                                                                setStartDrag(e.clientY);
                                                            }}
                                                            onDragEnd={(e)=>{
                                                                var n = Math.ceil((Math.abs(startDrag-e.clientY)-45)/45);
                                                                //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                                                if (56 <= startDrag-e.clientY && n <= option.optionList.length
                                                                    && (optionList.optionListId-1 != 0)) {
                                
                                                                        for (var i=n+1; i>1; i--) {
                                                                            updateOption[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                        }
                                                                        updateOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                        updateOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                    && ((n+optionList.optionListId != option.optionList.length+1 && !option.optionImage) 
                                                                    || (n+optionList.optionListId != option.optionList.length && option.optionImage))) {
                                
                                                                        for (var i=n; i>0; i--) {
                                                                            updateOption[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                        }
                                                                        updateOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                        updateOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                NumF();
                                                            }}
                                                            draggable={true}>
                                                            <DragCBtn className="spm-add-update-item-left-icon"/>
                                                        </div>
                                                        <div style={{ width: "100%", }}>
                                                            <input
                                                                id={"spm-update-name-option-list-"+option.optionId+"-"+optionList.optionListId}
                                                                className="spm-add-update-item-text"
                                                                type="text"
                                                                name={"name"+optionList.optionListId}
                                                                placeholder={
                                                                    optionList.optionListName.split("&")[0] === "텍스트"? 
                                                                        "텍스트 입력": (option.optionImage&&option.optionList.length===optionList.optionListId? "이미지 입력" : "품목"+optionList.optionListId+" 입력")}
                                                                value={
                                                                    optionList.optionListName.split("&")[0] === "텍스트"? 
                                                                        optionList.optionListName.split("&")[1]: 
                                                                        (option.optionImage&&option.optionList.length===optionList.optionListId? 
                                                                            option.optionImageText.split("&")[1]: 
                                                                            optionList.optionListName)}
                                                                onChange={(e)=>{
                                                                    if (option.optionImage&&option.optionList.length===optionList.optionListId)
                                                                        updateOption[option.optionId-1].optionImageText = "이미지&"+e.target.value;
                                                                    else if (optionList.optionListName.split("&")[0] === "텍스트") 
                                                                        handleOptionListNameText(e, option.optionId, optionList.optionListId);
                                                                    else
                                                                        handleOptionListName(e, option.optionId, optionList.optionListId);
                                                                        NumF();
                                                                }}
                                                            />
                                                        </div>
                                                        <input
                                                            id={"spm-update-price-option-list-"+option.optionId+"-"+optionList.optionListId}
                                                            className="spm-add-update-item-price"
                                                            type="text"
                                                            placeholder="0"
                                                            value={MakePrice(optionList.optionListPrice)}
                                                            onChange={(e)=>{handleOptionListPrice(e, option.optionId, optionList.optionListId)}}
                                                        />원
                                                        <div
                                                            id={"spm-none-"+optionList.optionListId}
                                                            className="spm-add-update-item-right"
                                                            onClick={()=>{
                                                                for (var i = optionList.optionListId-1; i < option.optionList.length-1; i++) {
                                                                    updateOption[option.optionId-1].optionList[i] = updateOption[option.optionId-1].optionList[i+1];
                                                                    updateOption[option.optionId-1].optionList[i].optionListId = i+1;
                                                                }
                                                                updateOption[option.optionId-1].optionList.pop();
                                                                if (option.optionImage&&option.optionList.length===optionList.optionListId)
                                                                    updateOption[option.optionId-1].optionImage = false;
                                                                NumF();
                                                            }}>x
                                                        </div>
                                                    </div>
                                                );
                                            })} */}
                                            <div className="spm-add-update-item-button">
                                                <div
                                                    onClick={()=>{
                                                        // updateOption[option.optionId-1].optionList[option.optionList.length] = {
                                                        //     optionListId: option.optionList.length+1,
                                                        //     optionListName: "",
                                                        //     optionListPrice: 0,
                                                        // };
                                                        // NumF();
                                                    }}>+&nbsp;품목 추가
                                                </div>
                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        // updateOption[option.optionId-1].optionList[option.optionList.length] = {
                                                        //     optionListId: option.optionList.length+1,
                                                        //     optionListName: "",
                                                        //     optionListPrice: 0,
                                                        // };
                                                        // if (option.optionImage)
                                                        //     updateOption[option.optionId-1].optionList[option.optionList.length-2].optionListName = "텍스트&"
                                                        // else 
                                                        //     updateOption[option.optionId-1].optionList[option.optionList.length-1].optionListName = "텍스트&"
                                                        // NumF();
                                                    }}>'텍스트' 추가
                                                </div>

                                            </div>

                                        </form>
                                    );
                                })}
                                <hr className="spm-add-update-hr"/>
                                <button
                                    className="spm-add-update-button"
                                    onClick={()=>{
                                        updateOption[updateOption.length] = {
                                            optionNumber: updateOption.length,
                                            optionName: "",
                                            itemList: [
                                                {
                                                    optionId: -1,
                                                    itemNumber: 0,
                                                    itemWhat: "normal",
                                                    additionalCost: 0,
                                                    category: "SIZE",
                                                    categoryTitle: "",
                                                    child: {},
                                                    contents: "",
                                                },
                                            ],
                                        };
                                        console.log(updateOption);
                                        NumF();
                                    }}>
                                    + 옵션 추가
                                </button>
                            </>
                        </div>
                    </div>
                </div>

                <div className="pc spm-tap">
                    <button
                        onClick={()=>{
                            oriShow[idx] = true;
                            NumF();
                        }}>
                        <CloseBtn/>
                    </button>
                </div>
            </div>
            </>
    );   
}

export default SPM_Update;