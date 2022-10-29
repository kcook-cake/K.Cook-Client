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
    idx: number,
    NumF: Function,
    resize: number[],

    oriShow: boolean[],
    getUpdateData: any,
}

function SPM_Update({ 
        idx, NumF, resize, 
        oriShow, getUpdateData,
    }: Props) {
    const addPhoto = useRef(null);
    const [addFormData, setAddFormData] = useState(null);
    
    const handleAddName = (e: React.ChangeEvent<HTMLInputElement>, ) => {
        setUpdateName(e.target.value);
    };
    const handleAddPrice = (e: React.ChangeEvent<HTMLInputElement>, ) => 
    {
        if (isNaN(parseInt(e.target.value))) {
            setUpdatePrice(0);
            return;
        }
        setUpdatePrice(e.target.value.replace(/[^0-9]/g, ""));
    };
    
    const handleOptionName = (e: React.ChangeEvent<HTMLInputElement>, optionId: number, ) => {
        updateOption[optionId].optionCategory = e.target.value;
        NumF();
    };
    const handleOptionListName = (e: React.ChangeEvent<HTMLInputElement>, optionId: number, optionListId: number, ) => {
        updateOption[optionId].itemList[optionListId].itemName = e.target.value;
        NumF();
    };
    const handleOptionListPrice = (e: React.ChangeEvent<HTMLInputElement>, optionId: number, optionListId: number, ) => {
        if (isNaN(parseInt(e.target.value))) {
            updateOption[optionId].itemList[optionListId].itemPrice = 0;
            return;
        }
        updateOption[optionId].itemList[optionListId].itemPrice = parseInt(e.target.value.replace(/[^0-9]/g, ""));
        NumF();
    };



    const [updateImgModal, setUpdateImgModal] = useState(false);
    const [updateImgNum, setUpdateImgNum] = useState(0);
    const [updateImg, setUpdateImg] = useState([
        getUpdateData.image1,
        getUpdateData.image2,
        getUpdateData.image3,
        getUpdateData.image4,
        getUpdateData.image5,
    ]);

    const [updateChildOption, setUpdateChildOption] = useState(-1);
    const [updateChildItem, setUpdateChildItem] = useState(-1);
    const [updateChildNext, setUpdateChildNext] = useState(-1);
    const [updateItemLen, setUpdateItemLen] = useState(0);
    const [updateName, setUpdateName] = useState(getUpdateData.name);
    const [updatePrice, setUpdatePrice] = useState(getUpdateData.price);
    const [updateOption, setUpdateOption] = useState<any>(getUpdateData.optionsList);

    const [startDrag, setStartDrag] = useState(0);
    useEffect(()=>{
    },[]);
    
    return (
        <>
            <ImageModal
                NumF={()=>NumF()} resize={resize} cakeId={getUpdateData.cakeId}
                setShowF={()=>{}} imageModalShow={updateImgModal} setImageModalShowF={setUpdateImgModal}
                imageData={updateImg} getData={getUpdateData}
            />

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
                                    setUpdateImgModal(true);
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
                                    {[0, 1, 2, 3, 4].map((data: any, idx: number)=>{
                                        return (
                                            <li 
                                                key={idx}
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
                            <div className='spm-add-update-today-cake'>
                                <input 
                                    type='checkbox' 
                                    id='spm-add'
                                    onChange={(e)=>{
                                        if (getUpdateData.todayCake) getUpdateData.todayCake = false;
                                        else getUpdateData.todayCake = true;
                                        NumF(); 
                                    }}
                                    checked={getUpdateData.todayCake}/>
                                <label htmlFor='spm-add'></label>
                                <div>당일 케이크</div>
                            </div>
                            <div className='spm-add-update-show'>
                                <input 
                                    type='checkbox' 
                                    id='spm-add-select' 
                                    onChange={(e)=>{
                                        if (getUpdateData.maxToday === 1000) getUpdateData.maxToday = 1;
                                        else getUpdateData.maxToday = 1000;
                                        NumF();
                                    }}
                                    checked={getUpdateData.maxToday === 1000? false: true}
                                />
                                <label htmlFor='spm-add-select'></label>
                                <div className={getUpdateData.maxToday === 1000? 'spm-add-update-show-none': ''}>제한
                                    <input 
                                        type={getUpdateData.maxToday === 1000? 'text': 'number'} 
                                        max={1000} min={1} 
                                        value={getUpdateData.maxToday === 1000? '무한': getUpdateData.maxToday}
                                        onChange={(e)=> {
                                            if (isNaN(parseInt(e.target.value))) {
                                                getUpdateData.maxToday = 1;
                                                return;
                                            }
                                            getUpdateData.maxToday = parseInt(e.target.value);
                                            NumF();
                                            // setUpdateMax(parseInt(e.target.value))
                                        }}/>
                                    개
                                </div>
                            </div>
                        </div>

                        {updateChildOption>-1&& updateChildOption !== updateOption.length-1&&
                            <div className='spm-add-update-child-modal' style={{ top: (230+updateChildOption*167+updateChildItem*45+updateItemLen*45)+"px", }}>
                                <div className='spm-add-update-child-modal-move'>이동</div>
                                {updateOption.map((option2: {optionNumber: any, itemList: any, }, idx: number)=>{
                                    return (
                                        <div key={idx}>
                                            {updateChildOption < option2.optionNumber&& updateChildNext === option2.optionNumber&&
                                                <>
                                                <div style={{ display: "flex", justifyContent: "center", }}>
                                                    <div
                                                        className={classNames('spm-add-update-child-modal-left', {
                                                            'spm-add-update-child-modal-option-none': updateChildOption+1 === option2.optionNumber,
                                                        })}
                                                        onClick={()=>setUpdateChildNext(updateChildNext-1)}>
                                                        &lt;
                                                    </div>
                                                    <div className='spm-add-update-child-modal-option'>{"옵션"+(option2.optionNumber+1)}</div>
                                                    <div
                                                        className={classNames('spm-add-update-child-modal-right', {
                                                            'spm-add-update-child-modal-option-none': updateOption.length-1 === option2.optionNumber,
                                                        })}
                                                        onClick={()=>setUpdateChildNext(updateChildNext+1)}>
                                                        &gt;
                                                    </div>
                                                </div>
                                                <div className='spm-add-update-child-modal-all-item'>
                                                    <input 
                                                        type='checkbox' id={'spm-add-update-option-'+option2.optionNumber}
                                                        onChange={()=>{
                                                            let child = updateOption[updateChildOption].itemList[updateChildItem].itemChild;
                                                            for (let i=0; i< child.length; i++) {
                                                                if (child[i].type == option2.optionNumber) {
                                                                    if (child[i].array.length == option2.itemList.length) {
                                                                        child.splice(i, i+1);
                                                                        NumF();
                                                                        return;
                                                                    }
                                                                    for (let j=0; j<option2.itemList.length; j++) {
                                                                        child[i].array.push(j);
                                                                    }
                                                                    child[i].array = Array.from(new Set(child[i].array));
                                                                    NumF();
                                                                    return;
                                                                }
                                                            }
                                                            child.push({
                                                                type: option2.optionNumber,
                                                                array: [],
                                                            });
                                                            for (let i=0; i<option2.itemList.length; i++) {
                                                                child[child.length-1].array.push(i);
                                                            }
                                                            NumF();
                                                        }}
                                                        checked={
                                                            (updateOption[updateChildOption].itemList[updateChildItem].itemChild.find((data: any)=>{
                                                                if (data.type == option2.optionNumber) return true;
                                                            }) === undefined&& true)
                                                        }
                                                    />
                                                    <label htmlFor={'spm-add-update-option-'+option2.optionNumber}></label>
                                                    <div>전체 품목 선택</div>
                                                </div>
                                                </>
                                            }
                                            {option2.itemList.map((item2: {itemNumber: any, itemName: any, }, idx2: number)=>{
                                                return (
                                                    (updateChildOption < option2.optionNumber&& updateChildNext === option2.optionNumber&&
                                                        <div
                                                            key={idx2} 
                                                            className='spm-add-update-child-modal-item'>
                                                            <input 
                                                                type='checkbox' id={'spm-add-update-option-'+option2.optionNumber+"-"+item2.itemNumber}
                                                                className='signup-checkbox-inner'
                                                                onChange={()=>{
                                                                    let child = updateOption[updateChildOption].itemList[updateChildItem].itemChild;
                                                                    for (let i=0; i< child.length; i++) {
                                                                        if (child[i].type == option2.optionNumber) {
                                                                            for (let j=0; j<child[i].array.length; j++) {
                                                                                if (child[i].array[j] == item2.itemNumber) {
                                                                                    child[i].array.splice(j, j+1);
                                                                                    if (child[i].array.length == 0) child.splice(i, i+1);
                                                                                    NumF();
                                                                                    return;
                                                                                }
                                                                            }
                                                                            child[i].array.push(item2.itemNumber);
                                                                            NumF();
                                                                            return;
                                                                        }
                                                                    }
                                                                    child.push({
                                                                        type: option2.optionNumber,
                                                                        array: [item2.itemNumber],
                                                                    });
                                                                    NumF();
                                                                }}
                                                                checked={
                                                                    (updateOption[updateChildOption].itemList[updateChildItem].itemChild.find((data: any)=>{
                                                                        if (
                                                                            data.array.find((data2: any)=>{
                                                                                if (data.type == option2.optionNumber && data2 == item2.itemNumber) return true;
                                                                            }) !== undefined
                                                                        ) return true;
                                                                    }) !== undefined? false: true)
                                                                }
                                                            />
                                                            <label htmlFor={'spm-add-update-option-'+option2.optionNumber+"-"+item2.itemNumber}></label>
                                                            <div>{(item2.itemNumber+1)+"."}&nbsp;{item2.itemName}</div>
                                                        </div>
                                                    )
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        }
                        <div>
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
                                    value={MakePrice(updatePrice)}
                                    onChange={handleAddPrice}
                                />
                                원
                                <div className="spm-add-update-item-right">x</div>
                            </div>
                            <>
                                {updateOption.map((option: { optionNumber: any, optionName: any, itemList: any, }, idx: number)=>{
                                    return (
                                        <form key={idx}>
                                            <div style={{ marginLeft: "33px", marginBottom: "5px", }}>{"옵션"+(option.optionNumber+1)+"."}</div>
                                            <div className="spm-add-update-option">
                                                <div>
                                                    <select 
                                                        onChange={(e)=>{
                                                            updateOption[option.optionNumber].optionName = e.target.value;
                                                            NumF();
                                                        }}
                                                        value={updateOption[option.optionNumber].optionName}>
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
                                                        value={updateOption[option.optionNumber].optionCategory}
                                                        onChange={(e)=> {handleOptionName(e, option.optionNumber)}}
                                                    />
                                                </div>
                                                <div
                                                    className="spm-add-update-right"
                                                    onClick={()=>{
                                                        for (let i = option.optionNumber; i < updateOption.length-1; i++) {
                                                            updateOption[i] = updateOption[i+1];
                                                            updateOption[i].optionNumber = i;
                                                        }
                                                        updateOption.pop();
                                                        setUpdateChildOption(-1);
                                                        NumF();
                                                    }}>x
                                                </div>
                                            </div>
                                            
                                            <>
                                                {option.itemList.map((item: { itemNumber: any, itemName: any, itemPrice: any, itemType: any, itemChild: any, }, idx2: number)=>{
                                                    return (
                                                        <div
                                                            key={idx2} 
                                                            className="spm-add-update-item">
                                                            <div
                                                                className="spm-add-update-item-left"
                                                                onDragStart={(e)=>{
                                                                    setStartDrag(e.clientY);
                                                                }}
                                                                onDragEnd={(e)=>{
                                                                    let n = Math.ceil((Math.abs(startDrag-e.clientY)-45)/45);
                                                                    //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                                                    if (n <= item.itemNumber && 56 <= startDrag-e.clientY && item.itemNumber != 0) {
                                                                        for (let i=n; i>0; i--)
                                                                            updateOption[option.optionNumber].itemList[item.itemNumber-i].itemNumber = item.itemNumber-(i-1);
                                                                        
                                                                            updateOption[option.optionNumber].itemList[item.itemNumber].itemNumber = item.itemNumber-n;
                                                                            updateOption[option.optionNumber].itemList.sort((a:any, b:any) => {
                                                                                if (a.itemNumber < b.itemNumber) return -1;
                                                                                if (a.itemNumber > b.itemNumber) return 1;
                                                                                return 0;
                                                                        });
                                                                    }
                                                                    else if (n <= option.itemList.length-1-item.itemNumber && startDrag-e.clientY <= -56 && item.itemNumber != option.itemList.length-1) {
                                                                        for (let i=n; i>0; i--) 
                                                                            updateOption[option.optionNumber].itemList[item.itemNumber+i].itemNumber = item.itemNumber+(i-1);
                                                                            
                                                                            updateOption[option.optionNumber].itemList[item.itemNumber].itemNumber = item.itemNumber+n;
                                                                            updateOption[option.optionNumber].itemList.sort((a:any, b:any) => {
                                                                                if (a.itemNumber < b.itemNumber) return -1;
                                                                                if (a.itemNumber > b.itemNumber) return 1;
                                                                                return 0;
                                                                        });
                                                                    }
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
                                                                        NumF();
                                                                    }}
                                                                />
                                                            </div>
                                                            <div
                                                                className={classNames('spm-add-update-child', {
                                                                    'spm-add-update-child-change':
                                                                    option.itemList[item.itemNumber].itemChild.length !== 0,
                                                                })} 
                                                                onClick={()=>{
                                                                    if (updateChildOption>-1) setUpdateChildOption(-1);
                                                                    else setUpdateChildOption(option.optionNumber);
                                                                    setUpdateChildNext(option.optionNumber+1);
                                                                    setUpdateChildItem(item.itemNumber);
                                                                    let n = 0;
                                                                    for (let i=0; i<option.optionNumber; i++)
                                                                        for (let j=1; j<updateOption[i].itemList.length; j++)
                                                                            n++;
                                                                    setUpdateItemLen(n);
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
                                                                    for (let i = item.itemNumber; i < option.itemList.length-1; i++) {
                                                                        updateOption[option.optionNumber].itemList[i] = updateOption[option.optionNumber].itemList[i+1];
                                                                        updateOption[option.optionNumber].itemList[i].itemNumber = i;
                                                                    }
                                                                    updateOption[option.optionNumber].itemList.pop();
                                                                    setUpdateChildOption(-1);
                                                                    NumF();
                                                                }}>x
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </>

                                            <div className="spm-add-update-item-button">
                                                <div
                                                    onClick={()=>{
                                                        updateOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "normal",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        NumF();
                                                    }}>+&nbsp;품목 추가
                                                </div>

                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        updateOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "text",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        NumF();
                                                    }}>'텍스트' 추가
                                                </div>

                                                <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                <div
                                                    style={{ color: "#ea5450", }}
                                                    onClick={()=>{
                                                        updateOption[option.optionNumber].itemList[option.itemList.length] = {
                                                            itemNumber: option.itemList.length,
                                                            itemType: "image",
                                                            itemName: "",
                                                            itemPrice: 0,
                                                            itemChild: [],
                                                        };
                                                        NumF();
                                                    }}>'이미지' 추가
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
                                            itemList: [{
                                                itemNumber: 0,
                                                itemType: "normal",
                                                itemName: "",
                                                itemPrice: 0,
                                                itemChild: [],
                                            }],
                                        };
                                        NumF();
                                    }}>
                                    + 옵션 추가
                                </button>
                            </>
                        </div>
                    </div>
                </div>

                <div className="pc spm-tap">
                    {/* <button
                        onClick={()=>{
                            oriShow[idx] = true;
                            NumF();
                        }}>
                        <CloseBtn/>
                    </button> */}
                </div>
            </div>
            </>
    );   
}

export default SPM_Update;