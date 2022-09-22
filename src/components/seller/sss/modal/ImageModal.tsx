import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/common/modal/Modal.scss';
import 'src/styles/seller/sss/modal/ImageModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import KCOOKScroll from 'src/utils/KCOOKScroll';

interface Props {
  num: any;
  setNum: any;
  resize: any;

  imageTF: any;

  imageModalShow: any;
  setImageModalShowF: any;

  imageData: any;
  setImageDataF: any;

  logoImgSrc: any;
  setLogoImgSrc: any;
}

type userType = {
  [key: string]: any;
};

function ImageModal({
  num,
  setNum,
  resize,
  imageTF,
  imageModalShow,
  setImageModalShowF,
  imageData,
  setImageDataF,
  //
  logoImgSrc,
  setLogoImgSrc,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>(imageData);
  // const [imageOne, setImageOne] = useState(imageData[0]);

  const formData = new FormData();
  const UpdateIogoF = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    formData.append('image', e.target.files[0]);

    LogoFormDataF(e);
    //   axios({
    //     url: '/app/banner/carousel',
    //     method: 'POST',
    //     data: {
    //       'bannerListReq[0].connectedUrl': 'https://www.kcook-cake.com/',
    //       'bannerListReq[0].mobileImage': formData,
    //       'bannerListReq[0].orders': idx + 1,
    //       'bannerListReq[0].webImage': formData,
    //       //"이미지url" : 인풋창에 적은값
    //     },
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'X-ACCESS-TOKEN': jwToken,
    //     },
    //   })
    //     .then((res) => {
    //     })
    //     .catch((err) => {
    //     });
    setNum(num + 1);
  }, []);

  useEffect(() => {
    
  },[]);

  // 스토어로고 수정
  const LogoFormDataF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      logoChange();
      formData.set('logoImage1', e.target.files[0]);
      if (updateFF) formData.set('logoImage1', '');
    },
    []
  );

  //로고용 값들
  const [updateFF, setupdateFF] = useState(true);
  const [preImage, setPreImage] = useState<File>();
  const [addLogo, setAddLogo] = useState<string>();
  const logoInput = useRef<HTMLInputElement>();

  const [afterUpdate, setAfterUpdate] = useState(false);

  const logoChange = () => {
    const file = logoInput.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage(file);
    else setPreImage(null);
    setupdateFF(false);
  };
  useEffect(() => {
    if (preImage) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddLogo(reader.result as string);
      };
      reader.readAsDataURL(preImage);
    } else setAddLogo(null);
  }, [preImage]);

  return (
    <>
      <div className="spm-modal">
        {imageModalShow ? (
          <>
            <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}>
            </div>

            <div
              className="spm-modal-box"
              style={{
                top:
                  resize <= 767? 
                    window.innerHeight - 530 < 0? 
                      window.pageYOffset: 
                      window.pageYOffset + 20: 
                    window.innerHeight - 412 < 0? 
                      window.pageYOffset: 
                      window.pageYOffset + (window.innerHeight - 412) / 2,
                left: resize <= 767 ? 20 : (resize - 775) / 2,
              }}>
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div className="sss-modal-img-flex">
                <label htmlFor="home-file-0">
                  <div className='sss-modal-img'>
                    {!afterUpdate ? (
                      //업데이트 이전
                      image[0] != '' ? (
                        <img src={image[0]} alt="logodefaultImage" className='modal-img'/>
                      ) : (
                        <div className='sss-modal-img-inner-icon'>
                          <AddIcon />
                        </div>
                      )
                    ) : (
                      // 업데이트 이후

                      <img src={addLogo} alt="newLogoImage" className='modal-img' />
                    )}
                  </div>
                </label>
                {/* 스토어로고 클릭시 ImageTF === false  ///  스토어사진 클릭시 ImageTF === ture*/}
                {!imageTF ? (
                  //  LOGO
                  <input
                    id="home-file-0"
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={logoInput}
                    onChange={(e) => (UpdateIogoF(e), setAfterUpdate(true))}
                  />
                ) : (
                  //  PHOTO
                  <input
                    id="home-file-0"
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) => (UpdateIogoF(e), setAfterUpdate(true))}
                  />
                )}
              </div>

              <div className="spmdetail-content-btn-box spm-modal-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    // { 스토어 로고 axios post}
                    KCOOKScroll(false);
                  }}>
                  등록
                </button>

                <button
                  className="spmdetail-content-btn"
                  style={{ color: "#ea5450", backgroundColor: "#fff", }}
                  onClick={() => {
                    setImageModalShowF(false);
                    setNum(num + 1);
                    setAfterUpdate(false);
                    KCOOKScroll(false);
                  }}>
                  취소
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default ImageModal;
