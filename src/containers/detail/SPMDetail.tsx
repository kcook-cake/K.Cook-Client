import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../styles/detail/SPMDetail.scss";

import selectAllow from "src/assets/selectArrow.png";
import search from 'src/assets/search.svg';

import getAxios from "src/utils/getAxios";
import LinkClick from "src/utils/LinkClick";
import sellerLinkClick from "src/utils/sellerLinkClick";
import SelectWindow from "src/components/main/card/cake-store/SelectWindow";
import SelectBar from "src/components/main/card/cake-store/SelectBar";
import SelectBox from "src/components/main/card/cake-store/SelectBox";

const MPRDetail = () => {
  const [num, setNum] = useState(0);

  //선택지 가로 위치 계산
  const [width, setWidth] = useState(0);
  const SelectCloseF = () => {
    var n1: any = $(".seller-flex").width();
    var n2: any = $(".seller").width();
    if ((n1 - n2) / 2 < 0) setWidth(0);
    else setWidth((n1 - n2) / 2);

    for (var i=1; i<5; i++) {
      selectWindow[i][0] = false;
    }
    setNum(num+1);
  };

  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, "", 0],
    [false, "지역", 0],
    [false, "맛", 0],
    [false, "이벤트", 0],
    [false, "가격대", 0],
  ]);

  //선택지바
  const [selectAll, setSelectAll] = useState([]);

  //선택지 모바일
  const [selectMobileTF, setSelectMobileTF] = useState(false);



  //편집기
  const [startDrag, setStartDrag] = useState(0);
  const [ckHeight, setCkHeight] = useState(286);



  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };

  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(() => {
    LinkClick("ProductManagement");
    sellerLinkClick("ProductManagement");

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* 선택지창 */}
      {resize>767 || selectMobileTF?
          <SelectWindow
              cakestoreTF={false} width={width+345} height={515}
              num={num} setNumF={setNum}
              setSelectMobileTF={setSelectMobileTF} SelectCloseF={SelectCloseF}
              selectAll={selectAll} selectWindow={selectWindow} />
          :null
      }

      <div className="seller-mypage-top-flex spmdetail-flex">
        <div className="sso-ssh-mobile-box">
          
          <div className="seller-mypage-top sso-ssh-top">
            <div className="seller-mypage-front-title">상품관리</div>
            <div className="seller-mypage-middle-title">
              현재 판매 중인 상품입니다
            </div>
          </div>
          <div
            className="mobile"
            style={{ width: "5px", height: "25px" }}>
          </div>

          <div className="spmdetail-title">
            상품 상세페이지 설정&nbsp;
            <div style={{ paddingTop: "3px", fontSize: "14px" }}>▼</div>
          </div>

          <div className="spmdetail-content">
            <div className="spmdetail-content-title">
              하트 볼터치 곰돌이 케이크
            </div>
            <div className="spmdetail-content-subtitle">#검색 필터 설정</div>

            {/* 선택지 박스 */}
            {resize> 767?
              <SelectBox cakestoreTF={true} selectWindow={selectWindow} SelectCloseF={SelectCloseF} />:            
              <div
                className="mobile spmdetail-search"
                onClick={() => {
                  setSelectMobileTF(true);
                }}>
                <img src={search} />
                상세검색
              </div>
            }
            
            {/* 선택지 바 */}
            {selectAll.length != 0?
                <div
                    className="cake-select-bar spmdetail-select-bar">
                    <SelectBar setSelectAllF={setSelectAll} getData={selectAll} />
                    <div
                        className="cake-bar-card-all-delete"
                        onClick={()=>{
                            SelectCloseF();

                            selectWindow[1][1] = "지역";
                            selectWindow[2][1] = "맛";
                            selectWindow[3][1] = "이벤트";
                            selectWindow[4][1] = "가격대";
                            
                            for (var i=1; i<5; i++) {
                                selectWindow[i][2] = 0;
                            }
        
                            setSelectAll([]);
                        }}
                    >초기화</div>
                </div>
            :null}

            <div className="spmdetail-content-subtitle">#상세 페이지 내용</div>
            <div className="spmdetail-ck">
              <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onInit={(editor) => {
                  editor.ui
                    .getEditableElement()
                    .parentElement.insertBefore(
                      editor.ui.view.toolbar.element,
                      editor.ui.getEditableElement()
                    );
                }}
                onReady={(editor) => {
                  // You can store the 'editor' and use when it is needed.
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
              <div
                className="spmdetail-ck-bottom"
                onDragStart={(e)=>{
                  setStartDrag(e.clientY);
                }}
                onDragEnd={(e)=>{
                  setCkHeight(ckHeight+(e.clientY-startDrag));
                  $(".ck-content").css("height", ckHeight);
                }}
                draggable={true}>
              </div>
            </div>

            <div className="spmdetail-content-btn-box" style={{ marginTop: "16px", }}>
              <button className="spmdetail-content-btn">등록</button>
              <button className="spmdetail-content-btn spmdetail-content-btn-left">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MPRDetail;
