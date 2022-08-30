import axios from 'axios';
import { config } from 'process';
import { useEffect, useState } from 'react';

export function AddDataForm() {
  const [files, setFiles] = useState('');

  // 파일 선택하기 버튼
  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log('e.target.filesfilefilefile', file);
    setFiles(file);

    setThumbnail(e);
    /*
    추가 기능 설정 예정
    const files = e.currentTarget.files;
      if ([...files].length >= 5) {
      alert('이미지는 최대 4개까지 업로드가 가능합니다.');
      return;
    }
    [...files].forEach((file) => {
      if (!file.type.match('image/.*')) {
        alert('이미지 파일만 업로드가 가능합니다.');
        return;
      }
    });
    */
  };

  // 저장하기 버튼
  // const handleClick = (e) => {
  //   const formdata = new FormData();
  //   formdata.append('uploadImage', files[0]);

  //   // formdata의 key 확인
  //   for (let key of formdata.keys()) {
  //     console.log('key', key);
  //   }

  //   // formdata의 "value", 확인
  //   for (let value of formdata.values()) {
  //     console.log('value', value);
  //   }

  //   const config = {
  //     Headers: {
  //       'content-type': 'multipart/form-data',
  //       // x-access : ~~~
  //     },
  //   };

  //   // 토큰넣고 보내면 완?
  //   var jwToken = undefined;
  //   if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  //   else jwToken = sessionStorage.jwToken;

  //   axios
  //     .post('https://prod.kcook-cake.com/app/banner/carousel', {
  //       'bannerListReq[0].connectedUrl': '',
  //       'bannerListReq[0].mobileImage': formdata,
  //       'bannerListReq[0].orders': changeBannerNum,
  //       'bannerListReq[0].webImage': formdata,
  //       'X-ACCESS-TOKEN': '',
  //     })
  //     .then(
  //       alert('배너 등록에 성공했습니다.')
  //       // 모달창 닫기
  //     )
  //     .catch((e) => {
  //       console.log('케이쿡 axios post시도시에 발생하는 e에러', e);
  //     });
  // };

  /* 폼데이터 생성/post등록 방법2
const formData = new FormData();
formData.append("files", event.target.files[0]);

   axios({
  headers: {
    "Content-Type": "multipart/form-data",
  },
  url: "https://7942yongdae.tistory.com/file-upload", // 파일 업로드 요청 URL
  method: "POST",
  data: formData,
}).then(...); 
*/

  const UpdateF = () => {

  };

  // 배너등록 이미지 미리보기
  const [bannerImgThumbnail, setBannerImgThumbnail] = useState();
  function setThumbnail(e) {
    for (var image of e.target.files) {
      var reader = new FileReader();

      reader.onload = function (e) {
        setBannerImgThumbnail(e.target.result);
      };
      reader.readAsDataURL(image);
    }
  }

  // 서버에 전달할,변경 예정인 배너의 순서값
  const [changeBannerNum, setChangeBannerNum] = useState(null);

  return (
    <>
      <div>
        <div>
          <strong>업로드된 이미지</strong>
          <div>
            <img
              src={bannerImgThumbnail}
              alt=""
              style={{ width: '600px', height: '300px' }}
            />
          </div>
        </div>
      </div>
      <form>
        <div id="image_container"></div>
        <input
          type="file"
          id="image"
          onChange={(e) => onLoadFile(e)}
          accept="img/*"
          required
          multiple
          style={{ display: 'none' }}
        ></input>
        <label htmlFor="image">파일 선택하기</label>
      </form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '50px',
        }}
      >
        <button
          style={{ backgroundColor: '#e9ecef', borderRadius: '10%' }}
          onClick={() => setChangeBannerNum(1)}
        >
          1번
        </button>
        <button
          style={{ backgroundColor: '#e9ecef', borderRadius: '10%' }}
          onClick={() => setChangeBannerNum(2)}
        >
          2번
        </button>
        <button
          style={{ backgroundColor: '#e9ecef', borderRadius: '10%' }}
          onClick={() => setChangeBannerNum(3)}
        >
          3번
        </button>
        <button
          style={{ backgroundColor: '#e9ecef', borderRadius: '10%' }}
          onClick={() => setChangeBannerNum(4)}
        >
          4번
        </button>
        <p>{changeBannerNum && `${changeBannerNum}번 배너 변경`}</p>
      </div>
      <button onClick={UpdateF}>저장하기</button>
    </>
  );
}

export default AddDataForm;
