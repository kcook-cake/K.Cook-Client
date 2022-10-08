import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/main/CakeStore.scss';

import search from 'src/assets/search.svg';

import PickCard from 'src/components/main/common/PickCard';
import CakeCard from 'src/components/common/cake-store/CakeCard';
import LinkClick from 'src/utils/LinkClick';

import SelectWindow from 'src/components/common/kcook-select/SelectWindow';
import SelectBar from 'src/components/common/kcook-select/SelectBar';
import SelectBox from 'src/components/common/kcook-select/SelectBox';
import SelectBoxOne from 'src/components/common/kcook-select/SelectBoxOne';
import SelectWindowOne from 'src/components/common/kcook-select/SelectWindowOne';
import PageBar from 'src/components/main/common/PageBar';

import Cakes_TestData from 'src/testdata/main/Cakes_TestData';

function Cake() {
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



  const [selectDataOne, setSelectDataOne] = useState([
    ['인기순', '최신순', '판매량순', '낮은 가격순', '높은 가격순'],
  ]);
  const [selectData, setSelectData] = useState([[], [], [], []]);

  //선택지창
  const [selectWindow, setSelectWindow] = useState([
    [false, '정렬', 0],
    [false, '지역', 28],
    [false, '맛', 14],
    [false, '이벤트', 42],
    [false, '가격대', 42],
  ]);
  //선택지바
  const [selectAll, setSelectAll] = useState([]);

  //선택지 모바일
  const [selectMobileTF, setSelectMobileTF] = useState(false);



  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState([]);

  const [data, setData] = useState([]);
  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    LinkClick('Cake');

    let isComponentMounted = true;
    let len = [];
    for (var i=0; i<Cakes_TestData().cakesAll/12; i++) //data.length
      len[i] = { num: i+1 }
    setPageLength(len);
    setData(Cakes_TestData().cakesList);
    // let num = 12;
    // axios({
    //     url: '/app/cakes?page=1',
    //     method: 'GET',
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //         if (isComponentMounted) {
    //             const data = res.data.result.content;

    //             var changeData = [];
    //             for (var i = 0; i < data.length; i++) {
    //                 changeData[i] = res.data.result.content[i];
    //             }
    //             for (var i:number = data.length; i < num; i++) {
    //                 changeData[i] = {
    //                     image: null,
    //                     name: "~준비중 입니다~",
    //                     price: 0,
    //                     storeName: "~준비중 입니다~",

    //                     productId: 0,
    //                     popularRank: 0,
    //                 };
    //             }
    //             var len = [];
    //             for (var i=0; i<100/12; i++) //data.length
    //                 len[i] = { num: i+1 }
    //             setPageLength(len);
    //             setData(changeData);
    //         }
    //     }
    //   })
    //   .catch((err) => {
    //     var changeData = [];
    //     for (var i = 0; i < num; i++) {
    //         changeData[i] = {
    //             image: null,
    //             name: "~준비중 입니다~",
    //             price: 0,
    //             storeName: "~준비중 입니다~",

    //             productId: 0,
    //             popularRank: 0,
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
      <div className="cake-flex">
        <div className="cake">
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
            <SelectWindowOne
              NumF={NumF}
              selectAll={selectAll}
              selectWindow={selectWindow}
              selectDataOne={selectDataOne}
              searchChangeF={SearchChangeF}
            />
            {resize > 767 || selectMobileTF ? (
              <SelectWindow
                cakestoreTF={true}
                NumF={NumF}

                selectAll={selectAll}
                selectWindow={selectWindow}
                
                selectData={selectData}
                
                setSelectMobileTF={setSelectMobileTF}
                searchChangeF={SearchChangeF}
              />
            ) : null}

            {/* 선택지 박스 */}
            <SelectBoxOne
              NumF={NumF}
              selectWindow={selectWindow}
            />
            <SelectBox
              cakestoreTF={true}
              NumF={NumF}
              selectBox={[false, false, false, false]}
              selectWindow={selectWindow}
              setSelectAllF={setSelectAll}
            />

            {/* 선택지 바 */}
            {selectAll.length != 0 ? (
              <div className="cake-select-bar">
                <SelectBar getData={selectAll} setSelectAllF={setSelectAll} searchChangeF={SearchChangeF} />
                <div
                  className="cake-bar-card-all-delete"
                  onClick={() => {
                    selectWindow[1][1] = '지역';
                    selectWindow[2][1] = '맛';
                    selectWindow[3][1] = '이벤트';
                    selectWindow[4][1] = '가격대';

                    selectWindow[1][2] = 28;
                    selectWindow[2][2] = 14;
                    selectWindow[3][2] = 42;
                    selectWindow[4][2] = 42;

                    setSelectAll([]);
                    SearchChangeF([]);
                  }}
                >
                  초기화
                </div>
              </div>
            ) : null}
          </div>

          <div className="cake-store-contents cake-contents-flex">
              <div className="contents">
                  <CakeCard getData={data} />
              </div>
              <PageBar page={page} setPageF={setPage} length={pageLength} pageChangeF={PageChangeF}/>
          </div>
          {/* <PickCard /> */}
        </div>
      </div>
    </>
  );
}

export default Cake;