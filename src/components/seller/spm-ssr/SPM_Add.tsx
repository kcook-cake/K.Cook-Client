import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/seller/spm-ssr/SPMCard.scss';
import 'src/styles/seller/spm-ssr/SPM_Add_Update.scss';

import { ReactComponent as DragBtn } from 'src/assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from 'src/assets/seller/drag-column-btn.svg';
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from 'src/assets/seller/closebtn.svg';
import leftArrow from 'src/assets/left-arrow.svg';
import rightArrow from 'src/assets/right-arrow.svg';

import ImageModal from './modal/ImageModal';
import MakePrice from 'src/utils/MakePrice';
import Option2List from './fn/Option2List';

interface Props {
    NumF: any,
    resize: any,

    setAddShowF: any,
}

function SPMCard_Add({ NumF, resize, setAddShowF }: Props) {
    //Add
    const Add = () => {
        console.log(Option2List(addOption));
        //productId 102
        // axios({
        //     url: "app/products",
        //     method: "POST",
        //     data: {
        //         "isCake": true,
        //         "isOriginShow": false,
        //         "isTodayShow": false,
        //         "maxOfToday": addMax,
        //         "isTodayCake": addTodayCake,
        //         "name": addName,
        //         "newOptionsList": Option2List(addOption),
        //         "price": addPrice,
        //         "salePrice": 0,
        //         "todaySaleNumber": 0
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
        //     },
        // }).then((res: any)=>{
        //     console.log(res);
        //     alert('추가 성공');
        //     setAddShowF(false);
        // }).catch((err: any)=>{
        //     alert('추가 실패');
        // })
    };
    const [addImgModal, setAddImgModal] = useState(false);
    const [addImage, setAddImage] = useState(['','','','','']);
    const [addImgNum, setAddImgNum] = useState(0);
    
    const [addTodayCake, setAddTodayCake] = useState(false);
    const [maxOfToday, setMaxOfToday] = useState(false);
    let [addMax, setAddMax] = useState(1000);

    const [addChildOption, setAddChildOption] = useState(-1);
    const [addChildItem, setAddChildItem] = useState(-1);
    const [addName, setAddName] = useState('');
    const [addPrice, setAddPrice] = useState(0);
    let [addOption, setAddOption] = useState<any>([
        {
            optionNumber: 0,
            optionName: '사이즈',
            optionCategory: '',
            itemList: [{
                itemNumber: 0,
                itemType: "normal",
                itemName: "1호",
                itemPrice: 0,
                itemChild: [],
            }],
        },
    ]);



    const handleAddName = (e: any) => {
        setAddName(e.target.value);
    };
    const handleAddPrice = (e: any) => {
        setAddPrice(e.target.value.replace(/[^0-9]/g, ""));
    };

    const handleOptionName = (e: any, optionId: any, ) => {
        addOption[optionId].optionCategory = e.target.value;
        NumF();
        setAddOption(addOption);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId].itemList[optionListId].itemName = e.target.value;
        NumF();
        setAddOption(addOption);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId].itemList[optionListId].itemPrice = parseInt(e.target.value.replace(/[^0-9]/g, ""));
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
                imageModalShow={addImgModal} setImageModalShowF={setAddImgModal}
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
                                onClick={() => setAddImgModal(true)}>
                                <div className="spm-add-update-img-inner">
                                    {addImage[addImgNum]==='' || addImage[addImgNum]===null || addImage[addImgNum]===undefined ? (
                                        <div className="spmcard-img-inner">
                                            <AddIcon/>
                                        </div>):
                                        <img src={addImage[addImgNum]} />
                                    }
                                </div>
                            </div>
                            <div className='spm-add-update-img-bar'>
                                <ul style={{ display: "flex", }}>
                                    {[0, 1, 2, 3, 4].map((data: any,)=>{
                                        return (
                                            <li 
                                                className={classNames('spm-add-update-dot', {
                                                    'spm-add-update-dot-active': addImgNum===data,
                                                })}
                                                onClick={()=>{
                                                    setAddImgNum(data);
                                                }}>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='spm-add-update-today-cake'>
                                <input type='checkbox' id='spm-add' onChange={(e)=>setAddTodayCake(e.target.checked)}/>
                                <label htmlFor='spm-add'></label>
                                <div>당일 케이크</div>
                            </div>
                            <div className='spm-add-update-show'>
                                <input 
                                    type='checkbox' 
                                    id='spm-add-select' 
                                    onChange={(e)=>{
                                        setMaxOfToday(e.target.checked);
                                        if (maxOfToday) setAddMax(1000);
                                        else setAddMax(1);
                                    }} 
                                />
                                <label htmlFor='spm-add-select'></label>
                                <div className={!maxOfToday? 'spm-add-update-show-none': ''}>제한
                                    <input 
                                        type={maxOfToday? 'number': 'text'} 
                                        max={1000} min={1} 
                                        value={maxOfToday? addMax: "무한"}
                                        onChange={(e)=>setAddMax(parseInt(e.target.value))}/>
                                    개
                                </div>
                            </div>
                        </div>

                        <div> {/* spmcard-content-inner */}
                            {addChildOption>-1&& 
                                <div className='spm-add-update-child-modal'>
                                    {addOption.map((option2: {optionNumber: any, itemList: any, })=>{
                                        return (
                                            <>
                                                {addChildOption < option2.optionNumber&&
                                                    <div 
                                                        className={classNames({
                                                            'spm-add-update-child-modal-none' : 
                                                            (addOption[addChildOption].itemList[addChildItem].itemChild.find((data: any)=>{
                                                                if (data.type === option2.optionNumber && data.array.length === option2.itemList.length) return true;
                                                            }) !== undefined&& true),
                                                        })}
                                                        onClick={()=>{
                                                            var child = addOption[addChildOption].itemList[addChildItem].itemChild;
                                                            for (var i=0; i< child.length; i++) {
                                                                if (child[i].type === option2.optionNumber) {
                                                                    if (child[i].array.length === option2.itemList.length) {
                                                                        child.splice(i, i+1);
                                                                        setAddChildOption(-1);
                                                                        return;
                                                                    }
                                                                    for (var j=0; j<option2.itemList.length; j++) {
                                                                        child[i].array.push(j);
                                                                    }
                                                                    child[i].array = Array.from(new Set(child[i].array));
                                                                    setAddChildOption(-1);
                                                                    return;
                                                                }
                                                            }
                                                            child.push({
                                                                type: option2.optionNumber,
                                                                array: [],
                                                            });
                                                            for (var i=0; i<option2.itemList.length; i++) {
                                                                child[child.length-1].array.push(i);
                                                            }
                                                            setAddChildOption(-1);
                                                            return;
                                                        }}>
                                                        건너뛰기
                                                    </div>
                                                }
                                                {option2.itemList.map((item2: {itemNumber: any, itemName: any, })=>{
                                                    return (
                                                        (addChildOption < option2.optionNumber&&
                                                            <div 
                                                                className={classNames('', {
                                                                    'spm-add-update-child-modal-none': 
                                                                    (addOption[addChildOption].itemList[addChildItem].itemChild.find((data: any)=>{
                                                                        if (
                                                                            data.array.find((data2: any)=>{
                                                                                if (data.type === option2.optionNumber && data2 === item2.itemNumber) return true;
                                                                            }) !== undefined
                                                                        ) return true;
                                                                    }) !== undefined&& true),
                                                                })}
                                                                onClick={()=>{
                                                                    var child = addOption[addChildOption].itemList[addChildItem].itemChild;
                                                                    for (var i=0; i< child.length; i++) {
                                                                        if (child[i].type === option2.optionNumber) {
                                                                            for (var j=0; j<child[i].array.length; j++) {
                                                                                if (child[i].array[j] === item2.itemNumber) {
                                                                                    child[i].array.splice(j, j+1);
                                                                                    if (child[i].array.length === 0) child.splice(i, i+1);
                                                                                    setAddChildOption(-1);
                                                                                    return;
                                                                                }
                                                                            }
                                                                            child[i].array.push(item2.itemNumber);
                                                                            setAddChildOption(-1);
                                                                            return;
                                                                        }
                                                                    }
                                                                    child.push({
                                                                        type: option2.optionNumber,
                                                                        array: [item2.itemNumber],
                                                                    });
                                                                    setAddChildOption(-1);
                                                                }}>
                                                                {option2.optionNumber+1+"-"}
                                                                {item2.itemNumber+1}
                                                            </div>
                                                        )
                                                    );
                                                })}
                                            </>
                                        );
                                    })}
                                </div>
                            }
                            <div style={{ display: 'flex' }}>
                                <input
                                    className="spm-add-update-main-title spm-add-update-title"
                                    placeholder="상품명"
                                    onChange={handleAddName}
                                />
                                <div className="spm-add-update-right">x</div>
                            </div>
                            <div className="spm-add-update-price" style={{ margin: "0", }}>
                                <div className="spm-add-update-item-left">
                                    <DragCBtn className="spm-add-update-item-left-icon"/>
                                </div>
                                <div style={{ width: "100%", }}>
                                    <input className="spm-add-update-item-text" style={{ pointerEvents: "none", }}/>
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

                            {addOption.map((option: { optionNumber: any, optionName: any, itemList: any, })=>{
                                return (
                                    <form>
                                        <div style={{ marginLeft: "33px", marginBottom: "5px", }}>{"옵션"+(option.optionNumber+1)+"."}</div>
                                        <div className="spm-add-update-option">
                                            <div>
                                                <select 
                                                    onChange={(e)=>{
                                                        addOption[option.optionNumber].optionName = e.target.value;
                                                        setAddOption(addOption);
                                                        NumF();
                                                    }}>
                                                    <option>사이즈</option>
                                                    <option>맛</option>
                                                    <option>색상</option>
                                                    <option>디자인</option>
                                                    <option>사이드데코</option>
                                                    <option>데코</option>
                                                    <option>레터링</option>
                                                    <option>글씨체</option>
                                                    <option>글씨크기</option>
                                                    <option>사진</option>
                                                    <option>포장</option>
                                                    <option>초</option>
                                                </select>
                                                <input 
                                                    placeholder={"옵션 세부 입력"}
                                                    value={addOption[option.optionNumber].optionCategory}
                                                    onChange={(e)=> {handleOptionName(e, option.optionNumber)}}
                                                />
                                            </div>
                                            <div
                                                className="spm-add-update-right"
                                                onClick={()=>{
                                                    for (var i = option.optionNumber; i < addOption.length-1; i++) {
                                                        addOption[i] = addOption[i+1];
                                                        addOption[i].optionNumber = i;
                                                    }
                                                    addOption.pop();
                                                    setAddOption(addOption);
                                                    NumF();
                                                }}>x
                                            </div>
                                        </div>
                                        <>
                                            {option.itemList.map((item: { itemNumber: any, itemName: any, itemPrice: any, itemType: any, itemChild: any, }, )=>{
                                                return (
                                                    <div className="spm-add-update-item">
                                                        <div
                                                            className="spm-add-update-item-left"
                                                            onDragStart={(e)=>{
                                                                setStartDrag(e.clientY);
                                                            }}
                                                            onDragEnd={(e)=>{
                                                                var n = Math.ceil((Math.abs(startDrag-e.clientY)-45)/45);
                                                                //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                                                if (n <= item.itemNumber && 56 <= startDrag-e.clientY && item.itemNumber != 0) {
                                                                    for (var i=n; i>0; i--)
                                                                        addOption[option.optionNumber].itemList[item.itemNumber-i].itemNumber = item.itemNumber-(i-1);
                                                                    
                                                                    addOption[option.optionNumber].itemList[item.itemNumber].itemNumber = item.itemNumber-n;
                                                                    addOption[option.optionNumber].itemList.sort((a:any, b:any) => {
                                                                        if (a.itemNumber < b.itemNumber) return -1;
                                                                        if (a.itemNumber > b.itemNumber) return 1;
                                                                        return 0;
                                                                    });
                                                                }
                                                                else if (n <= option.itemList.length-1-item.itemNumber && startDrag-e.clientY <= -56 && item.itemNumber != option.itemList.length-1) {
                                                                    for (var i=n; i>0; i--) 
                                                                        addOption[option.optionNumber].itemList[item.itemNumber+i].itemNumber = item.itemNumber+(i-1);
                                                                        
                                                                    addOption[option.optionNumber].itemList[item.itemNumber].itemNumber = item.itemNumber+n;
                                                                    addOption[option.optionNumber].itemList.sort((a:any, b:any) => {
                                                                        if (a.itemNumber < b.itemNumber) return -1;
                                                                        if (a.itemNumber > b.itemNumber) return 1;
                                                                        return 0;
                                                                    });
                                                                }
                                                                setAddOption(addOption);
                                                                NumF();
                                                            }}
                                                            draggable={true}>
                                                            <DragCBtn className="spm-add-update-item-left-icon"/>
                                                        </div>
                                                        {(item.itemNumber+1)+"."}&nbsp;
                                                        <div className="spm-add-update-item-text-flex">
                                                            <input
                                                                className="spm-add-update-item-text"
                                                                type="text"
                                                                placeholder={
                                                                    item.itemType === "normal"? 
                                                                        "품목"+(item.itemNumber+1)+" 입력": 
                                                                        (item.itemType === "text"?
                                                                            "텍스트 입력":
                                                                            "이미지 입력")
                                                                }
                                                                value={item.itemName}
                                                                onChange={(e)=>{
                                                                    handleOptionListName(e, option.optionNumber, item.itemNumber);
                                                                    setAddOption(addOption);
                                                                    NumF();
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className='spm-add-update-child' 
                                                            onClick={()=>{
                                                                if (addChildOption>-1) setAddChildOption(-1);
                                                                else setAddChildOption(option.optionNumber);
                                                                setAddChildItem(item.itemNumber);
                                                            }}>
                                                            이동
                                                        </div>
                                                        <input
                                                            className="spm-add-update-item-price"
                                                            type="text"
                                                            placeholder="0"
                                                            value={MakePrice(item.itemPrice)}
                                                            onChange={(e)=>{handleOptionListPrice(e, option.optionNumber, item.itemNumber)}}
                                                        />원
                                                        <div
                                                            className="spm-add-update-item-right"
                                                            onClick={()=>{
                                                                for (var i = item.itemNumber; i < option.itemList.length-1; i++) {
                                                                    addOption[option.optionNumber].itemList[i] = addOption[option.optionNumber].itemList[i+1];
                                                                    addOption[option.optionNumber].itemList[i].itemNumber = i;
                                                                }
                                                                addOption[option.optionNumber].itemList.pop();

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
                                                        addOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "normal",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        setAddOption(addOption);
                                                        NumF();
                                                    }}>+&nbsp;품목 추가
                                                </div>

                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        addOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "text",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        setAddOption(addOption);
                                                        NumF();
                                                    }}>'텍스트 입력' 추가
                                                </div>
                                                
                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        addOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "image",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        setAddOption(addOption);
                                                        NumF();
                                                    }}>'이미지 등록' 추가
                                                </div>

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
                                        optionNumber: addOption.length,
                                        optionName: "",
                                        itemList: [{
                                            itemNumber: 0,
                                            itemType: "normal",
                                            itemName: "",
                                            itemPrice: 0,
                                            itemChild: [],
                                        }],
                                    };
                                    setAddOption(addOption);
                                    NumF();
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