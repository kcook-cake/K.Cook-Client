import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'src/styles/main/home/image-modal/MainAdModal.scss';
import addImage from 'src/assets/seller/sso-ssh/image-add.png';

interface Props {
  imageModalShow: any;
  setImageModalShowF: any;
  imageData: any;
  TF: any;
}

function ChangeAdModal({
  imageModalShow,
  setImageModalShowF,
  imageData,
  TF,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  let [formData, setFormData] = useState(new FormData());
  const [imageTF, setImageTF] = useState(true);
  const [adLinkUrl, setAdLinkUrl] = useState('');

  const [preImage, setPreImage] = useState<File>();
  const [addPhoto, setAddPhoto] = useState<string>();
  const photoInput = useRef<HTMLInputElement>();

  const AddImageF = () => {
    axios({
      url: '/app/banner/static',
      method: 'POST',
      data: {
        connectedUrl: adLinkUrl,
        mobileImage: formData.get('image'),
        webImage: formData.get('image'),
        //링크url : adLinkUrl
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-ACCESS-TOKEN': jwToken,
        /*   sessionStorage.jwToken === undefined
            ? localStorage.jwToken
            : sessionStorage.jwToken, */
      },
    })
      .then((res) => {
        alert('광고 이미지가 등록되었습니다.');
        setImageModalShowF(false);
      })
      .catch((err) => {
        alert('광고 이미지 등록에 실패했습니다.');
        console.log(err);
      });
  };

  const imageChange = () => {
    const file = photoInput.current.files[0];
    if (file && file.type.substr(0, 5) === 'image') setPreImage(file);
    else setPreImage(null);
    setImageTF(false);
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

  // 광고등록 수정
  const MakeFormDataF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      imageChange();
      formData.set('image', e.target.files[0]);
      setFormData(formData);

      if (imageTF) formData.set('image', '');
    },
    []
  );

  useEffect(() => {
    formData.append('image', '');
    setFormData(formData);
  }, []);

  return (
    <>
      {imageModalShow && (
        <>
          {/* <div
            className="spm-modal-background"
            style={{ top: window.pageYOffset }}
          ></div> */}
          <div className="spm-modal-box mainAd-modal-box">
            {/* 
              style={{
                top:
             //     resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
                left: resize <= 767 ? 0 : (resize - 775) / 2,
              }}
            }
        */}
            <div className="spm-modal-title">이미지 등록</div>
            <div className="spm-modal-subtitle">대표이미지(1장)</div>

            <div className="mainAdImgAndInput">
              <label htmlFor="changeAdFileInput" id="changeAdFileInputLabel">
                {/*    {imageSrc ? (
                  <img src={imageSrc} alt="preview-img" />
                ) : (
                  <>
                   
                    <button>광고 이미지 등록</button>
                  </>
                )} */}
                {imageTF ? (
                  imageData != '' ? (
                    <img src={imageData} />
                  ) : (
                    <>
                      <img src={addImage} />
                    </>
                  )
                ) : (
                  <img src={addPhoto} />
                )}
              </label>
              <input
                id="changeAdFileInput"
                type="file"
                accept="image/*"
                ref={photoInput}
                onChange={(e) => MakeFormDataF(e)}
              />
              <input
                placeholder="광고의 링크를 적어주세요. (ex: https://www.naver.com/ )"
                id="adUrlTextInput"
                type="text"
                onChange={(e: any) => {
                  setAdLinkUrl(e.target.value);
                }}
              />
            </div>

            <div className="spmdetail-content-btn-box spm-modal-btn-box">
              <button
                className="spmdetail-content-btn"
                onClick={() => {
                  if (TF) AddImageF();
                }}
              >
                등록
              </button>
              <button
                className="spmdetail-content-btn spmdetail-content-btn-left"
                onClick={() => {
                  setImageModalShowF(false);
                  setImageTF(true);
                }}
              >
                취소
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ChangeAdModal;
