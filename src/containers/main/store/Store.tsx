import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/main/CakeStore.scss';

import axios from 'axios';

import search from '../../../assets/search.svg';
import selectAllow from '../../../assets/selectArrow.png';
import X from '../../../assets/x.svg';

import getAxios from 'src/utils/getAxios';
import PickCard from 'src/components/main/card/PickCard';
import StoreCard from 'src/components/main/card/StoreCard';
import LinkClick from 'src/utils/LinkClick';
import CakeStoreTitle from 'src/components/main/card/cake-store/CakeStoreTitle';

import classNames from 'classnames';
import SelectBar from 'src/components/main/card/cake-store/SelectBar';
import SelectWindow from 'src/components/main/card/cake-store/SelectWindow';

function Store() {
  const [num, setNum] = useState(0);

  //선택지 가로 위치 계산
  const [width, setWidth] = useState(0);
  const SelectCloseF = () => {
    var n1: any = $('.cake-flex').width();
    var n2: any = $('.cake').width();
    if ((n1 - n2) / 2 < 0) setWidth(0);
    else setWidth((n1 - n2) / 2);

    for (var i = 1; i < 5; i++) {
      selectWindow[i][0] = false;
    }
    setNum(num + 1);
  };

  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, '정렬', 0],
    [false, '지역', 0],
    [false, '시/군', 0],
    [false, '지하철', 0],
    [false, '', 0],
  ]);
  //선택지바
  const [selectAll, setSelectAll] = useState([]);

  //선택지 모바일
  const [selectMobileTF, setSelectMobileTF] = useState(false);

  //더보기
  const [cakeDetail, setCakeDetail] = useState(true);

  /* 지역클릭->시/군 보이게 & 지하철흐리게 */
  const [cityBtnOn, setCityBtnOn] = useState(false);
  const [subwayBtnOn, setSubwayBtnOn] = useState(false);

  // 모바일 상세정보 지역,지하철 버튼 진하게/흐리게
  const [mobileCityBtnOn, setMobileCityBtnOn] = useState(false);
  const [mobileSubwayBtnOn, setMobileSubwayBtnOn] = useState(false);

  // 초기화 버튼
  // 배열초기화는 주석처리해둠 <-- 넣어두면 자동초기화할때 무한루프
  const onResetCakeSelect = () => {
    selectWindow[1][1] = '지역';
    selectWindow[2][1] = '시/군';
    selectWindow[3][1] = '지하철';
    for (var i = 1; i < 4; i++) selectWindow[i][3] = 0;
    SelectCloseF();
  };

  // 지역 <ㅡ> 지하철 리버트 기능

  // 리버트 기능 생성
  async function revertToSubway() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 500);
      setCityBtnOn(false);
      selectWindow[1][1] = '지역';
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    selectWindow[3][0] = Boolean(result);
  }
  // setSelectAll([]);
  async function revertToCity() {
    let promise = new Promise((resolve, reject) => {
      //      setSelectAll([]);
      setTimeout(() => resolve(true), 1000);
      setSubwayBtnOn(false);
      selectWindow[3][1] = '지하철';
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*) result는 0.5초후에 "true"가 할당됨.
    selectWindow[2][0] = Boolean(result);
  }

  // onClick에 넣을 리버트 조건문 생성
  const onRevertToSubway = () => {
    if (
      cityBtnOn === true ||
      (Array.isArray(selectAll) && selectAll.length !== 0) ||
      selectWindow[1][1] !== '지역'
    ) {
      revertToSubway();
      //   setSelectFourShow(true);
      //      setCityBtnOn(false);
    }
  };
  const onRevertToCity = () => {
    if (
      subwayBtnOn === true ||
      (Array.isArray(selectAll) && selectAll.length !== 0 && subwayBtnOn) ||
      selectWindow[3][1] !== '지하철'
    ) {
      revertToCity();
      //      setSelectTwoShow(true);
    }
  };

  /* 빨간버튼 다 사라지면 자동 초기화 */
  useEffect(() => {
    // (빨간버튼) 빈배열인지 체크
    if (Array.isArray(selectAll) && selectAll.length === 0) {
      onResetCakeSelect();
      setCityBtnOn(false);
      setSubwayBtnOn(false);
    }
  }, [selectAll]);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };

  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(() => {
    LinkClick('Store');

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    getAxios(setData, setLengthTodays, 'cakes', [], 18, pageTodays, 0);
  }, []);

  return (
    <>
      <div className="cake-flex store-flex">
        {/* 선택지창 */}
        {resize > 767 || selectMobileTF ? (
          <SelectWindow
            cakestoreTF={false}
            width={width}
            height={250}
            num={num}
            setNumF={setNum}
            setSelectMobileTF={setSelectMobileTF}
            SelectCloseF={SelectCloseF}
            selectAll={selectAll}
            selectWindow={selectWindow}
          />
        ) : null}

        <div className="cake store">
          <div className="cake-select-flex">
            <div
              className="mobile cake-search"
              onClick={() => {
                setSelectMobileTF(true);
              }}
            >
              <img src={search} />
              상세검색
            </div>

            <div className="cake-select cake-select-one-flex">
              <div style={{ display: 'flex' }}>
                <button id="cake-select-one" className="cake-select-button">
                  {selectWindow[0][1]}
                </button>
                <div className="cake-select-img">
                  <img
                    src={selectAllow}
                    onClick={() => {
                      SelectCloseF();
                      if (selectWindow[0][0]) selectWindow[0][0] = false;
                      else selectWindow[0][0] = true;
                      setNum(num + 1);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* PC-지역 버튼 */}
            <div
              className={classNames('pc', 'cake-select', {
                use: cityBtnOn || selectWindow[1][1] !== '지역',
                nouse: subwayBtnOn || selectWindow[3][1] !== '지하철',
              })}
            >
              <div style={{ display: 'flex' }}>
                <button id="cake-select-three" className="cake-select-button">
                  {selectWindow[1][1]}
                </button>
                <div className="cake-select-img">
                  <img
                    src={selectAllow}
                    onClick={() => {
                      onRevertToCity();

                      SelectCloseF();
                      if (selectWindow[1][0]) selectWindow[1][0] = false;
                      else selectWindow[1][0] = true;
                      setNum(num + 1);

                      //                      setCityBtnOn((prev) => !prev);
                      // setSubwayBtnOn(false);
                      console.log('subwayBtnOn', subwayBtnOn);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* PC-시/군 버튼 */}
            {selectWindow[1][0] !== false || selectWindow[1][1] !== '지역' ? (
              <div
                className="pc cake-select"
                onClick={() => {
                  SelectCloseF();
                  if (selectWindow[2][0]) selectWindow[2][0] = false;
                  else selectWindow[2][0] = true;
                  setNum(num + 1);
                }}
              >
                <div style={{ display: 'flex' }}>
                  <button id="cake-select-two" className="cake-select-button">
                    {selectWindow[2][1]}
                  </button>
                  <div className="cake-select-img">
                    <img src={selectAllow} />
                  </div>
                </div>
              </div>
            ) : null}
            {/* PC-지하철 버튼*/}
            <div
              className={classNames('pc', 'cake-select', {
                use: subwayBtnOn || selectWindow[3][1] !== '지하철',
                nouse: cityBtnOn || selectWindow[1][1] !== '지역',
              })}
              onClick={() => {
                onRevertToSubway();

                setSubwayBtnOn((prev) => !prev);
                setCityBtnOn(false);

                SelectCloseF();
                if (selectWindow[3][0]) selectWindow[3][0] = false;
                else selectWindow[3][0] = true;
                setNum(num + 1);
              }}
            >
              <div style={{ display: 'flex' }}>
                <button id="cake-select-four" className="cake-select-button">
                  {selectWindow[3][1]}
                </button>
                <div className="cake-select-img">
                  <img src={selectAllow} alt="cake-select-img" />
                </div>
              </div>
            </div>

            {/* 선택지 바 */}
            {(resize > 767 || selectMobileTF) && selectAll.length != 0 ? (
              <div
                className="cake-select-bar"
                style={{
                  marginTop: resize > 767 ? 10 : 50 * 2,
                }}
              >
                <SelectBar setSelectAllF={setSelectAll} getData={selectAll} />
                <div
                  className="cake-bar-card-all-delete"
                  onClick={() => {
                    SelectCloseF();

                    selectWindow[1][1] = '지역';
                    selectWindow[2][1] = '시/군';
                    selectWindow[3][1] = '지하철';

                    for (var i = 1; i < 4; i++) {
                      selectWindow[i][2] = 0;
                    }

                    setSelectAll([]);
                  }}
                >
                  초기화
                </div>
              </div>
            ) : null}
          </div>

          <div className="cake-store-contents store-contents-flex">
            <CakeStoreTitle detail={cakeDetail} setDetailF={setCakeDetail} />
            <div className="contents">
              <StoreCard getData={data} cakeDetail={cakeDetail} />
            </div>
            <div
              className={'pagination cake-store-' + (cakeDetail ? 'dummy' : '')}
            >
              <Link to="/" className="arrow prev" href="#">
                {' '}
                &lt;Prev
              </Link>
              <Link to="/" href="#" className="pagi active">
                1
              </Link>
              <Link to="/" href="#" className="pagi">
                2
              </Link>
              <Link to="/" href="#" className="pagi">
                3
              </Link>
              <Link to="/" className="arrow next" href="#">
                Next &gt;
              </Link>
            </div>
          </div>
          <PickCard />
        </div>
      </div>
    </>
  );
}

export default Store;
