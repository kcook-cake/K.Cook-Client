import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../styles/Cake.scss';

import axios from 'axios';

import search from "../assets/search.svg";
import selectAllow from "../assets/selectArrow.png";

import getAxios from 'src/utils/getAxios';
import LengthwiseCard from '../components/LengthwiseCard';
import KCOOKCard from 'src/components/KCOOKCard';

function Cake (){
    //선택지
    const SelectCloseF = () => {
        setSelectOneShow(false);
        setSelectTwoShow(false);
        setSelectThreeShow(false);
        setSelectFourShow(false);
        setSelectFiveShow(false);
    };

    const [selectOneShow, setSelectOneShow] = useState(false);
    const [selectOne, setSelectOne] = useState("정렬");
    const SelectOneF = (str: string, num: number, ) => {
        // $(".cake-select-li").css("color", "#8a8a8a");
        $("#cake-select-li-"+num).css("color", "#ea5450");
        setSelectOne(str);
        setSelectOneShow(false);
    };

    const [selectAll, setSelectAll] = useState([]);
    const [selectTwoShow, setSelectTwoShow] = useState(false);
    const [selectTwo, setSelectTwo] = useState("맛");
    const [selectThreeShow, setSelectThreeShow] = useState(false);
    const [selectThree, setSelectThree] = useState("지역");
    const [selectFourShow, setSelectFourShow] = useState(false);
    const [selectFour, setSelectFour] = useState("이벤트");
    const [selectFiveShow, setSelectFiveShow] = useState(false);
    const [selectFive, setSelectFive] = useState("가격대");
    const SelectF = (n: number, str: string, num: number, ) => {
        if (SelectBarF(str)) {
            var selectAllData: any = selectAll;
            selectAllData[selectAll.length] = str;
            setSelectAll(selectAllData);
        }
        if (n == 2) {
            setSelectTwo(str);
            setSelectTwoShow(false);
        } else if (n == 3) {
            setSelectThree(str);
            setSelectThreeShow(false);
        } else if (n == 4) {
            setSelectFour(str);
            setSelectFourShow(false);
        } else {
            setSelectFive(str);
            setSelectFiveShow(false);
        }
    };

    //선택지바
    const SelectBarF = (str: string, ) => {
        for (var i = 0; i < selectAll.length; i++) {
            if (selectAll[i] == str) return false;
        }
        return true;
    }

    const [data, setData] = useState([]);
    //0페이지부터 시작한다
    const [pageTodays, setPageTodays] = useState(0);
    const [lengthTodays, setLengthTodays] = useState(0);
    useEffect(()=>{
        getAxios(setData, setLengthTodays, "cakes", [], 8, pageTodays, 0);
    },[]);
    return(
        <div className="cake-flex">
            {selectOneShow?
            <div
                className="cake-select-absolute"
                style={{ left: (305)+"px", top: (250)+"px" }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{
                            SelectOneF("별점 인기순", 1);
                        }}>별점 인기순</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{
                            SelectOneF("최신순", 2);
                        }}
                    >최신순</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{
                            SelectOneF("판매량순", 3);
                        }}
                    >판매량순</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{
                            SelectOneF("리뷰 많은 순", 4);
                        }}
                    >리뷰 많은 순</li>
                </ul>
            </div>: null}
            {selectTwoShow?
            <div
                className="cake-select-absolute"
                style={{ left: (370)+"px", top: (250)+"px" }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(2, "생크림", 1);}}>생크림</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(2, "크림치즈", 2);}}>크림치즈</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(2, "초코", 3);}}>초코</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(2, "과일", 4);}}
                    >과일</li>
                </ul>
            </div>: null}
            {selectThreeShow?
            <div
                className="cake-select-absolute"
                style={{ left: (430)+"px", top: (250)+"px" }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(3, "서울", 1);}}>서울</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(3, "경기", 2);}}>경기</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(3, "인천", 3);}}>인천</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(3, "강릉", 4);}}>강릉</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(3, "부산", 5);}}>부산</li>
                </ul>
            </div>: null}
            {selectFourShow?
            <div
                className="cake-select-absolute"
                style={{ left: (510)+"px", top: (250)+"px" }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(4, "생일", 1);}}>생일</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "커플 기념일", 2);}}>커플 기념일</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "어버이날", 3);}}>어버이날</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "돌잔치", 4);}}>돌잔치</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(4, "크리스마스", 5);}}>크리스마스</li>
                </ul>
            </div>: null}
            {selectFiveShow?
            <div
                className="cake-select-absolute"
                style={{ left: (590)+"px", top: (250)+"px" }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(5, "~3만 원", 1);}}>~3만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "3~5만 원", 2);}}>3~5만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "5~7만 원", 3);}}>5~7만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "7~10만 원", 4);}}>7~10만 원</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(5, "10만 원~", 5);}}>10만 원~</li>
                </ul>
            </div>: null}

            <div className="cake">
                <div style={{ marginBottom: "40px", }}>
                    <div className="pc item-sort-bar">
                        <div className="cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-one" className="cake-select-button">{selectOne}</button>
                                <div className="cake-select-img">
                                    <img
                                        src={selectAllow}
                                        onClick={()=>{
                                            SelectCloseF();
                                            if (selectOneShow)
                                                setSelectOneShow(false);
                                            else
                                                setSelectOneShow(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-one" className="cake-select-button">{selectTwo}</button>
                                <div className="cake-select-img">
                                    <img
                                        src={selectAllow}
                                        onClick={()=>{
                                            SelectCloseF();
                                            if (selectTwoShow)
                                                setSelectTwoShow(false);
                                            else
                                                setSelectTwoShow(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-three" className="cake-select-button">{selectThree}</button>
                                <div className="cake-select-img">
                                    <img
                                        src={selectAllow}
                                        onClick={()=>{
                                            SelectCloseF();
                                            if (selectThreeShow)
                                                setSelectThreeShow(false);
                                            else
                                                setSelectThreeShow(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-four" className="cake-select-button">{selectFour}</button>
                                <div className="cake-select-img">
                                    <img
                                        src={selectAllow}
                                        onClick={()=>{
                                            SelectCloseF();
                                            if (selectFourShow)
                                                setSelectFourShow(false);
                                            else
                                                setSelectFourShow(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-five" className="cake-select-button">{selectFive}</button>
                                <div className="cake-select-img">
                                    <img
                                        src={selectAllow}
                                        onClick={()=>{
                                            SelectCloseF();
                                            if (selectFiveShow)
                                                setSelectFiveShow(false);
                                            else
                                                setSelectFiveShow(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="pc cake-select-bar">

                    </div>
                </div>
                <div className="mobile item-sort-bar">
                    <select className="dropdown-bar">
                        <option disabled selected hidden>정렬</option>
                        <option>별점 인기순</option>
                        <option>최신순</option>
                        <option>판매량순</option>
                        <option>리뷰 많은 순</option>
                    </select>
                    <div className="cake-search">
                        <img src={search} />
                        상세검색
                    </div>
                </div>
                <div className="sort-by-rec">
                    <div className="recommend-contents">
                        <LengthwiseCard getData={data} link="Review"/>
                    </div>
                </div>
                <KCOOKCard/>
            </div>
        </div>
    )
}



export default Cake;