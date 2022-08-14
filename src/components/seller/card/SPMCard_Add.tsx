import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../../../styles/card/seller/SPMCard_Add.scss';

import { ReactComponent as DragBtn } from '../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import rightArrow from "../../assets/right-arrow.svg";
import { setTokenSourceMapRange } from 'typescript';

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
    setAddOptionF: any,
    getData: any,
}

function SPMCard_Add({ setAddOptionF, getData, }: Props) {
    const [num, setNum] = useState(0);
    const handleOptionName = (e: any, optionId: any, ) => {
        getData[optionId-1].optionName = e.target.value;
        setNum(num+1);
        setAddOptionF(getData);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        getData[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        setNum(num+1);
        setAddOptionF(getData);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        getData[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(e.target.value);
        setNum(num+1);
        setAddOptionF(getData);
    };

    useEffect(()=>{

    },[]);
    
    return (
        <div className="spmcard-add">
        {getData.map((option: { optionId: any, optionName: any, optionList: any, })=>{
        return (
            <form id={"spmcard-add-"+option.optionId}>
                <input
                    className="spm-add-title"
                    placeholder={"옵션"+option.optionId+" 이름"}
                    onChange={(e)=> {handleOptionName(e, option.optionId)}}
                />
                <>
                {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                return (
                    <div className="spmcard-add-input">
                        <div className="spmcard-add-input-left">
                            <DragCBtn className="spmcard-add-input-left-icon"/>
                        </div>
                        <div style={{ width: "100%", }}>
                            <input
                                className="spmcard-add-input-text"
                                type="text"
                                name={"name"+optionList.optionListId}
                                placeholder="품목 입력"
                                onChange={(e)=>{handleOptionListName(e, option.optionId, optionList.optionListId)}}
                            />
                        </div>
                        <input
                            className="spmcard-add-input-price"
                            type="number"
                            min="0"
                            placeholder="+0원"
                            onChange={(e)=>{handleOptionListPrice(e, option.optionId, optionList.optionListId)}}
                        />
                        <div className="spmcard-add-input-right">x</div>
                    </div>
                )
                })
                }
                <div
                    className="spmcard-add-input-button"
                    onClick={()=>{
                        // console.log(getData.length);
                        // console.log(getData[getData.length].optionList);
                        getData[option.optionId-1].optionList[option.optionList.length] = {
                            optionListId: option.optionList.length+1,
                            optionListName: "",
                            optionListPrice: 0,
                        };
                        setNum(num+1);
                        setAddOptionF(getData);
                    }}
                >항목 추가</div>
                </>
            </form>
        )
        })
        }
        <hr className="spmcard-add-hr"/>
        <button
            className="spmcard-add-button"
            onClick={()=>{
                getData[getData.length] = {
                    optionId: getData.length+1,
                    optionName: "",
                    optionList: [],
                };
                setNum(num+1);
                setAddOptionF(getData);
            }}
        >
            + 옵션 추가
        </button>
        </div>
    );
}

export default SPMCard_Add;