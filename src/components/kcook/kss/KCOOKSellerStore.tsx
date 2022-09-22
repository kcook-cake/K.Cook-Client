import React, { useState, useEffect } from 'react';
import 'src/styles/kcook/AllKCOOK.scss';
import 'src/styles/mypage/Profile.scss';
import 'src/styles/seller/sss/SellerStore.scss';

import X from "src/assets/address_x.png"

import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import PopupDom from 'src/components/sign/PopupDom';
import PostCode from 'src/components/sign/PostCode';
// import ImageModal from './image-modal/ImageModal';

function KCOOKSellerStore (session: any, auth: any,){
    const [num, setNum] = useState(0);
    const [failModalText, setFailModalText] = useState("수정 정보가 일치하지 않습니다.");
    const [failModal, setFailModal] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    // 팝업창 열고닫기
    const openclosePostCode = () => {
        if (isPopupOpen) 
            setIsPopupOpen(false);
        else
            setIsPopupOpen(true);
    };



    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [addressMain, setAddressMain] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [intro, setIntro] = useState("");

    const [nameFail, setNameFail] = useState(false);
    const [addressFail, setAddressFail] = useState(false);
    const [addressMainFail, setAddressMainFail] = useState(false);
    const [phoneFail, setPhoneFail] = useState(false);
    const [birthdayFail, setBirthdayFail] = useState(false);
    const [introFail, setIntroFail] = useState(false);
  
    const handleName = (e: any,) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        setName(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value))
            setNameFail(false)
        else
            setNameFail(true)
    };

    const handleAddressMain = (addressMain: any,) => {
        setAddressMain(addressMain);
        if (addressMain !== '')
            setAddressMainFail(false)
        else
            setAddressMainFail(true)
    };
    const handleAddress = (e: any,) => {
        setAddress(e.target.value);
        if (e.target.value !== '')
            setAddressFail(false)
        else
            setAddressFail(true)
    };

    const handlePhone = (e: any) => {
        setPhone(e.target.value.replace("-", ""));
        if (e.target.value.length !== 0)
            setPhoneFail(false)
        else
            setPhoneFail(true)
    };
  
    const handleBirthday = (e: any) => {
        setBirthday(e.target.value);
        if (e.target.value !== '')
          setBirthdayFail(false)
        else
          setBirthdayFail(true)
    };

    const handleIntro = (e: any) => {
        setIntro(e.target.value);
        if (e.target.value !== '')
            setIntroFail(false)
        else
            setIntroFail(true)
    };



    const ChangeStore = () => {
        if (nameFail || addressFail || phoneFail || birthdayFail || introFail) {
            setFailModal(true);
            setTimeout(() => {
              setFailModal(false);
            }, 5000);
        } else {
            //axios
        }
    };



    let [imageTF, setImageTF] = useState(false);
    const [imageModalShow, setImageModalShow] = useState(false);
    const [imageData, setImageData] = useState(["", "", "", "", ""]);

    const [resize, setResize] = useState(0);
    const handleResize = () => {
      setResize(window.innerWidth);
    };
  
    useEffect(() => {
        setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        LinkClick("KCOOKSellerStore");
        sellerLinkClick("KCOOKSellerStore");

        setName(auth.nickname);
        setAddressMain(auth.address.split(",")[0]);
        setAddress(auth.address.split(",")[1]);
        setPhone(auth.phoneNumber);
        setBirthday(auth.dateOfBirth);
    },[]);

    return(
        <>
        {/* <ImageModal
            num={num} setNum={setNum} resize={resize}
            imageTF={imageTF}
            imageModalShow={imageModalShow} setImageModalShowF={setImageModalShow}
            imageData={imageData} setImageDataF={setImageData} /> */}

        <div className="seller-block">
            <div className="seller-store">
                <div className="seller-mypage-ss-mp seller-store-top">
                    <h3>관리자 정보</h3>
                </div>
                <div className="profile-list">
                    <p className="profile-name">관리자 이름</p>
                    <input 
                        value={name}
                        className="sellerstore-content"
                        onChange={handleName}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">관리자 소개</p>
                    <input
                        value={intro}
                        className="sellerstore-content"
                        onChange={handleIntro}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">관리자 영업일</p>
                    <input 
                        value={birthday}
                        className="sellerstore-content"
                        onChange={handleBirthday}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">관리자 연락처</p>
                    <input
                        value={phone}
                        className="sellerstore-content"
                        onChange={handlePhone}/>
                </div>
                <div className="kcook-list">
                    <p className="profile-name">관리자 주소</p>
                    <input
                        value={addressMain}
                        className="sellerstore-content"
                        onClick={openclosePostCode}
                    />
                    <div id="popupDom">
                        {isPopupOpen ? 
                        <>
                            <div className="signup-adress-top">
                            주소 검색
                            <img
                                src={X}
                                onClick={()=>{
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
                        </>:null}
                    </div>
                </div>
                <div className="profile-list">
                    <input
                        value={address}
                        className="sellerstore-content"
                        onClick={handleAddress}
                    />
                </div>

                <button
                    className="sellerstore-btn"
                    onClick={ChangeStore}>
                    수정
                </button>

                {failModal? 
                    <div className="login-iscorrect">
                        {failModalText}
                    </div>
                : null}
            </div>
        </div>
        </>
    )
}


export default KCOOKSellerStore;