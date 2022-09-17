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
import cakeGetAxios from 'src/utils/cakeGetAxios';
import PageBar from 'src/components/main/common/PageBar';

function Cake() {
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
    LinkClick('Cake');

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    cakeGetAxios(setData, setPageLength, 'cakes', 1, 12);
    $("#cake-page-length").val("1")
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

  return (
    <>
      <div className="cake-flex">
        {/* 선택지창 */}
        <SelectWindowOne
          width={width}
          NumF={NumF}
          selectWindow={selectWindow}
          selectDataOne={selectDataOne}
        />
        {resize > 767 || selectMobileTF ? (
          <SelectWindow
            cakestoreTF={true}
            width={width}
            height={250}
            NumF={NumF}
            selectAll={selectAll}
            selectBox={[false, false, false]}
            selectWindow={selectWindow}
            selectDataOne={selectDataOne}
            selectData={selectData}
            setSelectMobileTF={setSelectMobileTF}
            SelectCloseF={SelectCloseF}
            setSelectAllF={setSelectAll}
          />
        ) : null}

        <div className="cake">
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

            {/* 선택지 박스 */}
            <SelectBoxOne
              selectWindow={selectWindow}
              SelectCloseF={SelectCloseF}
            />
            <SelectBox
              cakestoreTF={true}
              NumF={NumF}
              selectBox={[false, false, false, false]}
              selectWindow={selectWindow}
              SelectCloseF={SelectCloseF}
              setSelectAllF={setSelectAll}
            />

            {/* 선택지 바 */}
            {selectAll.length != 0 ? (
              <div className="cake-select-bar">
                <SelectBar setSelectAllF={setSelectAll} getData={selectAll} />
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
          </div>

          <div className="cake-store-contents cake-contents-flex">
              <div className="contents">
                  <CakeCard getData={data} cakeDetail={cakeDetail} />
              </div>
              <PageBar page={page} setPageF={setPage} length={pageLength}/>
          </div>
          <PickCard />
        </div>
      </div>
    </>
  );
}

export default Cake;