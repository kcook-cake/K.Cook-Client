import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../styles/detail/MPRDetail.scss';

import selectAllow from "src/assets/selectArrow.png";

import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import CakeBarCard from 'src/components/main/cake/CakeBarCard';

const MPRDetail = () =>{
    //선택지 기타 등등
    //선택지 가로 위치 계산
    const [width, setWidth] = useState(0);
    const SelectCloseF = () => {
        var n1: any = $(".seller-flex").width();
        var n2: any = $(".seller").width();

        if ((n1-n2)/2 < 0) setWidth(0);
        else setWidth((n1-n2)/2);

        setSelectOneShow(false);
        setSelectTwoShow(false);
        setSelectThreeShow(false);
        setSelectFourShow(false);
        setSelectFiveShow(false);
    };


    const [selectOneNum, setSelectOneNum] = useState(0);
    const [selectTwoNum, setSelectTwoNum] = useState(0);
    const [selectThreeNum, setSelectThreeNum] = useState(0);
    const [selectFourNum, setSelectFourNum] = useState(0);
    const [selectFiveNum, setSelectFiveNum] = useState(0);

    //선택지
    const [selectOneShow, setSelectOneShow] = useState(false);
    const [selectOne, setSelectOne] = useState("정렬");
    const SelectOneF = (str: string, num: number, length: number) => {
        // $(".cake-select-li").css("color", "#8a8a8a");
        $("#cake-select-li-"+num).css("color", "#ea5450");
        setSelectOneNum(length);
        setSelectOne(str);
        setSelectOneShow(false);
    };

    const [selectAll, setSelectAll] = useState([]);
    const [selectTwoShow, setSelectTwoShow] = useState(false);
    const [selectTwo, setSelectTwo] = useState("지역");
    const [selectThreeShow, setSelectThreeShow] = useState(false);
    const [selectThree, setSelectThree] = useState("맛");
    const [selectFourShow, setSelectFourShow] = useState(false);
    const [selectFour, setSelectFour] = useState("이벤트");
    const [selectFiveShow, setSelectFiveShow] = useState(false);
    const [selectFive, setSelectFive] = useState("가격대");
    const SelectF = (n: number, str: string, length: number, ) => {
        if (SelectBarF(str)) {
            var selectAllData: any = selectAll;
            selectAllData[selectAll.length] = str;
            setSelectAll(selectAllData);
        }
        if (n == 2) {
            setSelectTwoNum(length);
            setSelectTwo(str);
            setSelectTwoShow(false);
        } else if (n == 3) {
            setSelectThreeNum(length);
            setSelectThree(str);
            setSelectThreeShow(false);
        } else if (n == 4) {
            setSelectFourNum(length);
            setSelectFour(str);
            setSelectFourShow(false);
        } else {
            setSelectFiveNum(length);
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
        LinkClick("ProductManagement");
        sellerLinkClick("ProductManagement");
    },[]);

    return(
        <>
            {selectTwoShow?
            <div
                className="pc cake-select-absolute"
                style={{ left: (width+300+selectTwoNum)+"px", }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(2, "서울", 0);}}>서울</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(2, "경기", 0);}}>경기</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(2, "인천", 0);}}>인천</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(2, "강릉", 0);}}>강릉</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(2, "부산", 0);}}>부산</li>
                </ul>
            </div>: null}
            {selectThreeShow?
            <div
                className="pc cake-select-absolute"
                style={{ left: (width+360+selectTwoNum+selectThreeNum)+"px", }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(3, "생크림", 30);}}>생크림</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(3, "크림치즈", 40);}}>크림치즈</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(3, "초코", 12);}}>초코</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(3, "과일", 12);}}>과일</li>
                </ul>
            </div>: null}
            {selectFourShow?
            <div
                className="pc cake-select-absolute"
                style={{ left: (width+435+selectTwoNum+selectThreeNum+selectFourNum)+"px", }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(4, "생일", -15);}}>생일</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "커플 기념일", 35);}}>커플 기념일</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "어버이날", 15);}}>어버이날</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(4, "돌잔치", 0);}}>돌잔치</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(4, "크리스마스", 35);}}>크리스마스</li>
                </ul>
            </div>: null}
            {selectFiveShow?
            <div
                className="pc cake-select-absolute"
                style={{ left: (width+520+selectTwoNum+selectThreeNum+selectFourNum+selectFiveNum)+"px", }}
            >
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul-2">
                    <li
                        className="cake-select-li-top cake-select-li"
                        onClick={()=>{SelectF(5, "~3만 원", 10);}}>~3만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "3~5만 원", 15);}}>3~5만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "5~7만 원", 15);}}>5~7만 원</li>
                    <li
                        className="cake-select-li"
                        onClick={()=>{SelectF(5, "7~10만 원", 20);}}>7~10만 원</li>
                    <li
                        className="cake-select-li-bottom cake-select-li"
                        onClick={()=>{SelectF(5, "10만 원~", 15);}}>10만 원~</li>
                </ul>
            </div>: null}

            <div className="seller-mypage-top-flex mprdetail-flex">
                <div className="sso-ssh-mobile-box">
                    <div className="seller-mypage-top sso-ssh-top">
                        <div className="seller-mypage-front-title">상품관리</div>
                        <div className="seller-mypage-middle-title">현재 판매 중인 상품입니다</div>
                    </div>
                    <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                    <div className="mprdetail-title">상품 상세페이지 설정&nbsp;<div style={{ paddingTop: "3px", fontSize: "14px"}}>▼</div></div>
                    <div className="mprdetail-content">
                        <div className="mprdetail-content-title">하트 볼터치 곰돌이 케이크</div>
                        <div className="mprdetail-content-subtitle">#검색 필터 설정</div>

                        <div className="pc cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-three" className="cake-select-button">{selectTwo}</button>
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
                        <div className="pc cake-select">
                            <div style={{ display: "flex", }}>
                                <button id="cake-select-two" className="cake-select-button">{selectThree}</button>
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
                        <div className="pc cake-select">
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
                        <div className="pc cake-select">
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
                        {/* Pc 선택지 바 */}
                        {selectAll.length == 0?
                            null:
                            <div className="pc cake-select-bar">
                                <CakeBarCard setSelectAllF={setSelectAll} getData={selectAll} />
                                <div
                                    className="cake-bar-card-all-delete"
                                    onClick={()=>{
                                        setSelectTwo("지역");setSelectThree("맛");setSelectFour("이벤트");setSelectFive("가격대");
                                        setSelectTwoNum(0);setSelectThreeNum(0);setSelectFourNum(0);setSelectFiveNum(0);
                                        SelectCloseF();
                                        setSelectAll([]);
                                    }}
                                >초기화</div>
                            </div>
                        }

                        <div className="mprdetail-content-subtitle">#상세 페이지 내용</div>
                        <div className="mprdetail-ck">
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p></p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                }}
                                onChange={( event, editor ) => {
                                    const data = editor.getData();
                                }}
                                onBlur={( event, editor ) => {
                                }}
                                onFocus={( event, editor ) => {
                                }}
                            />
                        </div>

                        <div className="mprdetail-content-btn-box">
                            <button className="mprdetail-content-btn">등록</button>
                            <button
                                className="mprdetail-content-btn mprdetail-content-btn-left">
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MPRDetail;