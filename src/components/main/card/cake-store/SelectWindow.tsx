import { useState } from "react";
import "src/styles/main/card/cake-store/SelectWindow.scss";

import X from "src/assets/x.svg";

interface Props {
  cakestoreTF: any,
  width: any,
  height: any,

  num: any,
  setNumF: any,
  setSelectMobileTF: any,
  SelectCloseF: any,

  selectAll: any,
  selectWindow: any,
}

export default function SelectWindow({ 
    cakestoreTF, width, height,
    num, setNumF, setSelectMobileTF, SelectCloseF,
    selectAll, selectWindow,
  }: Props) {

  const SelectOneF = (str: string, num: number, length: number) => {
    // $(".cake-select-li").css("color", "#8a8a8a");
    $("#cake-select-li-"+num).css("color", "#ea5450");
    selectWindow[0] = [false, str, length];
    setNumF(num+1);
  };

  //선택지창
  const SelectF = (n: number, str: string, length: number) => {
    if (SelectBarF(str))
      selectAll[selectAll.length] = str;
    selectWindow[n-1] = [false, str, length];
    setNumF(num+1);
  };

  //선택지바
  const SelectBarF = (str: string) => {
    for (var i = 0; i < selectAll.length; i++) {
      if (selectAll[i] == str) return false;
    }
    return true;
  };

  return (
    <>
      <div className="cake-select-mobile-flex">
        <div className="mobile cake-select-mobile-top">
            <div style={{ marginLeft: "30px", }}></div>
            <div>상세검색</div>
            <div
                onClick={()=>{setSelectMobileTF(false)}}>
                <img src={X} />
            </div>
        </div>

        {selectWindow[0][0]?
        <div
            className="cake-select-absolute"
            style={{ left: (width+1060)+"px", }}>
            <div className="cake-select-top"></div>
            <ul className="cake-select-ul">
                <li
                    className="cake-select-li-top cake-select-li"
                    onClick={()=>{
                        SelectOneF("별점 인기순", 1, 45);
                    }}>별점 인기순</li>
                <li
                    className="cake-select-li"
                    onClick={()=>{
                        SelectOneF("최신순", 2, 15);
                    }}
                >최신순</li>
                <li
                    className="cake-select-li"
                    onClick={()=>{
                        SelectOneF("판매량순", 3, 30);
                    }}
                >판매량순</li>
                <li
                    className="cake-select-li-bottom cake-select-li"
                    onClick={()=>{
                        SelectOneF("리뷰 많은 순", 4, 50);
                    }}
                >리뷰 많은 순</li>
            </ul>
        </div>: null}

        <div className="mobile cake-select-mobile">
            지역
            <div
                className="cake-select-mobile-button"
                onClick={()=>{
                  SelectCloseF();
                  if (selectWindow[1][0]) selectWindow[1][0] = false;
                  else selectWindow[1][0] = true;
                  setNumF(num+1);
                }}
            >선택하기</div>
        </div>
        {selectWindow[1][0]?
        <div
            className="cake-select-absolute"
            style={{ top: height+"px", left: (width-45+selectWindow[1][2])+"px", }}>
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

        <div className="mobile cake-select-mobile">
            {cakestoreTF? "맛" : "시/군"}
            <div
                className="cake-select-mobile-button"
                onClick={()=>{
                  SelectCloseF();
                  if (selectWindow[2][0]) selectWindow[2][0] = false;
                  else selectWindow[2][0] = true;
                  console.log(selectWindow);
                  setNumF(num+1);
                }}
            >선택하기</div>
        </div>

        {selectWindow[2][0]?
        <div
            className="cake-select-absolute"
            style={{ top: height+"px", left: (width+15+selectWindow[1][2]+selectWindow[2][2])+"px", }}>
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

        <div className="mobile cake-select-mobile">
            {cakestoreTF? "이벤트" : "지하철"}
            <div
                className="cake-select-mobile-button"
                onClick={()=>{
                  SelectCloseF();
                  if (selectWindow[3][0]) selectWindow[3][0] = false;
                  else selectWindow[3][0] = true;
                  setNumF(num+1);
                }}
            >선택하기</div>
        </div>
        {selectWindow[3][0]?
        <div
            className="cake-select-absolute"
            style={{ top: height+"px", left: (width+95+selectWindow[1][2]+selectWindow[2][2]+selectWindow[3][2])+"px", }}>
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

        {selectWindow[4][1] == ""? null:
          <>
            <div className="mobile cake-select-mobile">
                가격대
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                      SelectCloseF();
                      if (selectWindow[4][0]) selectWindow[4][0] = false;
                      else selectWindow[4][0] = true;
                      setNumF(num+1);
                    }}
                >선택하기</div>
            </div>
            {selectWindow[4][0]?
            <div
                className="cake-select-absolute"
                style={{ top: height+"px", left: (width+175+selectWindow[1][2]+selectWindow[2][2]+selectWindow[3][2]+selectWindow[4][2])+"px", }}>
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
          </>
        }
      </div>
    </>
  );
}
