import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'src/styles/main/home/image-modal/MainAdModal.scss';

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

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>(imageData);
  // const [imageOne, setImageOne] = useState(imageData[0]);

  const formData = new FormData();

  const axiosPostAds = () => {
    axios({
      baseURL: 'https://prod.kcook-cake.com/',
      url: '/app/banner/static',
      method: 'POST',
      data: {
        connectedUrl: 'https://www.kcook-cake.com/',
        mobileImage: formData,
        webImage: formData,
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

  const UpdateAd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (!e.target.files) return;

      formData.append('image', e.target.files[0]);

      /* axios({
        baseURL: 'https://prod.kcook-cake.com/',
        url: '/app/banner/static',
        method: 'POST',
        data: {
          connectedUrl: 'https://www.kcook-cake.com/',
          mobileImage: formData,
          webImage: formData,
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
        }); */
    },
    []
  );

  const [imageSrc, setImageSrc] = useState(null);

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    setImageSrc(imageData);
  }, [imageData]);

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
                {/*  {imageSrc ? (
                  <img src={imageSrc} alt="preview-img" />
                ) : (
                  <button>+</button> */}

                {imageSrc ? (
                  <img src={imageSrc} alt="preview-img" />
                ) : (
                  <>
                    {/* <AddIcon /> */}
                    <button>광고 이미지 등록</button>
                  </>
                )}
                {/* {image[0] == '' ? <AddIcon /> : <img src={image[0]} />} */}
              </label>
              <input
                id="changeAdFileInput"
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={(e) => (
                  UpdateAd(e, 0), encodeFileToBase64(e.target.files[0])
                )}
              />

              {/* <div className="preview">
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </div> */}
            </div>

            <div className="spmdetail-content-btn-box spm-modal-btn-box">
              <button
                className="spmdetail-content-btn"
                onClick={() => {
                  setImageModalShowF(false);
                }}
              >
                닫기
              </button>
              <button
                className="spmdetail-content-btn"
                onClick={() => {
                  axiosPostAds(); // POST 함수 실행
                  alert('저장되었습니다.');
                }}
              >
                저장
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ChangeAdModal;
