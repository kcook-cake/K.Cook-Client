import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/main/CakeStore.scss';

import search from 'src/assets/search.svg';

import PickCard from 'src/components/main/common/PickCard';
import StoreCard from 'src/components/common/cake-store/StoreCard';
import LinkClick from 'src/utils/LinkClick';

import SelectBar from 'src/components/common/kcook-select/SelectBar';
import SelectWindow from 'src/components/common/kcook-select/SelectWindow';
import SelectBoxOne from 'src/components/common/kcook-select/SelectBoxOne';
import SelectBox from 'src/components/common/kcook-select/SelectBox';
import SelectWindowOne from 'src/components/common/kcook-select/SelectWindowOne';
import PageBar from 'src/components/main/common/PageBar';
import Stores_TestData from 'src/testdata/main/Stores_TestData';

function Store() {
  const [num, setNum] = useState(0);
  const NumF = () => {
    setNum(num + 1);
  };


  const PageChangeF = (p: number) => {
    console.log(p); //페이지
    console.log(selectWindow[0][1]); 
    console.log(selectAll);
  };
  const SearchChangeF = (s: any[]) => {
    console.log(1); setPage(1);
    console.log(selectWindow[0][1]);
    console.log(s);
  }



  const [selectDataOne, setSelectDataOne] = useState([["인기순", "최신순", "판매량순", "낮은 가격순", "높은 가격순"]]);
  const [selectData, setSelectData] = useState([[], [], [], []]);

  // const [selectBox, setSelectBox] = useState([false, false, false, false])
  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, '정렬', 0],
    [false, '지역', 28],
    [false, '시/군', 42],
    [false, '', 0],
    [false, '', 0],
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



  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    LinkClick('Store');

    // storeGetAxios(setData, setPageLength, 'stores/account/auth', 1, 9);
    let isComponentMounted = true;
    var len = [];
    for (var i=0; i<Stores_TestData().storesAll/9; i++)
        len[i] = { num: i+1 }
    setPageLength(len);
    setData(Stores_TestData().storesList);
    // let num = 9;
    // axios({
    //     url: '/app/stores/account/auth',
    //     method: 'GET',
    //     headers: {
    //       'X-ACCESS-TOKEN': (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
    //     }
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //         if (isComponentMounted) {
    //           const data = res.data.result.content;

    //           var changeData = [];
    //           for (var i = 0; i < data.length; i++) {
    //               changeData[i] = res.data.result.content[i];
    //           }
    //           for (var i:number = data.length; i < num; i++) {
    //               changeData[i] = {
    //                   image: null,
    //                   accountName: "~준비중 입니다~",
    //                   address: "~준비중 입니다~",
    //                   area: "~준비중 입니다~",
    //                   contact: "~준비중 입니다~",
    //                   name: "~준비중 입니다~",
    //                   status: "BLACKLIST",
    //                   storeId: 0
    //               };
    //           }
    //           var len = [];
    //           for (var i=0; i<data.length/9; i++)
    //               len[i] = { num: i+1 }
    //           setPageLength(len);
    //           setData(changeData);
    //         }
    //     }
    //   })
    //   .catch((err) => {
    //     var changeData = [];
    //     for (var i = 0; i < num; i++) {
    //         changeData[i] = {
    //             image: null,
    //             accountName: "~준비중 입니다~",
    //             address: "~준비중 입니다~",
    //             area: "~준비중 입니다~",
    //             contact: "~준비중 입니다~",
    //             name: "~준비중 입니다~",
    //             status: "BLACKLIST",
    //             storeId: 0
    //         };
    //     }
    //     setPageLength([{num: 1}]);
    //     setData(changeData);
    //     console.log(err);
    //   });

    axios({
        url: '/app/cities',
        method: 'GET',
      })
      .then((res) => {
        if (res.data) {
          if (isComponentMounted) {
            setSelectData([
              res.data.result,
              [],
              [
                "1호선", "2호선", "3호선", "4호선", "5호선", "6호선", "7호선", "8호선", "9호선",
                "경강선", "경의선", "경춘선", "공항철도", "김포","서해선", "수인분당선", "신림선", "신분당선", "용인", "우이신설", "의정부", "자기부상",
                "인천1호선", "인천2호선",
                "수인선", "경의중앙선",
              ],
              [],
            ]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      isComponentMounted = false;
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <div className="cake-flex store-flex">
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

            {/* 선택지창 */}
            <SelectWindowOne NumF={NumF} selectAll={selectAll} selectWindow={selectWindow} selectDataOne={selectDataOne} searchChangeF={SearchChangeF}/>
            {resize > 767 || selectMobileTF ?
              <SelectWindow
                cakestoreTF={false} NumF={NumF}
                selectAll={selectAll} selectWindow={selectWindow}
                selectData={selectData}
                setSelectMobileTF={setSelectMobileTF}
                searchChangeF={SearchChangeF} />
            :null}

            {/* 선택지박스 */}
            <SelectBoxOne NumF={NumF} selectWindow={selectWindow} />
            <SelectBox 
              cakestoreTF={false} NumF={NumF} 
              selectBox={[false, false, false, false]} 
              selectWindow={selectWindow}
              setSelectAllF={setSelectAll}/>

            {/* 선택지 바 */}
            {selectAll.length != 0?
                <div
                    className="cake-select-bar">
                    <SelectBar getData={selectAll} setSelectAllF={setSelectAll} searchChangeF={SearchChangeF} />
                    <div
                        className="cake-bar-card-all-delete"
                        onClick={()=>{
                          // setSelectBox([false, false, false, false]);
      
                          selectWindow[1][1] = '지역';
                          selectWindow[2][1] = '시/군';
                          selectWindow[3][1] = '지하철노선';
                          selectWindow[4][1] = '지하철역';
      
                          selectWindow[1][2] = 28;
                          selectWindow[2][2] = 42;
                          selectWindow[3][2] = 70;
                          selectWindow[4][2] = 56;
      
                          setSelectAll([]);
                          SearchChangeF([]);
                        }}
                    >초기화</div>
                </div>
            :null}
          </div>

          <div className="cake-store-contents store-contents-flex">
            <div className="contents">
              <StoreCard getData={data} />
            </div>
            <PageBar page={page} setPageF={setPage} length={pageLength} pageChangeF={PageChangeF} />
          </div>
          {/* <PickCard /> */}
        </div>
      </div>
    </>
  );
}

export default Store;
