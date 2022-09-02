import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
// import 'src/styles/seller/card/image-modal/ImageModal.scss';

// import 'src/styles/main/home/popularmenuModal.scss';
import 'src/styles/main/home/cakeMenuModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
  //  resize: any;
  imageModalShow: any;
  setImageModalShowF: any;
}

/* 
type userType = {
  [key: string]: any;
}; */

function CakeMenuModal({
  // resize,
  imageModalShow,
  setImageModalShowF,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  // 케이크 변경하기 위한 POST 함수
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

  return (
    <>
      <div className="spm-modal">
        {imageModalShow ? (
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
        ) : null}
      </div>
    </>
  );
}

export default CakeMenuModal;
