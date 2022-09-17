import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/common/modal/Modal.scss';
import 'src/styles/seller/sss/image-modal/ImageModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
  num: any;
  setNum: any;
  resize: any;

  imageTF: any;

  imageModalShow: any;
  setImageModalShowF: any;

  imageData: any;
  setImageDataF: any;

  photoImgSrc: any;
  setPhotoImgSrc: any;
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
  photoImgSrc,
  setPhotoImgSrc,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>(imageData);
  // const [imageOne, setImageOne] = useState(imageData[0]);

  const UpdateIogoF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (!e.target.files) return;

      formData.append('image', e.target.files[0]);

      PhotoFormDataF(e, idx);
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
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
      setNum(num + 1);
    },
    []
  );

  //  console.log(imageData);

  // 스토어사진 수정
  const PhotoFormDataF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (idx == 0) imageChange();
      else if (idx == 1) imageChange1();
      else if (idx == 2) imageChange2();
      else if (idx == 3) imageChange3();
      else if (idx == 4) imageChange4();

      formData.set('bannerImage' + (idx + 1), e.target.files[0]);
      for (var i = 1; i < 6; i++)
        if (imageTF[i - 1]) formData.set('bannerImage' + i, '');
    },
    []
  );

  //로고용 값들
  let [updateFF, setupdateFF] = useState([true, true, true, true, true]);
  const resetUpdateFF = () => {
    for (let i = 0; i < 5; i++) {
      updateFF[i] = true;
      setupdateFF(updateFF);
    }
  };

  const [preImage, setPreImage] = useState<File>();
  const [preImage1, setPreImage1] = useState<File>();
  const [preImage2, setPreImage2] = useState<File>();
  const [preImage3, setPreImage3] = useState<File>();
  const [preImage4, setPreImage4] = useState<File>();

  const [addPhoto, setAddPhoto] = useState<string>();
  const [addPhoto1, setAddPhoto1] = useState<string>();
  const [addPhoto2, setAddPhoto2] = useState<string>();
  const [addPhoto3, setAddPhoto3] = useState<string>();
  const [addPhoto4, setAddPhoto4] = useState<string>();

  const photoInput = useRef<HTMLInputElement>();
  const photoInput1 = useRef<HTMLInputElement>();
  const photoInput2 = useRef<HTMLInputElement>();
  const photoInput3 = useRef<HTMLInputElement>();
  const photoInput4 = useRef<HTMLInputElement>();

  const imageChange = () => {
    const file = photoInput.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage(file);
    else setPreImage(null);
    updateFF[0] = false;
    setupdateFF(updateFF);
  };
  useEffect(() => {
    if (preImage) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddPhoto(reader.result as string);
      };
      reader.readAsDataURL(preImage);
    } else setAddPhoto(null);
  }, [preImage]);

  const imageChange1 = () => {
    const file = photoInput1.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage1(file);
    else setPreImage1(null);
    updateFF[1] = false;
    setupdateFF(updateFF);
  };
  useEffect(() => {
    if (preImage1) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddPhoto1(reader.result as string);
      };
      reader.readAsDataURL(preImage1);
    } else setAddPhoto1(null);
  }, [preImage1]);

  const imageChange2 = () => {
    const file = photoInput2.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage2(file);
    else setPreImage2(null);
    updateFF[2] = false;
    setupdateFF(updateFF);
  };
  useEffect(() => {
    if (preImage2) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddPhoto2(reader.result as string);
      };
      reader.readAsDataURL(preImage2);
    } else setAddPhoto2(null);
  }, [preImage2]);

  const imageChange3 = () => {
    const file = photoInput3.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage3(file);
    else setPreImage3(null);
    updateFF[3] = false;
    setupdateFF(updateFF);
  };
  useEffect(() => {
    if (preImage3) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddPhoto3(reader.result as string);
      };
      reader.readAsDataURL(preImage3);
    } else setAddPhoto3(null);
  }, [preImage3]);

  const imageChange4 = () => {
    const file = photoInput4.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage4(file);
    else setPreImage4(null);
    updateFF[4] = false;
    setupdateFF(updateFF);
  };
  useEffect(() => {
    if (preImage4) {
      var reader: any = new FileReader();
      reader.onloadend = () => {
        setAddPhoto4(reader.result as string);
      };
      reader.readAsDataURL(preImage4);
    } else setAddPhoto4(null);
  }, [preImage4]);

  var formData = new FormData();
  useEffect(() => {
    for (var i = 1; i < 6; i++) formData.append('storePhotoImage' + i, '');
  }, []);

  return (
    <>
      <div className="spm-modal">
        {imageModalShow ? (
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
                left: resize <= 767 ? 20 : (resize - 775) / 2,
              }}>
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div className="sss-modal-img-flex-2">
                <label htmlFor="home-file-0">
                    <div className='sss-modal-img-2'>
                      {updateFF[0] ? (
                        //업데이트 이전
                        image[0] != '' ? (
                          <img src={image[0]} alt="logodefaultImage" />
                        ) : (
                          <div className={classNames({
                              'sss-modal-img-inner-icon-2': image[0] == '',
                            })}>
                            <AddIcon />
                          </div>
                        )
                      ) : (
                        // 업데이트 이후
                        <img src={addPhoto} alt="newLogoImage" />
                      )}
                    </div>
                </label>
                <input
                  id="home-file-0"
                  className='modal-input'
                  type="file"
                  accept="image/*"
                  ref={photoInput}
                  onChange={
                    (e) => UpdateIogoF(e, 0)
                  }
                />
              </div>

              {/*  스토어사진 클릭시 */}

              <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
              <div className="modal-scroll">
                {/* 여기부터 */}
                <div className="sss-modal-img-flex-2">
                  <label htmlFor={'home-file-' + 1}>
                    <div className='sss-modal-img-2'>
                      {updateFF[1] ? (
                        //업데이트 이전
                        image[1] != '' ? (
                          <img src={image[1]} alt="logodefaultImage" />
                        ) : (
                          <div className={classNames({
                              'sss-modal-img-inner-icon-2': image[1] == '',
                            })}>
                            <AddIcon />
                          </div>
                        )
                      ) : (
                        // 업데이트 이후
                        <img src={addPhoto1} alt="newLogoImage" />
                      )}
                    </div>
                  </label>
                  <input
                    id={'home-file-' + 1}
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={photoInput1}
                    style={{ display: 'none' }}
                    onChange={(e) => UpdateIogoF(e, 1)}
                  />
                </div>

                {/*  */}
                <div className="sss-modal-img-flex-2">
                  <label htmlFor={'home-file-' + 2}>
                    <div className='sss-modal-img-2'>
                      {updateFF[2] ? (
                        //업데이트 이전
                        image[2] != '' ? (
                          <img src={image[2]} alt="logodefaultImage" />
                        ) : (
                          <div className={classNames({
                              'sss-modal-img-inner-icon-2': image[2] == '',
                            })}>
                            <AddIcon />
                          </div>
                        )
                      ) : (
                        // 업데이트 이후
                        <img src={addPhoto2} alt="newLogoImage" />
                      )}
                    </div>
                  </label>
                  <input
                    id={'home-file-' + 2}
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={photoInput2}
                    style={{ display: 'none' }}
                    onChange={(e) => UpdateIogoF(e, 2)}
                  />
                </div>

                {/*  */}
                <div className="sss-modal-img-flex-2">
                  <label htmlFor={'home-file-' + 3}>
                    <div className='sss-modal-img-2'>
                      {updateFF[3] ? (
                        //업데이트 이전
                        image[3] != '' ? (
                          <img src={image[3]} alt="logodefaultImage" />
                        ) : (
                          <div className={classNames({
                              'sss-modal-img-inner-icon-2': image[3] == '',
                            })}>
                            <AddIcon />
                          </div>
                        )
                      ) : (
                        // 업데이트 이후
                        <img src={addPhoto3} alt="newLogoImage" />
                      )}
                    </div>
                  </label>
                  <input
                    id={'home-file-' + 3}
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={photoInput3}
                    style={{ display: 'none' }}
                    onChange={(e) => UpdateIogoF(e, 3)}
                  />
                </div>

                {/*  */}
                <div className="sss-modal-img-flex-2">
                  <label htmlFor={'home-file-' + 4}>
                    <div className='sss-modal-img-2'>
                      {updateFF[4] ? (
                        //업데이트 이전
                        image[4] != '' ? (
                          <img src={image[4]} alt="logodefaultImage" />
                        ) : (
                          <div className={classNames({
                              'sss-modal-img-inner-icon-2': image[4] == '',
                            })}>
                            <AddIcon />
                          </div>
                        )
                      ) : (
                        // 업데이트 이후
                        <img src={addPhoto4} alt="newLogoImage" />
                      )}
                    </div>
                  </label>
                  <input
                    id={'home-file-' + 4}
                    className='modal-input'
                    type="file"
                    accept="image/*"
                    ref={photoInput4}
                    style={{ display: 'none' }}
                    onChange={(e) => UpdateIogoF(e, 4)}
                  />
                </div>
              </div>

              <div className="spmdetail-content-btn-box spm-modal-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    // { 스토어 로고 axios post}
                  }}
                >
                  등록
                </button>
                <button
                  className="spmdetail-content-btn"
                  style={{ color: "#ea5450", backgroundColor: "#fff", }}
                  onClick={() => {
                    setImageModalShowF(false);
                    setNum(num + 1);
                    resetUpdateFF();
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
