import React, { useState, useEffect } from 'react';
import 'src/styles/mypage/Profile.scss';
import 'src/styles/seller/sss/SellerStore.scss';
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import ImageModal from './image-modal/ImageModal';

function SellerStore (session: any, auth: any,){
    const [num, setNum] = useState(0);
    const [failModalText, setFailModalText] = useState("수정 정보가 일치하지 않습니다.");
    const [failModal, setFailModal] = useState(false);



    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [intro, setIntro] = useState("");

    const [nameFail, setNameFail] = useState(false);
    const [addressFail, setAddressFail] = useState(false);
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

        LinkClick("SellerStore");
        sellerLinkClick("SellerStore");

        setName(auth.nickname);
        setAddress(auth.address);
        setPhone(auth.phoneNumber);
        setBirthday(auth.dateOfBirth);
    },[]);

    return(
        <>
        <ImageModal
            num={num} setNum={setNum} resize={resize}
            imageTF={imageTF}
            imageModalShow={imageModalShow} setImageModalShowF={setImageModalShow}
            imageData={imageData} setImageDataF={setImageData} />

        <div className="seller-block">
            <div className="seller-store">
                <div className="seller-mypage-ss-mp seller-store-top">
                    <h3>스토어 정보</h3>
                </div>
                <div className="profile-list seller-list">
                    <div style={{ marginRight: "16px", }}>
                        <p className="profile-name">스토어 로고</p>
                        <button
                            className="seller-img-add"
                            onClick={()=>{
                                imageTF = false;
                                setImageTF(imageTF);
                                setImageModalShow(true);
                            }}>
                            <AddIcon/>
                        </button>
                    </div>
                    <div>
                        <p className="profile-name">스토어 사진</p>
                        <button
                            className="seller-sub-img-add"
                            onClick={()=>{
                                imageTF = true;
                                setImageTF(imageTF);
                                setImageModalShow(true);
                            }}>
                            <AddIcon/>
                        </button>
                    </div>
                </div>
                <div className="profile-list">
                    <p className="profile-name">스토어 이름</p>
                    <input 
                        value={name}
                        className="sellerstore-content"
                        onChange={handleName}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">스토어 주소</p>
                    <input
                        value={address}
                        className="sellerstore-content"
                        onChange={handleAddress}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">스토어 연락처</p>
                    <input
                        value={phone}
                        className="sellerstore-content"
                        onChange={handlePhone}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">스토어 영업일</p>
                    <input 
                        value={birthday}
                        className="sellerstore-content"
                        onChange={handleBirthday}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">스토어 소개</p>
                    <input
                        value={intro}
                        className="sellerstore-content"
                        onChange={handleIntro}/>
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


export default SellerStore;