import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/main/CakeStore.scss';

import search from '../../../assets/search.svg';
import selectAllow from '../../../assets/selectArrow.png';
import X from '../../../assets/x.svg';

import getAxios from 'src/utils/getAxios';
import PickCard from 'src/components/main/card/PickCard';
import StoreCard from 'src/components/main/card/StoreCard';
import LinkClick from 'src/utils/LinkClick';
import CakeStoreTitle from 'src/components/main/card/cake-store/CakeStoreTitle';

import SelectBar from 'src/components/main/card/cake-store/SelectBar';
import SelectWindow from 'src/components/main/card/cake-store/SelectWindow';
import SelectBoxOne from 'src/components/main/card/cake-store/SelectBoxOne';
import SelectBox from 'src/components/main/card/cake-store/SelectBox';
import SelectWindowOne from 'src/components/main/card/cake-store/SelectWindowOne';
import storeGetAxios from 'src/utils/storeGetAxios';

function Store() {
  const [num, setNum] = useState(0);
  const NumF = () => {
    setNum(num + 1);
  };

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


  const [selectDataOne, setSelectDataOne] = useState([["인기순", "최신순", "판매량순", "낮은 가격순", "높은 가격순"]]);
  const [selectData, setSelectData] = useState([[], [], [], []]);

  const [selectBox, setSelectBox] = useState([false, false, false, false])
  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, '정렬', 0],
    [false, '지역', 28],
    [false, '시/군', 42],
    [false, '지하철노선', 70],
    [false, '지하철역', 56],
  ]);
  //선택지바
  const [selectAll, setSelectAll] = useState([]);

  //선택지 모바일
  const [selectMobileTF, setSelectMobileTF] = useState(false);
  //더보기
  const [cakeDetail, setCakeDetail] = useState(true);



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

    storeGetAxios(setData, 'stores/account/auth', 1, 18);
    axios
      .get(`https://prod.kcook-cake.com/app/cities`)
      .then(res =>{
        setSelectData([res.data.result, [], [
          "1호선", "2호선", "3호선", "4호선", "5호선", "6호선", "7호선", "8호선", "9호선",
          "경강선", "경의선", "경춘선", "공항철도", "김포","서해선", "수인분당선", "신림선", "신분당선", "용인", "우이신설", "의정부", "자기부상",
          "인천1호선", "인천2호선",
          "수인선", "경의중앙선",
        ], []]);
      });
  }, []);

  return (
    <>
      <div className="cake-flex store-flex">
        {/* 선택지창 */}
        <SelectWindowOne width={width} NumF={NumF} selectWindow={selectWindow} selectDataOne={selectDataOne}/>
        {resize > 767 || selectMobileTF ?
          <SelectWindow
            cakestoreTF={false} width={width} height={250} NumF={NumF}
            selectAll={selectAll} selectBox={selectBox} selectWindow={selectWindow}
            selectDataOne={selectDataOne} selectData={selectData}
            setSelectMobileTF={setSelectMobileTF} SelectCloseF={SelectCloseF} setSelectAllF={setSelectAll}/>
        :null}

        <div className="cake store">
          <div className="cake-select-flex">
            <div
              className="mobile cake-search"
              onClick={() => {
                setSelectMobileTF(true);
              }}>
              <img src={search} />
              상세검색
            </div>

            {/* 선택지박스 */}
            <SelectBoxOne selectWindow={selectWindow} SelectCloseF={SelectCloseF} />
            <SelectBox 
              cakestoreTF={false} NumF={NumF} 
              selectBox={selectBox} selectWindow={selectWindow}
              SelectCloseF={SelectCloseF} setSelectAllF={setSelectAll}/>

            {/* 선택지 바 */}
            {selectAll.length != 0?
                <div
                    className="cake-select-bar">
                    <SelectBar setSelectAllF={setSelectAll} getData={selectAll} />
                    <div
                        className="cake-bar-card-all-delete"
                        onClick={()=>{
                          SelectCloseF();
                          setSelectBox([false, false, false, false]);
      
                          selectWindow[1][1] = '지역';
                          selectWindow[2][1] = '시/군';
                          selectWindow[3][1] = '지하철노선';
                          selectWindow[4][1] = '지하철역';
      
                          selectWindow[1][2] = 28;
                          selectWindow[2][2] = 42;
                          selectWindow[3][2] = 70;
                          selectWindow[4][2] = 56;
      
                          setSelectAll([]);
                        }}
                    >초기화</div>
                </div>
            :null}
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
