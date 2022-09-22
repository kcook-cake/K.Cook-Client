import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
// import axios from 'axios';
import $ from 'jquery';
import 'src/styles/seller/spm-ssr/SPM_Add_Update.scss';

import { ReactComponent as DragBtn } from 'src/assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from 'src/assets/seller/drag-column-btn.svg';
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from 'src/assets/seller/closebtn.svg';
import leftArrow from 'src/assets/left-arrow.svg';
import rightArrow from 'src/assets/right-arrow.svg';

import ImageModal from './modal/ImageModal';
import MakePrice from 'src/utils/MakePrice';

interface Props {
    NumF: any,
    resize: any,

    addShow: any,
    setAddShowF: any,
}

const axios = require('axios');
function SPMCard_Add({ NumF, resize, addShow, setAddShowF }: Props) {
    // const [num, setNum] = useState(0);
    const addPhoto = useRef(null);

    //Add
    const Add = () => {
        var index = 0;
        var c = '';
        var jlength = 0;
        for (var i = 0; i < addOption.length; i++) {
            if (addOption[i].optionName === '크기') c = 'SIZE';
            else if (addOption[i].optionName === '맛') c = 'TASTE';
            else if (addOption[i].optionName === '레터링') c = 'LOWER_LETTERING';
            else if (addOption[i].optionName === '색상') c = 'COLOR';
            else if (addOption[i].optionName === '초') c = 'CANDLE';
            else c = 'ETC';

            if (addOption[i].optionImage) jlength = addOption[i].optionList.length - 1;
            else jlength = addOption[i].optionList.length;

            for (var j = 0; j < jlength; j++) {
                addBack[index] = {
                additionalCost: addOption[i].optionList[j].optionListPrice,
                category: c,
                contents: addOption[i].optionList[j].optionListName,
                imageUrl: "",
                title: addOption[i].optionName,
                };
                index++;
            }
            if (addOption[i].optionImage) {
                addBack[index] = {
                    additionalCost: addOption[i].optionList[jlength].optionListPrice,
                    category: c,
                    contents: addOption[i].optionImageText,
                    imageUrl: "",
                    title: addOption[i].optionName,
                };
                index++;
            }
        }

        axios({
            url: "app/products",
            method: "POST",
            data: {
                isCake: true,
                name: addName,
                newOptionsList: addBack,
                price: addPrice,
                salePrice: 0, //show
            },
            headers: {
                'Content-Type': 'application/json',
                'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
            },
        }).then((res: any)=>{
            alert('추가 성공');
            setAddShowF(false);
        }).catch((err: any)=>{
            alert('추가 실패');
        })
    };
    const [addDiv, setAddDiv] = useState(false);
    const [addImageModal, setAddImageModal] = useState(false);
    const [addFormData, setAddFormData] = useState(null);
    const [addImage, setAddImage] = useState(['','','','','']);
    
    const [addImageNum, setAddImageNum] = useState(0);
    const [addName, setAddName] = useState('');
    const [addPrice, setAddPrice] = useState(0);
    const [addOption, setAddOption] = useState<any>([
        {
          optionId: 1,
          optionName: '크기',
          optionList: [
            {
              optionListId: 1,
              optionListName: '1호',
              optionListPrice: 0,
            },
          ],
          optionImage: false,
          optionImageText: '',
        },
    ]);
    const [addBack, setAddBack] = useState<any>([]);



    const handleAddName = (e: any) => {
        setAddName(e.target.value);
    };
    const handleAddPrice = (e: any) => {
        setAddPrice(e.target.value.replace(/[^0-9]/g, ""));
    };

    const handleOptionName = (e: any, optionId: any, ) => {
        addOption[optionId-1].optionName = e.target.value;
        NumF();
        setAddOption(addOption);
    };
    const handleOptionListNameText = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId-1].optionList[optionListId-1].optionListName = "텍스트&"+e.target.value;
        NumF();
        setAddOption(addOption);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        NumF();
        setAddOption(addOption);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(e.target.value.replace(/[^0-9]/g, ""));
        NumF();
        setAddOption(addOption);
    };

    const [startDrag, setStartDrag] = useState(0);
    useEffect(()=>{
    },[]);
    
    return (
        <>
            <ImageModal
                NumF={()=>NumF()} resize={resize} TF={true}
                imageModalShow={addImageModal} setImageModalShowF={setAddImageModal}
                imageData={addImage} 
            />

            <div className="spm-add-update">
              <div className="spm-add-update-inner">
                <div className="move-tap" onClick={Add}>
                    <DragBtn />
                </div>

                <div className="spm-add-update-content">
                    <div>
                        <div
                            className="spm-add-update-img"
                            onClick={() => setAddImageModal(true)}>
                            <div className="spm-add-update-img-inner">
                                {addImage[addImageNum] === '' ? (
                                    <div className="spmcard-img-inner">
                                        <AddIcon/>
                                    </div>):
                                    <img src={addImage[addImageNum]} />
                                }
                            </div>
                        </div>
                        <div className='spm-add-update-img-bar'>
                            <ul style={{ display: "flex", }}>
                                {[0, 1, 2, 3, 4].map((data: any,)=>{
                                    return (
                                        <li 
                                            className={classNames('spm-add-update-dot', {
                                                'spm-add-update-dot-active': addImageNum===data,
                                            })}
                                            onClick={()=>{
                                                setAddImageNum(data);
                                            }}>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div> {/* spmcard-content-inner */}
                        <div style={{ display: 'flex' }}>
                            <input
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
                                className="spm-add-update-price-inner"
                                type="text"
                                placeholder="0"
                                value={MakePrice(addPrice)}
                                onChange={handleAddPrice}
                            />
                            원
                            <div className="spm-add-update-item-right">x</div>
                        </div>

                        {addOption.map((option: { optionId: any, optionName: any, optionList: any, optionImage: any, optionImageText: any, })=>{
                            return (
                                <form>
                                    <div className="spm-add-update-option">
                                        <input
                                            className="spm-add-update-title"
                                            placeholder={"옵션"+option.optionId+" 이름"}
                                            value={option.optionName}
                                            onChange={(e)=> {handleOptionName(e, option.optionId)}}
                                        />
                                        <div
                                            id={"spm-none-"+option.optionId}
                                            className="spm-add-update-right"
                                            onClick={()=>{
                                                for (var i = option.optionId-1; i < addOption.length-1; i++) {
                                                    addOption[i] = addOption[i+1];
                                                    addOption[i].optionId = i+1;
                                                }
                                                addOption.pop();
                                                NumF();
                                                setAddOption(addOption);
                                            }}>x
                                        </div>
                                    </div>
                                    <>
                                        {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, }, )=>{
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

                                                                    for (var i=n+1; i>1; i--) 
                                                                        addOption[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                    
                                                                    addOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                    addOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            } else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                && ((n+optionList.optionListId != option.optionList.length+1 && !option.optionImage) 
                                                                || (n+optionList.optionListId != option.optionList.length && option.optionImage))) {
                                                                    
                                                                    for (var i=n; i>0; i--) 
                                                                        addOption[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                    
                                                                    addOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                    addOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            }
                                                            NumF();
                                                            setAddOption(addOption);
                                                        }}
                                                        draggable={true}>
                                                        <DragCBtn className="spm-add-update-item-left-icon"/>
                                                    </div>
                                                    <div style={{ width: "100%", }}>
                                                        <input
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
                                                                    addOption[option.optionId-1].optionImageText = "이미지&"+e.target.value;
                                                                else if (optionList.optionListName.split("&")[0] === "텍스트") 
                                                                    handleOptionListNameText(e, option.optionId, optionList.optionListId);
                                                                else  
                                                                    handleOptionListName(e, option.optionId, optionList.optionListId);

                                                                NumF();
                                                                setAddOption(addOption);
                                                            }}
                                                        />
                                                    </div>
                                                    <input
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
                                                                addOption[option.optionId-1].optionList[i] = addOption[option.optionId-1].optionList[i+1];
                                                                addOption[option.optionId-1].optionList[i].optionListId = i+1;
                                                            }
                                                            if ((option.optionImage&&option.optionList.length===optionList.optionListId)) {
                                                                addOption[option.optionId-1].optionImage = false;
                                                            }
                                                            addOption[option.optionId-1].optionList.pop();

                                                            NumF();
                                                            setAddOption(addOption);
                                                        }}>x
                                                    </div>
                                                    
                                                </div>
                                            )
                                        })}
                                        <div className="spm-add-update-item-button">
                                            <div
                                                onClick={()=>{
                                                    addOption[option.optionId-1].optionList[option.optionList.length] = {
                                                        optionListId: option.optionList.length+1,
                                                        optionListName: "",
                                                        optionListPrice: 0,
                                                    };
                                                    
                                                    NumF();
                                                    setAddOption(addOption);
                                                }}>+&nbsp;품목 추가
                                            </div>
                                            <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                            <div
                                                style={{ color: "#ea5450", }}
                                                onClick={()=>{
                                                    addOption[option.optionId-1].optionList[option.optionList.length] = {
                                                        optionListId: option.optionList.length+1,
                                                        optionListName: "",
                                                        optionListPrice: 0,
                                                    };
                                                    if (option.optionImage)
                                                        addOption[option.optionId-1].optionList[option.optionList.length-2].optionListName = "텍스트&"
                                                    else 
                                                        addOption[option.optionId-1].optionList[option.optionList.length-1].optionListName = "텍스트&"

                                                    NumF();
                                                    setAddOption(addOption);
                                                }}>'텍스트' 추가
                                            </div>
                                            
                                            {option.optionImage? null:
                                            <>
                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        addOption[option.optionId-1].optionList[option.optionList.length] = {
                                                            optionListId: option.optionList.length+1,
                                                            optionListName: "",
                                                            optionListPrice: 0,
                                                        };
                                                        addOption[option.optionId-1].optionImage = true;
                                                        addOption[option.optionId-1].optionImageText = "이미지&";

                                                        NumF();
                                                        setAddOption(addOption);
                                                    }}>'이미지' 추가
                                                </div>
                                            </>
                                            }
                                        </div>
                                    </>
                                </form>
                            );
                        })}

                        <hr className="spm-add-update-hr"/>
                        <button
                            className="spm-add-update-button"
                            onClick={()=>{
                                addOption[addOption.length] = {
                                    optionId: addOption.length+1,
                                    optionName: "",
                                    optionList: [
                                        {
                                            optionListId: 1,
                                            optionListName: "",
                                            optionListPrice: 0,
                                        },
                                    ],
                                    optionImage: false,
                                    optionImageText: "",
                                };
                                NumF();
                                setAddOption(addOption);
                            }}>
                            + 옵션 추가
                        </button>
                        
                    </div>
                </div>
              </div>

              <div className="pc spm-tap">
                <button
                    onClick={() => {
                        setAddShowF(false);
                        NumF();
                    }}>
                  <CloseBtn />
                </button>
                {/* <label className="switch-button">
                    <input id='studies_togetherTrue' type='checkbox' onClick={() => {
                    }}/>
                    <span className="onoff-switch"></span>
                </label> */}
              </div>
            </div>
        </>
    );
}

export default SPMCard_Add;