import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'src/styles/main/home/image-modal/MainAdModal.scss';
import addImage from 'src/assets/seller/sso-ssh/image-add.png';

interface Props {
  imageModalShow: any;
  setImageModalShowF: any;
  imageData: any;
}

function ChangeAdModal({
  imageModalShow,
  setImageModalShowF,
  imageData,
}: Props) {
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  // axios.post할때 써야되서, 전역변수로 선언했음.
  const formData = new FormData();
  const UpdateAd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (!e.target.files) return;

      formData.set('image', e.target.files[0]);

      MakeFormDataF(e);
    },
    []
  );

  const axiosPostAds = () => {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/banner/static',
      method: 'POST',
      data: {
        connectedUrl: 'https://www.kcook-cake.com/',
        mobileImage: formData,
        webImage: formData,
        //링크url : adLinkUrl
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-ACCESS-TOKEN': jwToken,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // axios.post할 링크 url값 ( JSON보내는 형식에 따라 달라질 예정)
  const [adLinkUrl, setAdLinkUrl] = useState('');

  // 광고등록 수정
  const MakeFormDataF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      imageChange();
      formData.set('mainAdImage1', e.target.files[0]);
      if (imageTF) formData.set('mainAdImage1', '');
    },
    []
  );

  const [imageTF, setImageTF] = useState(true);
  const [preImage, setPreImage] = useState<File>();
  const [addPhoto, setAddPhoto] = useState<string>();
  const photoInput = useRef<HTMLInputElement>();

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

            <div>
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
                onChange={(e) => UpdateAd(e, 0)}
              />
              <input
                placeholder="광고 클릭시 이동할 링크를 적어주세요."
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
                  axiosPostAds(); // POST 함수 실행
                  alert('등록되었습니다.');
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
