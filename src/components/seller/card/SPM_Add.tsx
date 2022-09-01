import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../../../styles/seller/card/SPM_Add_Update.scss';

import { ReactComponent as DragBtn } from 'src/assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from 'src/assets/seller/drag-column-btn.svg';
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from 'src/assets/seller/closebtn.svg';
import leftArrow from 'src/assets/left-arrow.svg';
import rightArrow from 'src/assets/right-arrow.svg';
import ImageModal from './image-modal/ImageModal';

{/* <form className="option-1">
<div className="option-size">크기</div>
<div className="option-input">
    <input type="radio" name="name-1" value="1호" /> 1호
    <input type="number" min="0" className="add-price" placeholder="+0원"/>
</div>
<div className="option-input">
    <input type="radio" name="name-1" value="1호" /> 2호
    <input type="number" min="0" className="add-price" placeholder="+0원"/>
</div>
<button className="option-button">항목 추가</button>
</form> */}

interface Props {
    num: any,
    setNum: any,
    resize: any,

    addShow: any,
    setAddShowF: any,
}

function SPMCard_Add({ resize, addShow, setAddShowF }: Props) {
    //Add
    const Add = () => {
        alert('추가');
        //addImage사용하면 이미지 넘길 수 있음
        var index = 0;
        var c = '';
        var jlength = 0;
        for (var i = 0; i < addOption.length; i++) {
        if (i - 1 < 0) index = i;
        else index = i - 1;

        if (addOption[i].optionName == '크기') c = 'SIZE';
        else if (addOption[i].optionName == '맛') c = 'TASTE';
        else if (addOption[i].optionName == '레터링') c = 'LOWER_LETTERING';
        else if (addOption[i].optionName == '색상') c = 'COLOR';
        else if (addOption[i].optionName == '초') c = 'CANDLE';
        else c = 'ETC';

        if (addOption[i].optionDirect)
            jlength = addOption[i].optionList.length - 1;
        else jlength = addOption[i].optionList.length;

        for (var j = 0; j < jlength; j++) {
            addBack[j + 1 + i * addOption[index].optionList.length - 1] = {
            additionalCost: addOption[i].optionList[j].optionListPrice,
            category: c,
            contents: addOption[i].optionList[j].optionListName,
            title: addOption[i].optionName,
            };
        }
        if (addOption[i].optionDirect) {
            addBack[jlength + 1 + i * addOption[index].optionList.length - 1] = {
            additionalCost: addOption[i].optionList[jlength].optionListPrice,
            category: c,
            contents:
                (addOption[i].optionImage ? '이미지&' : '텍스트&') +
                addOption[i].optionDirectText,
            title: addOption[i].optionName,
            };
        }
        }
        // axios
        //     .post(`https://prod.kcook-cake.com/app/products`, {
        //         isCake: true,
        //         name: addName,
        //         newOptionsList: addBack,
        //         price: addPrice,
        //         salePrice: 0,
        //     })
        //     .then((res) => {
        //         if (res.data.isSuccess) alert("추가 완료");
        //         document.location.href = "/ProductManagement";
        //     })
        //     .catch((error) => {
        //     });
    };
    const [addDiv, setAddDiv] = useState(false);
    const [addImageModal, setAddImageModal] = useState(false);
    const [addImage, setAddImage] = useState([
        'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
        'https://t1.daumcdn.net/cfile/tistory/99D8553E5E09328C19',
        '',
        '',
        '',
    ]);
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
          optionDirect: false,
          optionDirectText: '',
          optionImage: false,
        },
      ]);
    const [addBack, setAddBack] = useState<any>([]);
    const handleAddName = (e: any) => {
        setAddName(e.target.value);
    };
    const handleAddPrice = (e: any) => {
        setAddPrice(e.target.value);
    };

    const [num, setNum] = useState(0);
    const handleOptionName = (e: any, optionId: any, ) => {
        addOption[optionId-1].optionName = e.target.value;
        setNum(num+1);
        setAddOption(addOption);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        setNum(num+1);
        setAddOption(addOption);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        var evalue = e.target.value;
        if (evalue === "NaN") evalue = "0";
        addOption[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(evalue);
        setNum(num+1);
        setAddOption(addOption);
    };

    const [startDrag, setStartDrag] = useState(0);
    const [draggingSectionId, setDraggingSectionId] = useState(null);// 1
    useEffect(()=>{
    },[]);
    
    return (
        <>
            <ImageModal
                num={num} setNum={setNum} resize={resize}
                imageModalShow={addImageModal} setImageModalShowF={setAddImageModal}
                imageData={addImage} setImageDataF={setAddImage} />

            <div className="spm-add-update">
              <div className="spm-add-update-inner">
                <button className="move-tap" onClick={Add}>
                    <DragBtn />
                </button>

                <div className="spm-add-update-content">
                    <div
                        className="spm-add-update-img"
                        onClick={() => setAddImageModal(true)}>
                        {addImage[addImageNum] == '' ? (
                            <div className="spm-add-update-img-inner">
                                <AddIcon />
                            </div>
                            ) :
                            <img src={addImage[addImageNum]} />
                        }
                    </div>
                    <div className="spm-add-update-arrow">
                        <img
                        src={leftArrow}
                        onClick={() => {
                            if (addImageNum != 0) setAddImageNum(addImageNum - 1);
                            else setAddImageNum(4);
                        }}
                        />
                        <img
                        src={rightArrow}
                        onClick={() => {
                            if (addImageNum != 4) setAddImageNum(addImageNum + 1);
                            else setAddImageNum(0);
                        }}
                        style={{ float: 'right' }}
                        />
                        <div className="spm-add-update-arrow-num">{addImageNum + 1}/5</div>
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
                                min="0"
                                placeholder="0"
                                onChange={handleAddPrice}
                            />
                            원
                            <div className="spm-add-update-item-right">x</div>
                        </div>

                        {addOption.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, optionImage: any, })=>{
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
                                                setNum(num+1);
                                                setAddOption(addOption);
                                            }}>x
                                        </div>
                                    </div>
                                    <>
                                        {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, }, )=>{
                                            return (
                                                <div className="spm-add-update-item">
                                                    <div
                                                        id={option.optionDirect&&option.optionList.length==optionList.optionListId? "spm-none-1": ""}
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
                                                                        addOption[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                    }
                                                                    addOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                    addOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            } else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                && ((optionList.optionListId != option.optionList.length && !option.optionDirect) 
                                                                || (optionList.optionListId != option.optionList.length-1 && option.optionDirect))) {

                                                                    for (var i=n; i>0; i--) {
                                                                        addOption[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                    }
                                                                    addOption[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                    addOption[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            }
                                                            setNum(num+1);
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
                                                            placeholder={option.optionDirect&&option.optionList.length==optionList.optionListId? (option.optionImage? "이미지 입력": "텍스트 입력") : "품목"+optionList.optionListId+" 입력"}
                                                            value={option.optionDirect&&option.optionList.length==optionList.optionListId? option.optionDirectText : optionList.optionListName}
                                                            onChange={(e)=>{
                                                                if (option.optionDirect&&option.optionList.length==optionList.optionListId)
                                                                    addOption[option.optionId-1].optionDirectText = e.target.value;
                                                                else handleOptionListName(e, option.optionId, optionList.optionListId)
                                                                setNum(num+1);
                                                                setAddOption(addOption);
                                                            }}
                                                        />
                                                    </div>
                                                    <input
                                                        className="spm-add-update-item-price"
                                                        type="text"
                                                        min="0"
                                                        placeholder="0"
                                                        value={optionList.optionListPrice}
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
                                                            if ((option.optionDirect&&option.optionList.length==optionList.optionListId)) {
                                                                addOption[option.optionId-1].optionDirect = false;
                                                                addOption[option.optionId-1].optionImage = false;
                                                            }
                                                            addOption[option.optionId-1].optionList.pop();

                                                            setNum(num+1);
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
                                                    setNum(num+1);
                                                    setAddOption(addOption);
                                                }}>+&nbsp;품목 추가
                                            </div>
                                            {option.optionDirect? null:
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
                                                        addOption[option.optionId-1].optionDirect = true;
                                                        setNum(num+1);
                                                        setAddOption(addOption);
                                                    }}>'텍스트' 추가
                                                </div>
                                            </>
                                            }
                                            {option.optionDirect? null:
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
                                                        addOption[option.optionId-1].optionDirect = true;
                                                        addOption[option.optionId-1].optionImage = true;
                                                        setNum(num+1);
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
                                    optionDirect: false,
                                    optionDirectText: "",
                                };
                                setNum(num+1);
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
                        setNum(num+1);
                    }}>
                  <CloseBtn />
                </button>
              </div>
            </div>
        </>
    );
}

export default SPMCard_Add;