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

interface Props {
    idx: any,
    num: any,
    setNum: any,
    resize: any,

    oriShow: any,
    getUpdateData: any,
    getUpdateImage: any,
}

function SPM_Update({ 
        idx, num, setNum, resize, 
        oriShow, getUpdateData, getUpdateImage,
    }: Props) {
    const addPhoto = useRef(null);
    const [addFormData, setAddFormData] = useState(null);
    
    const handleAddName = (e: any, ) => {
        updateData.name = e.target.value;
    };
    const handleAddPrice = (e: any, ) => {
        updateData.price = e.target.value;
    };
    
    const handleOptionName = (e: any, optionId: any, ) => {
        updateData.list[optionId-1].optionName = e.target.value;
    };
    const handleOptionListNameText = (e: any, optionId: any, optionListId: any, ) => {
        updateData.list[optionId-1].optionList[optionListId-1].optionListName = "텍스트&"+e.target.value;
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        updateData.list[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        var evalue = e.target.value;
        updateData.list[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(evalue);
    };



    const [updateImageModal, setUpdateImageModal] = useState(false);
    const [updateImage, setUpdateImage] = useState([
        getUpdateImage[0],
        getUpdateImage[1],
        getUpdateImage[2],
        getUpdateImage[3],
        getUpdateImage[4],
    ]);
    const [updateImageNum, setUpdateImageNum] = useState(0);
    const [updateData, setUpdateData] = useState({
        name: getUpdateData.name,
        image: getUpdateData.image,
        price: getUpdateData.price,
        list: getUpdateData.list,
    });

    const [startDrag, setStartDrag] = useState(0);
    useEffect(()=>{
        $('#spm-update-name').val(updateData.name);
        $('#spm-update-price').val(updateData.price);
        for (var i=0; i<updateData.list.length; i++) {
            $('#spm-update-option-'+(i+1)).val(updateData.list[i].optionName);
            for (var j=0; j<updateData.list[i].optionList.length; j++) {
                if (updateData.list[i].optionList[j].optionListName.split("&")[0] === "텍스트")
                    $('#spm-update-name-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListName.split("&")[1]);
                else if (updateData.list[i].optionImage&&updateData.list[i].optionList.length===updateData.list[i].optionList[j].optionListId)
                    $('#spm-update-name-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionImageText);
                else
                    $('#spm-update-name-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListName);
                $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListPrice);
                // if (updateData.list[i].optionDirect&&updateData.list[i].optionList.length===updateData.list[i].optionList[j].optionListId)
                //     $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionDirectText);
                // else
                //     $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListPrice);
            }
        }
    },[]);
    
    return (
        <>
            <ImageModal
                NumF={()=>setNum(num+1)} resize={resize} TF={false}
                imageModalShow={updateImageModal} setImageModalShowF={setUpdateImageModal}
                imageData={updateImage}
            />

            <div className="spm-add-update">
                <div className="spm-add-update-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = true;
                            setNum(num+1);
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
                                    {updateImage[updateImageNum]===""?
                                        <div className="spmcard-img-inner">
                                            <AddIcon/>
                                        </div>:
                                        <img src={updateImage[updateImageNum]} />
                                    }
                                </div>
                            </div>
                            <div>
                                <ul style={{ display: "flex", }}>
                                    {[0, 1, 2, 3, 4].map((data: any,)=>{
                                        return (
                                            <li 
                                                className={classNames('spm-add-update-dot', {
                                                    'spm-add-update-dot-active': updateImageNum===data,
                                                })}
                                                onClick={()=>{
                                                    setUpdateImageNum(data);
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
                                    type="number"
                                    placeholder="0"
                                    onChange={handleAddPrice}
                                />원
                                <div className="spm-add-update-right">x</div>
                            </div>
                            <>
                                {updateData.list.map((option: { optionId: any, optionName: any, optionList: any, optionImage: any, optionImageText: any, })=>{
                                    return (
                                        <form>
                                            <div className="spm-add-update-option">
                                                <input
                                                    id={"spm-update-option-"+option.optionId}
                                                    className="spm-add-update-title"
                                                    placeholder={"옵션"+option.optionId+" 이름"}
                                                    // value={option.optionName}
                                                    onChange={(e)=> {handleOptionName(e, option.optionId)}}
                                                />
                                                <div
                                                    id={"spm-none-"+option.optionId}
                                                    className="spm-add-update-right"
                                                    onClick={()=>{
                                                        for (var i = option.optionId-1; i < updateData.list.length-1; i++) {
                                                            updateData.list[i] = updateData.list[i+1];
                                                            updateData.list[i].optionId = i+1;
                                                        }
                                                        updateData.list.pop();
                                                        setNum(num+1);
                                                    }}>x
                                                </div>
                                            </div>

                                            {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
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
                                                                            updateData.list[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                        }
                                                                        updateData.list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                        updateData.list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                    && ((n+optionList.optionListId != option.optionList.length+1 && !option.optionImage) 
                                                                    || (n+optionList.optionListId != option.optionList.length && option.optionImage))) {
                                
                                                                        for (var i=n; i>0; i--) {
                                                                            updateData.list[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                        }
                                                                        updateData.list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                        updateData.list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                setNum(num+1);
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
                                                                        updateData.list[option.optionId-1].optionImageText = "이미지&"+e.target.value;
                                                                    else if (optionList.optionListName.split("&")[0] === "텍스트") 
                                                                        handleOptionListNameText(e, option.optionId, optionList.optionListId);
                                                                    else
                                                                        handleOptionListName(e, option.optionId, optionList.optionListId);
                                                                    setNum(num+1);
                                                                }}
                                                            />
                                                        </div>
                                                        <input
                                                            id={"spm-update-price-option-list-"+option.optionId+"-"+optionList.optionListId}
                                                            className="spm-add-update-item-price"
                                                            type="number"
                                                            placeholder="0"
                                                            // value={optionList.optionListPrice}
                                                            onChange={(e)=>{handleOptionListPrice(e, option.optionId, optionList.optionListId)}}
                                                        />원
                                                        <div
                                                            id={"spm-none-"+optionList.optionListId}
                                                            className="spm-add-update-item-right"
                                                            onClick={()=>{
                                                                for (var i = optionList.optionListId-1; i < option.optionList.length-1; i++) {
                                                                    updateData.list[option.optionId-1].optionList[i] = updateData.list[option.optionId-1].optionList[i+1];
                                                                    updateData.list[option.optionId-1].optionList[i].optionListId = i+1;
                                                                }
                                                                updateData.list[option.optionId-1].optionList.pop();
                                                                if (option.optionImage&&option.optionList.length===optionList.optionListId)
                                                                    updateData.list[option.optionId-1].optionImage = false;
                                                                setNum(num+1);
                                                            }}>x
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div className="spm-add-update-item-button">
                                                <div
                                                    onClick={()=>{
                                                        updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                            optionListId: option.optionList.length+1,
                                                            optionListName: "",
                                                            optionListPrice: 0,
                                                        };
                                                        setNum(num+1);
                                                    }}>+&nbsp;품목 추가
                                                </div>
                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                            optionListId: option.optionList.length+1,
                                                            optionListName: "",
                                                            optionListPrice: 0,
                                                        };
                                                        if (option.optionImage)
                                                            updateData.list[option.optionId-1].optionList[option.optionList.length-2].optionListName = "텍스트&"
                                                        else 
                                                            updateData.list[option.optionId-1].optionList[option.optionList.length-1].optionListName = "텍스트&"
                                                        setNum(num+1);
                                                    }}>'텍스트' 추가
                                                </div>

                                                {option.optionImage? null:
                                                    <>
                                                        <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                        <div
                                                            style={{ color: "#ea5450", }}
                                                            onClick={()=>{
                                                                updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                                    optionListId: option.optionList.length+1,
                                                                    optionListName: "",
                                                                    optionListPrice: 0,
                                                                };
                                                                updateData.list[option.optionId-1].optionImage = true;
                                                                updateData.list[option.optionId-1].optionImageText = "이미지&";
                                                                setNum(num+1);
                                                            }}>'이미지' 추가
                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </form>
                                    );
                                })}
                                <hr className="spm-add-update-hr"/>
                                <button
                                    className="spm-add-update-button"
                                    onClick={()=>{
                                        updateData.list[updateData.list.length] = {
                                            optionId: updateData.list.length+1,
                                            optionName: "",
                                            optionList: [
                                                {
                                                    optionListId: 1,
                                                    optionListName: "",
                                                    optionListPrice: 0,
                                                },
                                            ],
                                            optionDirect: false,
                                            optionDirectText: "",
                                        };
                                        setNum(num+1);
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
                            setNum(num+1);
                        }}>
                        <CloseBtn/>
                    </button>
                </div>
            </div>
            </>
    );   
}

export default SPM_Update;