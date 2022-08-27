import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainCrousel.scss';

import getAxios from 'src/utils/getAxios';
import BannerSlider from '../card/BannerSlide';
import isSession from 'src/utils/isSession';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';

function Crousel() {
  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(() => {
    getAxios(setData, setLengthTodays, 'cakes', [], 4, pageTodays, 0);
    // axios
    // .get(`https://prod.kcook-cake.com/app/cakes`)
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  // 배너 모달창 용도
  // 로그인 여부
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({});
  const [isManager, setManager] = useState(false);
  const [image, setImage] = useState([
      'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
      '',
      '',
      '',
      '',
  ]);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    var jwToken = undefined;
    if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
    else jwToken = sessionStorage.jwToken;
    isSession(
      jwToken,
      (s: any) => {
        if (s) setSession(s);
      },
      (a: any) => {
        setAuth(a);
      }
    );
  }, []);

  type Employee = {
    accountId?: number;
    [key: string]: any;
  };

  const obj: Employee = {
    auth,
  };

  // 관리자라면 isManager = true
  useEffect(() => {
    if (Number(obj.auth.accountId) === 31) {
      setManager(true);
    } else {
      setManager(false);
    }
  }, [obj.auth.accountId]);

  // 배너 등록 페이지
  const [isBannerAdd, setIsBannerAdd] = useState(false);
  const hello = () => {
    if (isManager) {
      setIsBannerAdd(true);
    } else {
      setIsBannerAdd(false);
    }
  };

  // accountId가 true면 모달창 생성 <<
  return (
    <>
        {isBannerAdd && (
          <>
            <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div>
            <div
              className="spm-modal-box"
              style={{
                top:
                  resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
                left: (resize-775)/2+"px",
              }}>
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div
                className="spm-modal-img-inner"
                onClick={() => {
                  //addImage[0] = 사진 링크 넣기
                }}>
                {image[0] == '' ? (
                  <div className="spm-add-img">
                    <AddIcon />
                  </div>
                ) : (
                  <img src={image[0]} />
                )}
              </div>
              <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
              <div className="spm-modal-img-box">
                <div className="spm-modal-img-inner">
                  {image[1] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={image[1]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {image[2] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={image[2]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {image[3] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={image[3]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {image[4] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={image[4]} />
                  )}
                </div>
              </div>
              <div className="spmdetail-content-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => setIsBannerAdd(false)}>
                  등록
                </button>
                <button
                  className="spmdetail-content-btn spmdetail-content-btn-left"
                  onClick={() => {
                    setIsBannerAdd(false);
                    setImage(['', '', '', '', '']);
                  }}>
                  취소
                </button>
              </div>
            </div>
          </>
        )}
      <div
        className="crousel"
        onClick={isManager? hello: ()=>{}}>
        <BannerSlider getData={data} />
      </div>
    </>
  );
}

export default Crousel;
