import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/main/card/CakeStore.scss';

import axios from 'axios';

import search from '../../../assets/search.svg';
import selectAllow from '../../../assets/selectArrow.png';
import X from '../../../assets/x.svg';

import getAxios from 'src/utils/getAxios';
import PickCard from 'src/components/main/card/PickCard';
import CakeBarCard from 'src/components/main/cake/CakeBarCard';
import CakeBar_MobileCard from 'src/components/main/cake/CakeBar_MobileCard';
import StoreCard from 'src/components/main/card/StoreCard';
import LinkClick from 'src/utils/LinkClick';
import CakeStoreTitle from 'src/components/main/card/CakeStoreTitle';

import classNames from 'classnames';

function Store() {
  //선택지 기타 등등
  //선택지 가로 위치 계산
  const [width, setWidth] = useState(0);
  const SelectCloseF = () => {
    var n1: any = $('.cake-flex').width();
    var n2: any = $('.cake').width();

    if ((n1 - n2) / 2 < 0) setWidth(0);
    else setWidth((n1 - n2) / 2);

    setSelectOneShow(false);
    setSelectTwoShow(false);
    setSelectThreeShow(false);
    setSelectFourShow(false);
  };

  const [selectOneNum, setSelectOneNum] = useState(0);
  const [selectTwoNum, setSelectTwoNum] = useState(0);
  const [selectThreeNum, setSelectThreeNum] = useState(0);
  const [selectFourNum, setSelectFourNum] = useState(0);

  //선택지
  const [selectOneShow, setSelectOneShow] = useState(false);
  const [selectOne, setSelectOne] = useState('정렬');
  const SelectOneF = (str: string, num: number, length: number) => {
    // $(".cake-select-li").css("color", "#8a8a8a");
    $('#cake-select-li-' + num).css('color', '#ea5450');
    setSelectOneNum(length);
    setSelectOne(str);
    setSelectOneShow(false);
  };

  const [selectAll, setSelectAll] = useState([]);
  const [selectTwoShow, setSelectTwoShow] = useState(false);
  const [selectTwo, setSelectTwo] = useState('지역');
  const [selectThreeShow, setSelectThreeShow] = useState(false);
  const [selectThree, setSelectThree] = useState('시/군');
  const [selectFourShow, setSelectFourShow] = useState(false);
  const [selectFour, setSelectFour] = useState('지하철');
  const SelectF = (n: number, str: string, length: number) => {
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
    } else {
      setSelectFourNum(length);
      setSelectFour(str);
      setSelectFourShow(false);
    }
  };

  //선택지바
  const SelectBarF = (str: string) => {
    for (var i = 0; i < selectAll.length; i++) {
      if (selectAll[i] == str) return false;
    }
    return true;
  };

  const [cakeDetail, setCakeDetail] = useState(true);

  //선택지 모바일
  const [selectMobileTF, setSelectMobileTF] = useState(false);

  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(() => {
    LinkClick('Store');
    getAxios(setData, setLengthTodays, 'cakes', [], 18, pageTodays, 0);
  }, []);

  /* 지역클릭->시/군 보이게 & 지하철흐리게 */
  const [cityBtnOn, setCityBtnOn] = useState(false);
  const [subwayBtnOn, setSubwayBtnOn] = useState(false);

  // 모바일 상세정보 지역,지하철 버튼 진하게/흐리게
  const [mobileCityBtnOn, setMobileCityBtnOn] = useState(false);
  const [mobileSubwayBtnOn, setMobileSubwayBtnOn] = useState(false);

  // 초기화 버튼
  // 배열초기화는 주석처리해둠 <-- 넣어두면 자동초기화할때 무한루프
  const onResetCakeSelect = () => {
    setSelectTwo('지역');
    setSelectThree('시/군');
    setSelectFour('지하철');
    setSelectTwoNum(0);
    setSelectThreeNum(0);
    setSelectFourNum(0);
    SelectCloseF();
    //    setSelectAll([]);

    //    setCityBtnOn(false);
    //    setSubwayBtnOn(false);
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

  // 아래 두개 리버트 기능
  // 동작할때 지직거리는것 때문에
  // 비동기로 바꿀 예정

  const onRevertToSubway = () => {
    if (
      cityBtnOn === true ||
      (Array.isArray(selectAll) && selectAll.length !== 0 && cityBtnOn) ||
      selectTwo !== '지역'
    ) {
      setSelectAll([]);
      //   setSelectFourShow(true);
      //      setCityBtnOn(false);
    }
  };

  const onRevertToCity = () => {
    if (
      subwayBtnOn === true ||
      (Array.isArray(selectAll) && selectAll.length !== 0 && subwayBtnOn) ||
      selectFour !== '지하철'
    ) {
      setSelectAll([]);
      //      setSelectTwoShow(true);
    }
  };

  return (
    <>
      <div className="cake-flex store-flex">
        {/* Mobile 선택지 창 */}
        {selectMobileTF ? (
          <>
            <div className="mobile cake-select-mobile-flex">
              <div className="cake-select-mobile-top">
                <div style={{ marginLeft: '30px' }}></div>
                <div>상세검색</div>
                <div
                  onClick={() => {
                    setSelectMobileTF(false);
                  }}
                >
                  <img src={X} />
                </div>
              </div>
              <div
                className={classNames('cake-select-mobile', {
                  nouse: mobileSubwayBtnOn,
                })}
              >
                지역
                <div
                  className="cake-select-mobile-button"
                  onClick={() => {
                    SelectCloseF();
                    if (selectTwoShow) setSelectTwoShow(false);
                    else setSelectTwoShow(true);
                    setMobileCityBtnOn((prev) => !prev);
                    setMobileSubwayBtnOn(false);
                  }}
                >
                  선택하기
                </div>
              </div>
              {selectTwoShow ? (
                <div className="cake-select-relative-mobile">
                  <ul className="cake-select-ul-2">
                    <li
                      className="cake-select-li-top cake-select-li"
                      onClick={() => {
                        SelectF(3, '서울', 0);
                      }}
                    >
                      서울
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(3, '경기', 0);
                      }}
                    >
                      경기
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(3, '인천', 0);
                      }}
                    >
                      인천
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(3, '강릉', 0);
                      }}
                    >
                      강릉
                    </li>
                    <li
                      className="cake-select-li-bottom cake-select-li"
                      onClick={() => {
                        SelectF(3, '부산', 5);
                      }}
                    >
                      부산
                    </li>
                  </ul>
                </div>
              ) : null}

              {/* 시/군 모바일 탭버튼 */}

              <div
                className={classNames('cake-select-mobile', {
                  nouse: mobileSubwayBtnOn,
                })}
              >
                시/군
                <div
                  className="cake-select-mobile-button"
                  onClick={() => {
                    SelectCloseF();
                    if (selectThreeShow) setSelectThreeShow(false);
                    else setSelectThreeShow(true);
                  }}
                >
                  선택하기
                </div>
              </div>
              {selectThreeShow && (
                <div className="cake-select-relative-mobile">
                  <ul className="cake-select-ul">
                    <li
                      className="cake-select-li-top cake-select-li"
                      onClick={() => {
                        SelectF(2, '생크림', 30);
                      }}
                    >
                      생크림
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(2, '크림치즈', 45);
                      }}
                    >
                      크림치즈
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(2, '초코', 15);
                      }}
                    >
                      초코
                    </li>
                    <li
                      className="cake-select-li-bottom cake-select-li"
                      onClick={() => {
                        SelectF(2, '과일', 15);
                      }}
                    >
                      과일
                    </li>
                  </ul>
                </div>
              )}

              {/* 지하철 모바일 탭버튼 */}
              <div
                className={classNames('cake-select-mobile', {
                  nouse: mobileCityBtnOn,
                })}
              >
                {/* <div className="cake-select-mobile"> */}
                지하철
                <div
                  className="cake-select-mobile-button"
                  onClick={() => {
                    SelectCloseF();
                    if (selectFourShow) setSelectFourShow(false);
                    else setSelectFourShow(true);
                    setMobileSubwayBtnOn((prev) => !prev);
                    setMobileCityBtnOn(false);
                  }}
                >
                  선택하기
                </div>
              </div>
              {selectFourShow && (
                <div className="cake-select-relative-mobile">
                  <ul className="cake-select-ul-2">
                    <li
                      className="cake-select-li-top cake-select-li"
                      onClick={() => {
                        SelectF(4, '생일', -15);
                      }}
                    >
                      생일
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(4, '커플 기념일', 35);
                      }}
                    >
                      커플 기념일
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(4, '어버이날', 15);
                      }}
                    >
                      어버이날
                    </li>
                    <li
                      className="cake-select-li"
                      onClick={() => {
                        SelectF(4, '돌잔치', 0);
                      }}
                    >
                      돌잔치
                    </li>
                    <li
                      className="cake-select-li-bottom cake-select-li"
                      onClick={() => {
                        SelectF(4, '크리스마스', 35);
                      }}
                    >
                      크리스마스
                    </li>
                  </ul>
                </div>
              )}
              {/* Mobile 선택지 바 */}
              <div className="cake-select-bar-mobile">
                <CakeBar_MobileCard
                  setSelectAllF={setSelectAll}
                  getData={selectAll}
                />
                <div
                  className="cake-bar-card-all-delete"
                  onClick={() => {
                    onResetCakeSelect();

                    setSelectAll([]);
                    setCityBtnOn(false);
                    setSubwayBtnOn(false);
                  }}
                >
                  초기화
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Pc 선택지창 */}
        {selectOneShow ? (
          <div
            className="cake-select-absolute"
            style={{ left: width + 1060 + 'px' }}
          >
            <div className="cake-select-top"></div>
            <ul className="cake-select-ul">
              <li
                className="cake-select-li-top cake-select-li"
                onClick={() => {
                  SelectOneF('별점 인기순', 1, 45);
                }}
              >
                별점 인기순
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectOneF('최신순', 2, 15);
                }}
              >
                최신순
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectOneF('판매량순', 3, 30);
                }}
              >
                판매량순
              </li>
              <li
                className="cake-select-li-bottom cake-select-li"
                onClick={() => {
                  SelectOneF('리뷰 많은 순', 4, 50);
                }}
              >
                리뷰 많은 순
              </li>
            </ul>
          </div>
        ) : null}
        {selectTwoShow ? (
          <div
            className="pc cake-select-absolute"
            style={{ left: width - 45 + selectTwoNum + 'px' }}
          >
            <div className="cake-select-top"></div>
            <ul className="cake-select-ul-2">
              <li
                className="cake-select-li-top cake-select-li"
                onClick={() => {
                  SelectF(2, '서울', 0);
                }}
              >
                서울
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(2, '경기', 0);
                }}
              >
                경기
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(2, '인천', 0);
                }}
              >
                인천
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(2, '강릉', 0);
                }}
              >
                강릉
              </li>
              <li
                className="cake-select-li-bottom cake-select-li"
                onClick={() => {
                  SelectF(2, '부산', 0);
                }}
              >
                부산
              </li>
            </ul>
          </div>
        ) : null}
        {selectThreeShow ? (
          <div
            className="pc cake-select-absolute"
            style={{ left: width + 15 + selectTwoNum + selectThreeNum + 'px' }}
          >
            <div className="cake-select-top"></div>
            <ul className="cake-select-ul">
              <li
                className="cake-select-li-top cake-select-li"
                onClick={() => {
                  SelectF(3, '생크림', 30);
                }}
              >
                생크림
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(3, '크림치즈', 40);
                }}
              >
                크림치즈
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(3, '초코', 12);
                }}
              >
                초코
              </li>
              <li
                className="cake-select-li-bottom cake-select-li"
                onClick={() => {
                  SelectF(3, '과일', 12);
                }}
              >
                과일
              </li>
            </ul>
          </div>
        ) : null}
        {selectFourShow ? (
          <div
            className="pc cake-select-absolute"
            style={{
              left:
                width +
                95 +
                selectTwoNum +
                selectThreeNum +
                selectFourNum +
                'px',
            }}
          >
            <div className="cake-select-top"></div>
            <ul className="cake-select-ul-2">
              <li
                className="cake-select-li-top cake-select-li"
                onClick={() => {
                  SelectF(4, '생일', -15);
                }}
              >
                생일
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(4, '커플 기념일', 35);
                }}
              >
                커플 기념일
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(4, '어버이날', 15);
                }}
              >
                어버이날
              </li>
              <li
                className="cake-select-li"
                onClick={() => {
                  SelectF(4, '돌잔치', 0);
                }}
              >
                돌잔치
              </li>
              <li
                className="cake-select-li-bottom cake-select-li"
                onClick={() => {
                  SelectF(4, '크리스마스', 35);
                }}
              >
                크리스마스
              </li>
            </ul>
          </div>
        ) : null}

        <div className="cake store">
          <div className="cake-select-flex">
            <div className="cake-select cake-select-one-flex">
              <div style={{ display: 'flex' }}>
                <button id="cake-select-one" className="cake-select-button">
                  {selectOne}
                </button>
                <div className="cake-select-img">
                  <img
                    src={selectAllow}
                    onClick={() => {
                      SelectCloseF();
                      if (selectOneShow) setSelectOneShow(false);
                      else setSelectOneShow(true);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="mobile cake-search"
              onClick={() => {
                setSelectMobileTF(true);
              }}
            >
              <img src={search} />
              상세검색
            </div>

            {/* PC-지역 버튼 */}
            <div
              className={classNames('pc', 'cake-select', {
                use: cityBtnOn || selectTwo !== '지역',
                nouse: subwayBtnOn || selectFour !== '지하철',
              })}
            >
              <div style={{ display: 'flex' }}>
                <button id="cake-select-three" className="cake-select-button">
                  {selectTwo}
                </button>
                <div className="cake-select-img">
                  <img
                    src={selectAllow}
                    onClick={() => {
                      onRevertToCity();

                      SelectCloseF();
                      if (selectTwoShow) setSelectTwoShow(false);
                      else setSelectTwoShow(true);
                      setCityBtnOn((prev) => !prev);
                      setSubwayBtnOn(false);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* PC-시/군 버튼 */}
            {selectTwoShow !== false || selectTwo !== '지역' ? (
              <div className="pc cake-select">
                <div style={{ display: 'flex' }}>
                  <button id="cake-select-two" className="cake-select-button">
                    {selectThree}
                  </button>
                  <div className="cake-select-img">
                    <img
                      src={selectAllow}
                      onClick={() => {
                        SelectCloseF();
                        if (selectThreeShow) setSelectThreeShow(false);
                        else setSelectThreeShow(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {/* PC-지하철 버튼*/}
            <div
              className={classNames('pc', 'cake-select', {
                use: subwayBtnOn || selectFour !== '지하철',
                nouse: cityBtnOn || selectTwo !== '지역',
              })}
            >
              <div style={{ display: 'flex' }}>
                <button id="cake-select-four" className="cake-select-button">
                  {selectFour}
                </button>
                <div className="cake-select-img">
                  <img
                    src={selectAllow}
                    alt="cake-select-img"
                    onClick={() => {
                      onRevertToSubway();
                      //
                      setSubwayBtnOn((prev) => !prev);
                      setCityBtnOn(false);

                      SelectCloseF();
                      if (selectFourShow) setSelectFourShow(false);
                      else setSelectFourShow(true);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Pc 선택지 바 */}
            {selectAll.length == 0 ? null : (
              <div className="pc cake-select-bar">
                <CakeBarCard setSelectAllF={setSelectAll} getData={selectAll} />
                <div
                  className="cake-bar-card-all-delete"
                  onClick={() => {
                    onResetCakeSelect();

                    setSelectAll([]);
                    setCityBtnOn(false);
                    setSubwayBtnOn(false);
                  }}
                >
                  초기화
                </div>
              </div>
            )}
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
