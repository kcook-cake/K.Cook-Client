import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import '../../styles/detail/SPMDetail.scss';

import selectAllow from 'src/assets/selectArrow.png';
import search from 'src/assets/search.svg';

import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import SelectWindow from 'src/components/common/kcook-select/SelectWindow';
import SelectBar from 'src/components/common/kcook-select/SelectBar';
import SelectBox from 'src/components/common/kcook-select/SelectBox';

const SPMDetail = () => {
  const [num, setNum] = useState(0);
  const NumF = () => {
    setNum(num + 1);
  };

  //선택지 가로 위치 계산
  const [width, setWidth] = useState(0);
  const SelectCloseF = () => {
    var n1: any = $('.seller-flex').width();
    var n2: any = $('.seller').width();
    if ((n1 - n2) / 2 < 0) setWidth(0);
    else setWidth((n1 - n2) / 2);

    for (var i = 1; i < 5; i++) {
      selectWindow[i][0] = false;
    }
    setNum(num + 1);
  };

  const [selectDataOne, setSelectDataOne] = useState([
    ['인기순', '최신순', '판매량순', '낮은 가격순', '높은 가격순'],
  ]);
  const [selectData, setSelectData] = useState([[], [], [], []]);

  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, '', 0],
    [false, '지역', 28],
    [false, '맛', 14],
    [false, '이벤트', 42],
    [false, '가격대', 42],
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
    LinkClick('ProductManagement');
    sellerLinkClick('ProductManagement');

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    axios.get(`/app/cities`).then((res) => {
      setSelectData([
        res.data.result,
        ['생크림', '크림치즈', '버터크림', '앙금'],
        [
          '친구/애인',
          '부모님',
          '어린이',
          '할로윈데이',
          '빼빼로데이',
          '크리스마스',
          '입학/졸업/취업',
          '명절',
          '발렌타인/화이트데이',
          '어버이날/스승의날',
          '돌/환갑/칠순잔치',
          '프로포즈/브라이덜샤워',
          '연애인',
          '기업',
        ],
        ['~3만 원', '3~5만 원', '5~7만 원', '7~10만 원', '10만 원~'],
      ]);
    });
  }, []);

  // 여기부터

  const editor_main = document.querySelector('.ck-editor__main');

  const ref = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    //      const resizeableEle = ref.current;
    const resizeableEle = document.querySelector<HTMLElement>(
      '.ck-editor__editable'
    );
    const styles = window.getComputedStyle(resizeableEle);
    let height = parseInt(styles.height, 10);
    let y = 0;

    // 박스 아래 드래그로 크기 조절
    const onMouseMoveBottomResize = (event: any) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveBottomResize);

      // mousemove
      // 사용자가 해당 element에서 마우스를 움직였을 때 발생합니다.
    };

    const onMouseDownBottomResize = (event: any) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener('mousemove', onMouseMoveBottomResize);
      document.addEventListener('mouseup', onMouseUpBottomResize);

      // mouseup
      // 사용자가 해당 element에서 눌렀던 마우스 버튼을 떼었을 때 발생합니다.
    };

    // 마우스 벗어났을때 이벤트 등록
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener('mousedown', onMouseDownBottomResize);

    // mousedown
    //사용자가 해당 element에서 마우스 버튼을 눌렀을 때 발생

    return () => {
      resizerBottom.removeEventListener('mousedown', onMouseDownBottomResize);
    };
  }, []);

  return (
    <>
      {/* 선택지창 */}
      {resize > 767 || selectMobileTF ? (
        <SelectWindow
          cakestoreTF={true}
          NumF={NumF}
          selectAll={selectAll}

          selectWindow={selectWindow}

          selectData={selectData}
          
          setSelectMobileTF={setSelectMobileTF}
          SelectCloseF={SelectCloseF}

          searchChangeF={()=>{}}
        />
      ) : null}

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
            style={{ width: '5px', height: '25px' }}
          ></div>

          <div className="spmdetail-title">
            상품 상세페이지 설정&nbsp;
            <div style={{ paddingTop: '3px', fontSize: '14px' }}>▼</div>
          </div>

          <div className="spmdetail-content">
            <div className="spmdetail-content-title">
              하트 볼터치 곰돌이 케이크
            </div>
            <div className="spmdetail-content-subtitle">#검색 필터 설정</div>

            {/* 선택지 박스 */}
            {resize > 767 ? (
              <SelectBox
                cakestoreTF={true}
                NumF={NumF}
                selectBox={[false, false, false, false]}
                selectWindow={selectWindow}
                SelectCloseF={SelectCloseF}
                setSelectAllF={setSelectAll}
              />
            ) : (
              <div
                className="mobile spmdetail-search"
                onClick={() => {
                  setSelectMobileTF(true);
                }}
              >
                <img src={search} />
                상세검색
              </div>
            )}

            {/* 선택지 바 */}
            {selectAll.length != 0 ? (
              <div className="cake-select-bar spmdetail-select-bar">
                <SelectBar setSelectAllF={setSelectAll} getData={selectAll} searchChangeF={()=>{}} />
                <div
                  className="cake-bar-card-all-delete"
                  onClick={() => {
                    SelectCloseF();

                    selectWindow[1][1] = '지역';
                    selectWindow[2][1] = '맛';
                    selectWindow[3][1] = '이벤트';
                    selectWindow[4][1] = '가격대';

                    selectWindow[1][2] = 28;
                    selectWindow[2][2] = 14;
                    selectWindow[3][2] = 42;
                    selectWindow[4][2] = 42;

                    setSelectAll([]);
                  }}
                >
                  초기화
                </div>
              </div>
            ) : null}

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
              <div ref={refBottom} className="resizer resizer-b"></div>
              <div
                className="spmdetail-ck-bottom"
                onDragStart={(e) => {
                  setStartDrag(e.clientY);
                }}
                onDragEnd={(e) => {
                  setCkHeight(ckHeight + (e.clientY - startDrag));
                  $('.ck-content').css('height', ckHeight);
                }}
                draggable={true}
              ></div>
            </div>

            <div
              className="spmdetail-content-btn-box"
              style={{ marginTop: '16px' }}
            >
              <button className="spmdetail-content-btn">등록</button>
              <Link to="/ProductManagement">
                <button className="spmdetail-content-btn spmdetail-content-btn-left">
                  취소
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SPMDetail;


