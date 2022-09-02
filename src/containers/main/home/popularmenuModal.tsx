import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
// import 'src/styles/seller/card/image-modal/ImageModal.scss';

import 'src/styles/main/home/popularmenuModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
  //  resize: any;

  imageModalShow: any;
  setImageModalShowF: any;
}

type userType = {
  [key: string]: any;
};

function PopularmenuModal({
  // resize,
  imageModalShow,
  setImageModalShowF,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  // 인기상품 변경하기 위한 patch 함수
  const [cakeId, setCakeId] = useState(0);
  const [popularRank, setPopularRank] = useState(0);

  function UpdatePopImg() {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/products/popularity',
      method: 'PATCH',
      data: {
        popularities: [
          {
            cakeId: cakeId,
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
        setCakeId(0);
        setPopularRank(0);
      })
      .catch((err) => {
        console.error('err :: ', err);
      });
  }

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
              <div className="spm-modal-input">
                <div className="spm-modal-cakeId-input">
                  <label htmlFor="cakeId" style={{ color: 'black' }}>
                    CakeId
                  </label>
                  <input
                    id="cakeId"
                    placeholder="CakeId를 입력해주세요."
                    type="number"
                    value={cakeId}
                    onChange={(e: any) => {
                      setCakeId(e.target.value);
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
                    setCakeId(0);
                    setPopularRank(0);
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
        ) : null}
      </div>
    </>
  );
}

export default PopularmenuModal;
