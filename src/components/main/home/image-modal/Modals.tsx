import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
// import 'src/styles/seller/card/image-modal/ImageModal.scss';

// import 'src/styles/main/home/popularmenuModal.scss';
import 'src/styles/main/home/cakeMenuModal.scss';
import 'src/styles/main/home/popularmenuModal.scss';

interface Props {
  //  resize: any;
  imageModalShow: any;
  setImageModalShowF: any;
  cakeTF: any;
}

/* 
type userType = {
  [key: string]: any;
}; */

function MenuModal({
  // resize,
  imageModalShow,
  setImageModalShowF,
  cakeTF,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  // 인기상품___상품변경 모달창___ patch 함수
  // 인기상품___상품변경 모달창___ patch 함수
  // 인기상품___상품변경 모달창___ patch 함수
  const [popCakeId, setPopCakeId] = useState(undefined);
  const [popularRank, setPopularRank] = useState(undefined);

  function UpdatePopImg() {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/products/popularity',
      method: 'PATCH',
      data: {
        popularities: [
          {
            cakeId: popCakeId,
            popularityRank: popularRank,
          },
        ],
      },

      headers: {
        'X-ACCESS-TOKEN': jwToken,
      },
    })
      .then((res) => {
        console.log('res :: ', res);

        // PATCH한 뒤, 초기화
        setPopCakeId(undefined);
        setPopularRank(undefined);
      })
      .catch((err) => {
        console.error('err :: ', err);
      });
  }

  // 케이크___상품변경 모달창___ POST 함수
  // 케이크___상품변경 모달창___ POST 함수
  // 케이크___상품변경 모달창___ POST 함수
  const [cakeIds, setCakeIds] = useState<number[]>([]);

  const [cakeIdOne, setCakeId1] = useState(undefined);
  const [cakeIdTwo, setCakeId2] = useState(undefined);
  const [cakeIdThree, setCakeId3] = useState(undefined);
  const [cakeIdFour, setCakeId4] = useState(undefined);

  function UpdateCakeAPI() {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/products/representative-cake',
      method: 'POST',
      data: {
        updateRepresentativeCakeReq: {
          cakeIds: [cakeIds],
        },
      },
      headers: {
        'X-ACCESS-TOKEN': jwToken,
      },
    })
      .then((res) => {
        console.log('res :: ', res);

        // Post 이후, 초기화
        setCakeIds([]);
      })
      .catch((err) => {
        console.log('err :: ', err);
      });
  }

  useEffect(() => {
    let newcakeIds: React.SetStateAction<any[]> = [];
    newcakeIds = [cakeIdOne, cakeIdTwo, cakeIdThree, cakeIdFour];
    setCakeIds(newcakeIds);
  }, [cakeIdOne, cakeIdTwo, cakeIdThree, cakeIdFour]);

  // 스토어___상품변경 모달창___ POST 함수
  // 스토어___상품변경 모달창___ POST 함수
  // 스토어___상품변경 모달창___ POST 함수
  const [storeIds, setStoreIds] = useState<number[]>([]);

  const [storeIdOne, setStoreId1] = useState(undefined);
  const [storeIdTwo, setStoreId2] = useState(undefined);
  const [storeIdThree, setStoreId3] = useState(undefined);

  function UpdateStoreAPI() {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/stores/representative',
      method: 'POST',
      data: {
        updateRepresentativeCakeReq: {
          storeIds: [storeIds],
        },
      },
      headers: {
        'X-ACCESS-TOKEN': jwToken,
      },
    })
      .then((res) => {
        console.log('res :: ', res);

        // Post 이후, 초기화
        setStoreIds([]);
      })
      .catch((err) => {
        console.log('err :: ', err);
      });
  }

  useEffect(() => {
    let newStoreIds: React.SetStateAction<any[]> = [];
    newStoreIds = [storeIdOne, storeIdTwo, storeIdThree];
    setStoreIds(newStoreIds);
  }, [storeIdOne, storeIdTwo, storeIdThree]);

  return (
    <>
      <div className="spm-modal">
        {/* 인기상품 상품 변경 */}
        {imageModalShow && cakeTF == 1 && (
          <>
            {/*  <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div> */}

            <div
              className="spm-modal-box"
              /*  style={{
                top:
                  resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
              }} */
            >
              <div className="spm-modal-input">
                <div className="spm-modal-cakeId-input">
                  <label htmlFor="cakeId" style={{ color: 'black' }}>
                    CakeId
                  </label>
                  <input
                    id="cakeId"
                    placeholder="CakeId를 입력해주세요."
                    type="number"
                    value={popCakeId}
                    onChange={(e: any) => {
                      setPopCakeId(e.target.value);
                    }}
                  />
                </div>

                <div className="spm-modal-popularRank-input">
                  <label htmlFor="popularRank" style={{ color: 'black' }}>
                    PopularRank
                  </label>
                  <input
                    id="popularRank"
                    placeholder="PopularRank를 입력해주세요."
                    type="number"
                    value={popularRank}
                    onChange={(e: any) => {
                      setPopularRank(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="spmdetail-content-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    setImageModalShowF(false);

                    // 닫기 눌렀을때, 초기화
                    setPopCakeId(undefined);
                    setPopularRank(undefined);
                  }}
                >
                  닫기
                </button>
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    // setImageDataF(image);
                    //  setNum(num + 1);
                    UpdatePopImg(); // PATCH 함수 실행
                    alert('저장되었습니다.');
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          </>
        )}

        {/* 신상품 상품 변경 */}
        {imageModalShow && cakeTF == 2 && null}

        {/* 케이크 상품 변경 */}
        {imageModalShow && cakeTF == 3 && (
          <>
            {/*  <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div> */}

            <div
              className="spm-modal-box"
              /*  style={{
                top:
                  resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
              }} */
            >
              {/*    {[1, 2, 3, 4].map((data: any) => {
                return ( 
                    );
                      })}
                    */}
              <div className="spm-modal-input">
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId1" style={{ color: 'black' }}>
                    1 :: CakeId
                  </label>
                  <input
                    id="cakeId1"
                    placeholder="1 :: CakeId를 입력해주세요."
                    type="number"
                    value={cakeIdOne}
                    onChange={(e: any) => {
                      setCakeId1(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId2" style={{ color: 'black' }}>
                    2 :: CakeId
                  </label>
                  <input
                    id="cakeId2"
                    placeholder="2 :: CakeId를 입력해주세요."
                    type="number"
                    value={cakeIdTwo}
                    onChange={(e: any) => {
                      setCakeId2(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId3" style={{ color: 'black' }}>
                    3 :: CakeId
                  </label>
                  <input
                    id="cakeId3"
                    placeholder="3 :: CakeId를 입력해주세요."
                    type="number"
                    value={cakeIdThree}
                    onChange={(e: any) => {
                      setCakeId3(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId4" style={{ color: 'black' }}>
                    4 :: CakeId
                  </label>
                  <input
                    id="cakeId4"
                    placeholder="4 :: CakeId를 입력해주세요."
                    type="number"
                    value={cakeIdFour}
                    onChange={(e: any) => {
                      setCakeId4(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="spmdetail-content-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    setImageModalShowF(false);

                    // 닫기이후, 초기화
                    setCakeId1(undefined);
                    setCakeId2(undefined);
                    setCakeId3(undefined);
                    setCakeId4(undefined);
                  }}
                >
                  닫기
                </button>
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    UpdateCakeAPI(); // POST 함수 실행
                    alert('저장되었습니다.');
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          </>
        )}

        {/* 스토어 상품 변경 */}
        {imageModalShow && cakeTF == 4 && (
          <>
            {/*  <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div> */}

            <div
              className="spm-modal-box"
              /*  style={{
                top:
                  resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
              }} */
            >
              {/*    {[1, 2, 3, 4].map((data: any) => {
                return ( 
                    );
                      })}
                    */}
              <div className="spm-modal-input">
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId1" style={{ color: 'black' }}>
                    1 :: StoreId
                  </label>
                  <input
                    id="cakeId1"
                    placeholder="1 :: StoreId를 입력해주세요."
                    type="number"
                    value={storeIdOne}
                    onChange={(e: any) => {
                      setStoreId1(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId2" style={{ color: 'black' }}>
                    2 :: StoreId
                  </label>
                  <input
                    id="cakeId2"
                    placeholder="2 :: StoreId를 입력해주세요."
                    type="number"
                    value={storeIdTwo}
                    onChange={(e: any) => {
                      setStoreId2(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-cakeIds-input">
                  <label htmlFor="cakeId3" style={{ color: 'black' }}>
                    3 :: StoreId
                  </label>
                  <input
                    id="cakeId3"
                    placeholder="3 :: StoreId를 입력해주세요."
                    type="number"
                    value={storeIdThree}
                    onChange={(e: any) => {
                      setStoreId3(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="spmdetail-content-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    setImageModalShowF(false);

                    // 닫기이후, 초기화
                    setStoreId1(undefined);
                    setStoreId2(undefined);
                    setStoreId3(undefined);
                  }}
                >
                  닫기
                </button>
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    UpdateStoreAPI(); // POST 함수 실행
                    alert('저장되었습니다.');
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MenuModal;
