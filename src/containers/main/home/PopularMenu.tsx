import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Url } from 'url';
import 'src/styles/main/home/PopularMenu.scss';

import axios from 'axios';

import LengthSlide_One from 'src/components/main/card/LengthSlide_One';
import homeGetAxios from './homeGetAxios';

import isSession from 'src/utils/isSession';
import ImageModal from 'src/components/main/card/image-modal/ImageModal';
import PopularmenuModal from './popularmenuModal';

const PopularMenu = () => {
  const [num, setNum] = useState(1);
  const [slidePx, setSlidePx] = useState(0);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setNum(1);
      setSlidePx(0);
    }
    setResize(window.innerWidth);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    var changeData: any = [];
    homeGetAxios(setData, changeData, 'popular-products', 1);
  }, []);

  // 인기상품 이미지 추가 모달창
  // 로그인확인
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
    accountId: 0,
    address: '',
    dateOfBirth: '',
    email: '',
    nickname: '',
    phoneNumber: '',
  });

  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;
  useEffect(() => {
    isSession(
      jwToken,
      (s: any) => {
        if (s) setSession(s);
      },
      (a: any) => {
        setAuth(a);
      }
    );
  }, [jwToken]);

  // 모달창 생성용 값
  const [modalShow, setModalShow] = useState(false);

  const [image, setImage] = useState<any>([]);
  const [bannerImage, setBannerImage] = useState<any>([]);

  return (
    <div className="popularmenu-flex home-flex">
      <div className="popularmenu home">
        <div className="popularmenu-title-flex">
          {auth.accountId == 31 ? (
            <>
              <div className="popularmenu-title">
                인기상품
                <button
                  onClick={
                    auth.accountId == 31
                      ? () => setModalShow((prev) => !prev)
                      : () => {}
                  }
                >
                  상품 변경
                </button>
              </div>
            </>
          ) : (
            <div className="popularmenu-title">인기상품</div>
          )}
          <PopularmenuModal
            //  resize={resize}
            imageModalShow={modalShow}
            setImageModalShowF={setModalShow}
          />
          <div className="popularmenu-btn">
            <div>{num}/5</div>
            <button
              className="popularmenu-btn-arrow"
              onClick={() => {
                setNum(num - 1);
                if (resize <= 767) setSlidePx(slidePx + 704);
                else setSlidePx(slidePx + 1199);
                if (num == 1) {
                  setNum(5);
                  setSlidePx(-4796);
                }
              }}
              style={{ marginLeft: '5px' }}
            >
              &lt;
            </button>
            <button
              className="popularmenu-btn-arrow"
              onClick={() => {
                setNum(num + 1);
                if (resize <= 767) setSlidePx(slidePx - 704);
                else setSlidePx(slidePx - 1199);
                if (num == 5) {
                  setNum(1);
                  setSlidePx(0);
                }
              }}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="popularmenu-inner">
          <ul className="popularmenu-contents">
            <LengthSlide_One getData={data} resize={resize} slidePx={slidePx} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
