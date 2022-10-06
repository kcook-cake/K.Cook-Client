import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/detail/StoreDetail.scss';

import test2 from 'src/assets/test2.png';
// import cake6 from 'src/assets/cake6.png';
import profileNone from 'src/assets/detail/store/profile.png';
import timeImg from 'src/assets/detail/store/time.png';
import phoneImg from 'src/assets/detail/store/phone.png';
import locationImg from 'src/assets/detail/store/location.png';
import DetailAd from 'src/assets/detail-ad.png';
import TestImg from 'src/assets/searchIcon.png';

import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import LengthSlideTwo from 'src/components/detail/LengthSlideTwo';
import 'src/styles/detail/store/kakaoMap.scss';
import CakeCard from 'src/components/common/cake-store/CakeCard';
import PageBar from 'src/components/main/common/PageBar';
import storeCakeGetAxios from './storeCakeGetAxios';

// const { kakao } = window;

declare global {
  interface Window {
    kakao: any;
  }
  //  const kakao: any;
}

const StoreDetail = (auth: any) => {
  const [maxNum, setMaxNum] = useState(0);
  const [num, setNum] = useState(1);
  const [slidePx, setSlidePx] = useState(0);
  const [height, setHeight] = useState(0);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  const [cakeDetail, setCakeDetail] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState([]);



  const [data, setData] = useState([]);
  useEffect(() => {
    $('.hm-pc-flex').show();
    LinkClick('Store');
    if ($('.seller-flex').height() != null)
      setHeight(Number($('.seller-flex').height()));

    let isComponentMounted = true;
    let num = 8;
    axios({
        url: '/app/cakes/on-sale?storeId=17',
        method: 'GET',
      })
      .then((res) => {
        if (res.data) {
          if (isComponentMounted) {
            const data = res.data.result.content;

            let changeData = [];
            for (var i = 0; i < data.length; i++) {
                changeData[i] = res.data.result.content[i];
            }
            for (var i:number = data.length; i < num; i++) {
                changeData[i] = {
                  image: null,
                  name: "~준비중 입니다~",
                  price: 0,
                  storeName: "~준비중 입니다~",

                  productId: 0,
                  popularRank: 0,
                };
            }
            var len = [];
            for (var i=0; i<16/8; i++) //data.length
                len[i] = { num: i+1 }
            setPageLength(len);
            setData(changeData);
          }
        }
      })
      .catch((err) => {
        let changeData = [];
        for (var i = 0; i < num; i++) {
          changeData[i] = {
            image: null,
            name: "~준비중 입니다~",
            price: 0,
            storeName: "~준비중 입니다~",

            productId: 0,
            popularRank: 0,
          };
        }
        setPageLength([{num: 1}]);
        setData(changeData);
        console.log(err);
      });
    return () => {
      isComponentMounted = false;
    }


    // var container = document.getElementById('map');
    // var options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 3,
    // };
    // var map = new kakao.maps.Map(container, options);
    // var imageSrc =
    //   'http://amind.co.kr/data/file/figure/thumb-1931437945_a3ksBhWI_EC9B90_200x200.jpg'; // 마커이미지의 주소입니다

    // // axios.get으로 얻은 가게의 이름을 여기에 담기.
    // var names = '유니아케이크';

    // // 커스텀 오버레이
    // // 커스텀 오버레이에 표시할 내용입니다
    // // HTML 문자열 또는 Dom Element 입니다
    // var content = `
    //    <div class ="kakaomap_store">
    //      <div class ="kakaomap_store_image">
    //        <img src=${imageSrc} alt="img" />
    //      </div>
    //      <div class ="kakaomap_store_text">
    //        <span class="text">${names}</span>
    //      </div>
    //    </div>
    //   `;

    // // 커스텀 오버레이가 표시될 위치입니다
    // // + 뒤에 숫자로 위로 올려서 가게위치를 가리지 않게 조절.
    // var position = new kakao.maps.LatLng(33.450701 + 0.0003, 126.570667);

    // // 커스텀 오버레이를 생성합니다
    // var customOverlay = new kakao.maps.CustomOverlay({
    //   position: position,
    //   content: content,
    // });

    // // 커스텀 오버레이를 지도에 표시합니다
    // customOverlay.setMap(map);
  }, []);

  return (
    <>
      <div className="store-detail-flex">
        <div className="store-detail">
          <div className="store-detail-top">
            <div className="store-detail-main-img">
              <div className="store-detail-main-img-inner">
                {true ? (
                  <img src={test2} alt="store-detail-mainImg" />
                ) : (
                  <div>~준비중 입니다~</div>
                )}
              </div>
            </div>
            <div className="store-detail-top-box">
              <div className="store-detail-profile">
                {false ? (
                  <></>
                ) : (
                  <img src={profileNone} alt="store-detail-profile" />
                )}
              </div>
              <div className="store-detail-store-name">{auth.nickname}</div>
              <div className="store-detail-store-textarea">
                연리단길 지역 판매량 1위!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
              </div>
              <hr className="store-detail-store-hr" />
              <div className="store-detail-store-info">
                <img src={timeImg} alt="store-detail-timeImg" />
                서울 용산구 이태원로55길 111
              </div>
              <div className="store-detail-store-info">
                <img src={phoneImg} alt="store-detail-phoneImg" />
                서울 용산구 이태원로55길 111
              </div>
              <div className="store-detail-store-info store-detail-store-info-2">
                <img src={locationImg} alt="store-detail-locationImg" />
                <div
                  onClick={() =>
                    handleCopyClipBoard('서울 용산구 이태원로55길 111')
                  }>
                  서울 용산구 이태원로55길 111
                </div>
              </div>
              <div
                id="map"
                style={{ height: '178px', marginBottom: '20px' }}
              ></div>{' '}
              
              <div className="store-detail-store-button-box">
                <button
                  className="store-detail-store-button"
                  style={{ float: 'left' }}
                >
                  <img src={TestImg} alt="store-detail-likeButton" />
                  99
                </button>
                <button
                  className="store-detail-store-button"
                  style={{ float: 'right' }}
                >
                  <img src={TestImg} alt="store-detail-shareImg" />
                  공유하기
                </button>
              </div>
            </div>
          </div>
          <img
            src={DetailAd}
            className="store-detail-ad"
            alt="store-detail-ad"
          />

          <div className="store-detail-cakelist home">
            <div className="store-detail-title-flex">
              <div className="store-detail-title">케이크</div>
            </div>

            <div className="cake-store-contents cake-contents-flex">
                <div className="contents">
                    <CakeCard getData={data} cakeDetail={cakeDetail} />
                </div>
                <PageBar page={page} setPageF={setPage} length={pageLength}/>
            </div>

          </div>

        </div>
      </div>
      <div className="pc" style={{ width: '5px', height: 2000 - height }}></div>
    </>
  );
};

export default StoreDetail;