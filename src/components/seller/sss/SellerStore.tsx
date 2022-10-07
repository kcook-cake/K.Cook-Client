import React, { useState, useEffect } from 'react';
import 'src/styles/mypage/Profile.scss';
import 'src/styles/seller/sss/SellerStore.scss';

import X from 'src/assets/address_x.png';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import ImageModalLogo from './modal/ImageModalLogo';
import ImageModal from './modal/ImageModal';
import PopupDom from 'src/components/sign/PopupDom';
import PostCode from 'src/components/sign/PostCode';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import KCOOKScroll from 'src/utils/KCOOKScroll';

function SellerStore(session: any, auth: any) {
  const [num, setNum] = useState(0);
  const [failModalText, setFailModalText] =
    useState('수정 정보가 일치하지 않습니다.');
  const [failModal, setFailModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열고닫기
  const openclosePostCode = () => {
    if (isPopupOpen) setIsPopupOpen(false);
    else setIsPopupOpen(true);
  };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [addressMain, setAddressMain] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [intro, setIntro] = useState('');

  const [nameFail, setNameFail] = useState(false);
  const [addressFail, setAddressFail] = useState(false);
  const [addressMainFail, setAddressMainFail] = useState(false);
  const [phoneFail, setPhoneFail] = useState(false);
  const [birthdayFail, setBirthdayFail] = useState(false);
  const [introFail, setIntroFail] = useState(false);

  const handleName = (e: any) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setName(e.target.value);
    if (
      e.target.value.length >= 3 &&
      e.target.value.length <= 20 &&
      emailRegex.test(e.target.value)
    )
      setNameFail(false);
    else setNameFail(true);
  };

  const handleAddressMain = (addressMain: any) => {
    setAddressMain(addressMain);
    if (addressMain !== '') setAddressMainFail(false);
    else setAddressMainFail(true);
  };
  const handleAddress = (e: any) => {
    setAddress(e.target.value);
    if (e.target.value !== '') setAddressFail(false);
    else setAddressFail(true);
  };

  const handlePhone = (e: any) => {
    setPhone(e.target.value.replace('-', ''));
    if (e.target.value.length !== 0) setPhoneFail(false);
    else setPhoneFail(true);
  };

  const handleBirthday = (e: any) => {
    setBirthday(e.target.value);
    if (e.target.value !== '') setBirthdayFail(false);
    else setBirthdayFail(true);
  };

  const handleIntro = (e: any) => {
    setIntro(e.target.value);
    if (e.target.value !== '') setIntroFail(false);
    else setIntroFail(true);
  };

  const ChangeStore = () => {
    if (nameFail || addressFail || phoneFail || birthdayFail || introFail) {
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 5000);
    } else {
      //patch /api/store?storeId=0
    }
  };



  let [imageTF, setImageTF] = useState(false);
  const [imageModalShow, setImageModalShow] = useState(false);
  const [imageData, setImageData] = useState(['', '', '', '', '']);

  const [resize, setResize] = useState([0, 0]);
  const handleResize = () => {
    setResize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    LinkClick('SellerStore');
    sellerLinkClick('SellerStore');

    setName(auth.nickname);
    setAddressMain(auth.address.split(',')[0]);
    setAddress(auth.address.split(',')[1]);
    setPhone(auth.phoneNumber);
    setBirthday(auth.dateOfBirth);

    let isComponentMounted = true;

    setResize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => {
      isComponentMounted = false;
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  // 9/15 추가
  // axios get으로 이미지 주소를 아래 값에 넣음.
  const [logoImgSrc, setLogoImgSrc] = useState('');
  const [photoImgSrc, setPhotoImgSrc] = useState('');

  return (
    <>
      {!imageTF ? (
        // 스토어 로고 클릭시 모달창
        <ImageModalLogo
          NumF={()=>setNum(num+1)}
          resize={resize}
          // imageTF={imageTF}
          imageModalShow={imageModalShow}
          setImageModalShowF={setImageModalShow}
          imageData={imageData}
          setImageDataF={setImageData}
          //
          logoImgSrc={logoImgSrc}
          setLogoImgSrc={setLogoImgSrc}
        />
      ) : (
        // 스토어 사진 클릭시 모달창
        <ImageModal
          NumF={()=>setNum(num+1)}
          resize={resize}

          imageModalShow={imageModalShow}
          setImageModalShowF={setImageModalShow}
          imageData={imageData}
          setImageDataF={setImageData}
          //
          photoImgSrc={photoImgSrc}
          setPhotoImgSrc={setPhotoImgSrc}
        />
      )}

      <div className="seller-block">
        <div className="seller-store">
          <div className="seller-mypage-ss-mp seller-store-top">
            <h3>스토어 정보</h3>
          </div>
          <div className="profile-list seller-list">
            <div className='sss-img'>
              <p className="profile-name">스토어 로고</p>
              <div
                className='sss-img-inner'
                onClick={() => {
                  imageTF = false;
                  setImageTF(imageTF);
                  setImageModalShow(true);
                  KCOOKScroll(true);
                }}>
                {logoImgSrc != '' ? 
                  <img src={logoImgSrc} /> : 
                  <div className='sss-img-inner-icon'>
                    <AddIcon />
                  </div>
                }
              </div>
            </div>
            <div className='sss-img-2'>
              <p className="profile-name sss-name">스토어 사진</p>
              <div
                className='sss-img-inner-2'
                onClick={() => {
                  imageTF = true;
                  setImageTF(imageTF);
                  setImageModalShow(true);
                  KCOOKScroll(true);
                }}>
                {photoImgSrc != '' ? 
                  <img src={X} /> : 
                  <div className='sss-img-inner-icon-2'>
                    <AddIcon />
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="profile-list">
            <p className="profile-name sss-name">스토어 이름</p>
            <input
              value={name}
              className="sellerstore-content"
              onChange={handleName}
            />
          </div>
          <div className="profile-list">
            <p className="profile-name">스토어 소개</p>
            <input
              value={intro}
              className="sellerstore-content"
              onChange={handleIntro}
            />
          </div>
          <div className="profile-list">
            <p className="profile-name">스토어 영업일</p>
            <input
              value={birthday}
              className="sellerstore-content"
              onChange={handleBirthday}
            />
          </div>
          <div className="profile-list">
            <p className="profile-name">스토어 연락처</p>
            <input
              value={phone}
              className="sellerstore-content"
              onChange={handlePhone}
            />
          </div>
          <div className="kcook-list">
            <p className="profile-name">스토어 주소</p>
            <div onClick={openclosePostCode}>
              <input
                value={addressMain}
                className="sellerstore-content"
                onChange={openclosePostCode}
              />
            </div>
            <div id="popupDom">
              {isPopupOpen ? (
                <>
                  <div className="signup-adress-top">
                    주소 검색
                    <img
                      src={X}
                      onClick={() => {
                        setIsPopupOpen(false);
                      }}
                    />
                  </div>
                  <PopupDom>
                    <PostCode
                      onClose={openclosePostCode}
                      parentCallback={handleAddressMain}
                    />
                  </PopupDom>
                </>
              ) : null}
            </div>
          </div>
          <div className="profile-list">
            <input
              value={address || ''}
              className="sellerstore-content"
              onChange={handleAddress}
            />
          </div>

          <button className="sellerstore-btn" onClick={ChangeStore}>
            수정
          </button>

          {failModal ? (
            <div className="login-iscorrect">{failModalText}</div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SellerStore;
