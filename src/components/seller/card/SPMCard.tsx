import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/seller/card/SPMCard.scss';

import cake6 from   '../../../assets/cake6.png';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

interface Props {
    getData: any,
    update: any,
    updateOption: any,
    setDataF: any,
    setUpdateOptionF: any,
    setUpdateF: any,
}

function SPMCard({ getData, update, updateOption, setDataF, setUpdateOptionF, setUpdateF, }: Props) {
    const [num, setNum] = useState(0);
    
    const handleAddName = (e: any, idx: any, ) => {
        updateOption[idx].name = e.target.value;
        setNum(num+1);
        setUpdateOptionF(updateOption);
    };
    const handleOptionName = (e: any, idx:any, optionId: any, ) => {
        updateOption[idx].list[optionId-1].optionName = e.target.value;
        setNum(num+1);
        setUpdateOptionF(updateOption);
    };
    const handleOptionListName = (e: any, idx:any, optionId: any, optionListId: any, ) => {
        updateOption[idx].list[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        setNum(num+1);
        setUpdateOptionF(updateOption);
    };
    const handleOptionListPrice = (e: any, idx:any, optionId: any, optionListId: any, ) => {
        var evalue = e.target.value;
        if (evalue === "NaN") evalue = "0";
        updateOption[idx].list[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(evalue);
        setNum(num+1);
        setUpdateOptionF(updateOption);
    };

    const [startDrag, setStartDrag] = useState(0);
    useEffect(()=>{
    },[]);
    
    return (
        <>
        {updateOption.map((data: { name: any, image: any, list: any, }, idx: any, )=>{
            return (
            <>
                {update[idx]?
                <div className="spm-add">
                    <div className="spm-add-inner">
                        <div
                            className="move-tap"
                            onClick={()=>{
                                update[idx] = false;
                                setNum(num+1);
                                setUpdateF(update);
                                alert("업데이트"); //updateOption
                                // setUpdateOptionF(getData); //안에 내용 초기화..
                                // axios.update
                            }}>
                            <DragBtn/>
                        </div>
                        <div className="spm-add-content">
                            <div className="spm-add-img">
                                <AddIcon/>
                            </div>
                            <div>
                                <div style={{ display: "flex"}}>
                                    <input
                                        className="spm-add-main-title spm-add-title"
                                        placeholder="상품명"
                                        value={data.name}
                                        onChange={(e)=>{
                                            handleAddName(e, idx);
                                        }}
                                    />
                                    <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                    <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                </div>
                                {/* <button className="mobile spm-add-img-m">
                                    <AddIcon />
                                </button> */}
                                <div className="spmcard-update-input spmcard-update-input-top">
                                    <div id="spm-none-1" className="spmcard-update-input-left">
                                        <DragCBtn className="spmcard-update-input-left-icon"/>
                                    </div>
                                    <div style={{ width: "100%", }}>
                                        <input
                                            id="spm-none-1"
                                            className="spmcard-update-input-text"
                                            type="text"
                                            // name={"name"+optionList.optionListId}
                                            // value={option.optionDirect&&option.optionList.length==optionList.optionListId? "직접 입력": optionList.optionListName}
                                            // onChange={(e)=>{handleOptionListName(e, idx, option.optionId, optionList.optionListId)}}
                                            // disabled={option.optionDirect&&option.optionList.length==optionList.optionListId}
                                        />
                                    </div>
                                    <input
                                        className="spmcard-update-input-price"
                                        type="text"
                                        min="0"
                                        placeholder="0"
                                        // value={optionList.optionListPrice}
                                        // onChange={(e)=>{handleOptionListPrice(e, idx, option.optionId, optionList.optionListId)}}
                                    />원
                                    <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                </div>
                                    <>
                                    {data.list.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, optionImage: any, })=>{
                                    return (
                                        <form id={"spmcard-update-"+option.optionId} className="spmcard-update">
                                            <div className="spmcard-option-update">
                                                <input
                                                    className="spm-add-title spm-add-subtitle"
                                                    placeholder={"옵션"+option.optionId+" 이름"}
                                                    value={option.optionName}
                                                    onChange={(e)=> {handleOptionName(e, idx, option.optionId)}}
                                                />
                                                <div
                                                    id={"spm-none-"+option.optionId}
                                                    className="spm-add-right"
                                                    onClick={()=>{
                                                        for (var i = option.optionId-1; i < updateOption[idx].list.length-1; i++) {
                                                            updateOption[idx].list[i] = updateOption[idx].list[i+1];
                                                            updateOption[idx].list[i].optionId = i+1;
                                                        }
                                                        updateOption[idx].list.pop();
                                                        setNum(num+1);
                                                        setUpdateOptionF(updateOption);
                                                    }}>x
                                                </div>
                                            </div>
                                            <>
                                            {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                            return (
                                                <div className="spmcard-update-input">
                                                    <div
                                                        id={option.optionDirect&&option.optionList.length==optionList.optionListId? "spm-none-1": ""}
                                                        className="spmcard-update-input-left"
                                                        onDragStart={(e)=>{
                                                            setStartDrag(e.clientY);
                                                        }}
                                                        onDragEnd={(e)=>{
                                                            var n = Math.ceil((Math.abs(startDrag-e.clientY)-45)/45);
                                                            //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                                            if (56 <= startDrag-e.clientY && n <= option.optionList.length
                                                                && (optionList.optionListId-1 != 0)) {
                            
                                                                    for (var i=n+1; i>1; i--) {
                                                                        updateOption[idx].list[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                    }
                                                                    updateOption[idx].list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                    updateOption[idx].list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            }
                                                            else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                && ((optionList.optionListId != option.optionList.length && !option.optionDirect) 
                                                                || (optionList.optionListId != option.optionList.length-1 && option.optionDirect))) {
                            
                                                                    for (var i=n; i>0; i--) {
                                                                        updateOption[idx].list[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                    }
                                                                    updateOption[idx].list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                    updateOption[idx].list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                        if (a.optionListId < b.optionListId) return -1;
                                                                        if (a.optionListId > b.optionListId) return 1;
                                                                        return 0;
                                                                    });
                                                            }
                                                            setNum(num+1);
                                                            setUpdateOptionF(updateOption);
                                                        }}
                                                        draggable={true}>
                                                        <DragCBtn className="spmcard-update-input-left-icon"/>
                                                    </div>
                                                    <div style={{ width: "100%", }}>
                                                        <input
                                                            className="spmcard-update-input-text"
                                                            type="text"
                                                            name={"name"+optionList.optionListId}
                                                            placeholder={option.optionDirect&&option.optionList.length==optionList.optionListId? (option.optionImage? "이미지 입력": "텍스트 입력") : "품목"+optionList.optionListId+" 입력"}
                                                            value={option.optionDirect&&option.optionList.length==optionList.optionListId? option.optionDirectText: optionList.optionListName}
                                                            onChange={(e)=>{
                                                                if (option.optionDirect&&option.optionList.length==optionList.optionListId)
                                                                    updateOption[idx].list[option.optionId-1].optionDirectText = e.target.value;
                                                                else handleOptionListName(e, idx, option.optionId, optionList.optionListId);
                                                                setNum(num+1);
                                                                setUpdateOptionF(updateOption);
                                                            }}
                                                        />
                                                    </div>
                                                    <input
                                                        className="spmcard-update-input-price"
                                                        type="text"
                                                        min="0"
                                                        placeholder="0"
                                                        value={optionList.optionListPrice}
                                                        onChange={(e)=>{handleOptionListPrice(e, idx, option.optionId, optionList.optionListId)}}
                                                    />원
                                                    <div
                                                        id={"spm-none-"+optionList.optionListId}
                                                        className="spmcard-update-input-right"
                                                        onClick={()=>{
                                                            for (var i = optionList.optionListId-1; i < option.optionList.length-1; i++) {
                                                                updateOption[idx].list[option.optionId-1].optionList[i] = updateOption[idx].list[option.optionId-1].optionList[i+1];
                                                                updateOption[idx].list[option.optionId-1].optionList[i].optionListId = i+1;
                                                            }
                                                            updateOption[idx].list[option.optionId-1].optionList.pop();
                                                            if (!(option.optionDirect&&option.optionList.length==optionList.optionListId))
                                                                updateOption[idx].list[option.optionId-1].optionDirect = false;
                                                            setNum(num+1);
                                                            setUpdateOptionF(updateOption);
                                                        }}>x
                                                    </div>
                                                </div>
                                            );
                                            })
                                            }
                                            <div className="spmcard-update-input-button">
                                                <div
                                                    onClick={()=>{
                                                        updateOption[idx].list[option.optionId-1].optionList[option.optionList.length] = {
                                                            optionListId: option.optionList.length+1,
                                                            optionListName: "",
                                                            optionListPrice: 0,
                                                        };
                                                        setNum(num+1);
                                                        setUpdateOptionF(updateOption);
                                                    }}>+&nbsp;품목 추가
                                                </div>
                                                {option.optionDirect? null:
                                                    <>
                                                    <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                    <div
                                                        style={{ color: "#ea5450", }}
                                                        onClick={()=>{
                                                            updateOption[idx].list[option.optionId-1].optionList[option.optionList.length] = {
                                                                optionListId: option.optionList.length+1,
                                                                optionListName: "",
                                                                optionListPrice: 0,
                                                            };
                                                            updateOption[idx].list[option.optionId-1].optionDirect = true;
                                                            setNum(num+1);
                                                            setUpdateOptionF(updateOption);
                                                        }}>'텍스트' 추가
                                                    </div>
                                                    </>}
                                                {option.optionDirect? null:
                                                    <>
                                                    <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                    <div
                                                        style={{ color: "#ea5450", }}
                                                        onClick={()=>{
                                                            updateOption[idx].list[option.optionId-1].optionList[option.optionList.length] = {
                                                                optionListId: option.optionList.length+1,
                                                                optionListName: "",
                                                                optionListPrice: 0,
                                                            };
                                                            updateOption[idx].list[option.optionId-1].optionDirect = true;
                                                            updateOption[idx].list[option.optionId-1].optionImage = true;
                                                            setNum(num+1);
                                                            setUpdateOptionF(updateOption);
                                                        }}>'이미지' 추가
                                                    </div>
                                                    </>}
                                            </div>
                                            </>
                                        </form>
                                    );
                                    })
                                    }
                                    <hr className="spmcard-update-hr"/>
                                    <button
                                        className="spmcard-update-button"
                                        onClick={()=>{
                                            updateOption[idx].list[updateOption[idx].list.length] = {
                                                optionId: updateOption[idx].list.length+1,
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
                                            setUpdateOptionF(updateOption);
                                        }}
                                    >
                                        + 옵션 추가
                                    </button>
                                    </>
                            </div>
                        </div>
                    </div>

                    <div className="pc spm-tap">
                        <button
                            onClick={()=>{
                                update[idx] = false;
                                setNum(num+1);
                                setUpdateF(update); 
                            }}>
                            <CloseBtn/>
                        </button>
                        {/* <button
                            onClick={()=>{
                                alert("복제");
                            }}>
                            <CopyBtn/>
                        </button> */}
                    </div>
                </div>:
                <div className="spm-add2">
                    <div className="spm-add-inner">
                        <div
                            className="move-tap"
                            onClick={()=>{
                                update[idx] = true;
                                setNum(num+1);
                                setUpdateF(update); 
                            }}>
                            <DragBtn/>
                        </div>
                        <div className="spm-add-content2">
                            <div className="spm-add-img2" > {/*style={{ float: "right",}}*/} 
                                <AddIcon/>
                            </div>
                            <div className="spm-option-title">
                                <div className="spm-title">{data.name}</div>
                                {/* <button className="mobile spm-add-img-m">
                                    <AddIcon />
                                </button> */}
                                <>
                                    {data.list.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, })=>{
                                        return (
                                            <>
                                            {/* <form id={"spmcard-"+option.optionId} className="spmcard"> */}
                                                {/* <div className="spm-title spm-option-title"> */}
                                                    {option.optionName}:&nbsp;
                                                <>
                                                {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                                return (
                                                    <>
                                                    {/* <div className="spmcard-input">
                                                        <div className="spm-option-title"> */}
                                                            {optionList.optionListName}
                                                            {(optionList.optionListId==option.optionList.length)? null: <>,&nbsp;</>}
                                                            {optionList.optionListId==option.optionList.length-1&&option.optionDirect? (option.optionDirectText==""? "직접 입력": option.optionDirectText): null}
                                                        {/* </div>
                                                    </div> */}
                                                    </>
                                                );
                                                })
                                                }
                                                </>
                                                <br/>
                                                {/* </div> */}
                                            {/* </form> */}
                                            </>
                                        );
                                        })
                                        }
                                </>
                            </div>
                        </div>
                    </div>

                    <div className="pc spm-tap">
                        <button
                            onClick={()=>{
                                alert("삭제");
                                // setAddDiv(false);
                            }}
                        >
                            <CloseBtn/>
                        </button>
                        <button
                            onClick={()=>{
                                alert("복제");
                            }}>
                            <CopyBtn/>
                        </button>
                        <Link to="/ProductManagement/0">
                            <div
                                // onClick={()=>{
                                //     document.location.href ="/ProductManagement/0";
                                // }}
                                >
                                <CopyBtn/>
                            </div>
                        </Link>
                    </div>
                </div>
                }
            </>
            );
            })
            }
        </>
    );   
}

export default SPMCard;