import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/spm-ssr/modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';

// import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

import addImage from 'src/assets/seller/sso-ssh/image-add.png';

interface Props {
  num: any;
  setNum: any;
  resize: any;

  imageModalShow: any;
  setImageModalShowF: any;

  imageData: any;
  setImageDataF: any;

  TF: any;
}

/* type userType = {
  [key: string]: any;
}; */

function ImageModal({
  num,
  setNum,
  resize,
  imageModalShow,
  setImageModalShowF,
  imageData,
  setImageDataF,
  TF,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  const [image, setImage] = useState<any>(imageData); // eslint-disable-line @typescript-eslint/no-unused-vars

  // axios.post할 이미지 url값 ( JSON보내는 형식에 따라 달라질 예정)
  // const [postUrl, setPostUrl] = useState('');

  // 9/14. 배너 미리보기 추가
  // 작업관리자에서 등록하면, image 데이터를 변경
  const axiosPostBanner = () => {
    axios({
      url: '/app/banner/carousel',
      method: 'POST',
      data: {
        'bannerListReq[0].connectedUrl': 'https://www.kcook-cake.com/',
        'bannerListReq[0].mobileImage': formData,
        //   'bannerListReq[0].orders': idx + 1,
        'bannerListReq[0].webImage': formData,
        //"이미지url" : 인풋창에 적은값

        //  api post 변경 예상 JSON형태 ::
        /*
        bannerImage1: formData.get('bannerImage1'),
        bannerImage2: formData.get('bannerImage2'),
        bannerImage3: formData.get('bannerImage3'),
        bannerImage4: formData.get('bannerImage4'),

        bannerUrl1: bannerLink1,
        bannerUrl2: bannerLink2,
        bannerUrl3: bannerLink3,
        bannerUrl4: bannerLink4,
         */
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-ACCESS-TOKEN': jwToken,
      },
    })
      .then((res) => {
        alert('등록되었습니다.');
        setImageModalShowF(false);
      })
      .catch((err) => {
        alert('슬라이드 이미지 등록에 실패했습니다.');
      });
  };

  const MakeFormDataF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (idx === 0) imageChange();
      else if (idx === 1) imageChange1();
      else if (idx === 2) imageChange2();
      else if (idx === 3) imageChange3();

      formData.set('bannerImage' + (idx + 1), e.target.files[0]);
      setFormData(formData);
      for (var i = 1; i < 6; i++)
        if (imageTF[i - 1]) {
          formData.set('bannerImage' + i, '');
          setFormData(formData);
        }
    },

    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  let [imageTF, setImageTF] = useState([true, true, true, true]);
  const [preImage, setPreImage] = useState<File>();
  const [preImage1, setPreImage1] = useState<File>();
  const [preImage2, setPreImage2] = useState<File>();
  const [preImage3, setPreImage3] = useState<File>();

  const [addPhoto, setAddPhoto] = useState<string>();
  const [addPhoto1, setAddPhoto1] = useState<string>();
  const [addPhoto2, setAddPhoto2] = useState<string>();
  const [addPhoto3, setAddPhoto3] = useState<string>();

  const photoInput = useRef<HTMLInputElement>();
  const photoInput1 = useRef<HTMLInputElement>();
  const photoInput2 = useRef<HTMLInputElement>();
  const photoInput3 = useRef<HTMLInputElement>();

  const [bannerLink1, setBannerLink1] = useState('');
  const [bannerLink2, setBannerLink2] = useState('');
  const [bannerLink3, setBannerLink3] = useState('');
  const [bannerLink4, setBannerLink4] = useState('');
  const imageChange = () => {
    const file = photoInput.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage(file);
    else setPreImage(null);
    imageTF[0] = false;
    setImageTF(imageTF);
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
    imageTF[1] = false;
    setImageTF(imageTF);
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
    imageTF[2] = false;
    setImageTF(imageTF);
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
    imageTF[3] = false;
    setImageTF(imageTF);
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

  let [formData, setFormData] = useState(new FormData());
  //  var formData = new FormData();
  useEffect(
    () => {
      for (var i = 1; i < 6; i++) {
        formData.append('bannerImage' + i, '');
        setFormData(formData);
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <>
      <div className="spm-modal">
        {imageModalShow && (
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
                left: resize <= 767 ? 0 : (resize - 775) / 2,
              }}
            >
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div className="spm-modal-img-inner home-modal-img-inner home-modal-img-inner-one">
                <label
                  className={classNames('spm-add-img home-add-img', {
                    'home-add-img-icon': image[0] === '',
                  })}
                  htmlFor="home-file-0"
                >
                  {imageTF[0] ? (
                    imageData[0] !== '' ? (
                      <img src={imageData[0].webImageUrl} alt="defaultImage" />
                    ) : (
                      <img src={addImage} alt="addIcon" />
                    )
                  ) : (
                    <img src={addPhoto} alt="new-banner-Img" />
                  )}
                </label>

                <input
                  id="home-file-0"
                  style={{ display: 'none' }}
                  type="file"
                  accept="image/*"
                  ref={photoInput}
                  onChange={(e) => MakeFormDataF(e, 0)}
                />
                <input
                  id="bannerUrlTextInput"
                  placeholder="배너의 링크를 적어주세요. (ex: https://www.naver.com/ )"
                  type="text"
                  value={bannerLink1}
                  onChange={(e) => {
                    setBannerLink1(e.target.value);
                    //  let newurl = [...connectedUrl];
                    // newurl[0] = bannerLink1;
                    // setConnectedUrl(newurl);
                  }}
                />
              </div>

              <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
              <div className="home-modal-img-box">
                <div className="spm-modal-img-inner home-modal-img-inner">
                  <label
                    className={classNames('spm-add-img home-add-img', {
                      'home-add-img-icon': image[1] === '',
                    })}
                    htmlFor={'home-file-' + 1}
                  >
                    {imageTF[1] ? (
                      imageData[1] !== '' ? (
                        <img
                          src={imageData[1].webImageUrl}
                          alt="defaultImage"
                        />
                      ) : (
                        <img src={addImage} alt="addIcon" />
                      )
                    ) : (
                      <img src={addPhoto1} alt="new-banner-Img" />
                    )}
                  </label>
                  <input
                    id={'home-file-' + 1}
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    ref={photoInput1}
                    onChange={(e) => MakeFormDataF(e, 1)}
                  />
                  <input
                    id="bannerUrlTextInput"
                    placeholder="배너의 링크를 적어주세요. (ex: https://www.naver.com/ )"
                    type="text"
                    value={bannerLink2}
                    onChange={(e) => {
                      setBannerLink2(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-img-inner home-modal-img-inner">
                  <label
                    className={classNames('spm-add-img home-add-img', {
                      'home-add-img-icon': image[2] === '',
                    })}
                    htmlFor={'home-file-' + 2}
                  >
                    {imageTF[2] ? (
                      imageData[2] !== '' ? (
                        <img
                          src={imageData[2].webImageUrl}
                          alt="defaultImage"
                        />
                      ) : (
                        <img src={addImage} alt="addIcon" />
                      )
                    ) : (
                      <img src={addPhoto2} alt="new-banner-Img" />
                    )}
                  </label>
                  <input
                    id={'home-file-' + 2}
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    ref={photoInput2}
                    onChange={
                      (e) => MakeFormDataF(e, 2)
                      //  encodeFileToBase64(e.target.files[0], data)
                    }
                  />
                  <input
                    id="bannerUrlTextInput"
                    placeholder="배너의 링크를 적어주세요. (ex: https://www.naver.com/ )"
                    type="text"
                    value={bannerLink3}
                    onChange={(e) => {
                      setBannerLink3(e.target.value);
                    }}
                  />
                </div>
                <div className="spm-modal-img-inner home-modal-img-inner">
                  <label
                    className={classNames('spm-add-img home-add-img', {
                      'home-add-img-icon': image[3] === '',
                    })}
                    htmlFor={'home-file-' + 3}
                  >
                    {imageTF[3] ? (
                      imageData[3] !== '' ? (
                        <img
                          src={imageData[3].webImageUrl}
                          alt="defaultImage"
                        />
                      ) : (
                        <img src={addImage} alt="addIcon" />
                      )
                    ) : (
                      <img src={addPhoto3} alt="new-banner-Img" />
                    )}
                  </label>
                  <input
                    id={'home-file-' + 3}
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    ref={photoInput3}
                    onChange={
                      (e) => MakeFormDataF(e, 3)
                      //  encodeFileToBase64(e.target.files[0], data)
                    }
                  />
                  <input
                    id="bannerUrlTextInput"
                    placeholder="배너의 링크를 적어주세요. (ex: https://www.naver.com/ )"
                    type="text"
                    value={bannerLink4}
                    onChange={(e) => {
                      setBannerLink4(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="spmdetail-content-btn-box spm-modal-btn-box">
                <button
                  className="spmdetail-content-btn"
                  onClick={() => {
                    if (TF) axiosPostBanner();
                    setImageModalShowF(false);

                    // if (TF) axiosPostBanner(); // POST 함수 실행
                  }}
                >
                  등록
                </button>
                <button
                  className="spmdetail-content-btn spmdetail-content-btn-left"
                  onClick={() => {
                    setImageModalShowF(false);
                    setNum(num + 1);

                    imageTF[0] = true;
                    imageTF[1] = true;
                    imageTF[2] = true;
                    imageTF[3] = true;
                    setImageTF(imageTF);
                  }}
                >
                  취소
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ImageModal;
