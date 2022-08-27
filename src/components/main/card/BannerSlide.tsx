import Slider from 'react-slick';

import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
// import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';

import 'src/styles/main/card/BannerSlide.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import isSession from 'src/utils/isSession';
// import "./banner-theme.scss";

interface Props {
  getData: any;
  isManager?: any;
}

//
const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={rightArrow} alt="profile" />
    </div>
  );
};
const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={leftArrow} alt="profile" />
    </div>
  );
};

export default function BannerSlider({ getData, isManager }: Props) {
  const [bannerData, SetbannerData] = useState<any[]>([]);

  var settings = {
    dots: true, // 밑에 점
    infinite: true, // 콘텐츠 끝까지 갔을때 처음 콘텐츠를 가져와 반복
    autoplay: true,
    speed: 500, // 넘어가는 속도(ms)
    slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, //한번에 넘기는 콘텐츠 개수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots: any) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom',
    // dotsClass에 dots를 커스텀 해줄 class명을 넣어준 뒤
    // 해당 컴포넌트에 css 파일을 불러온다.
  };

  // 배너 데이터 받기
  async function getBannerData() {
    var res = await axios.get(
      'https://prod.kcook-cake.com/app/banner/carousel'
    );
    SetbannerData(res.data.result);

    // const webImageUrl = res.data.result.webImageUrl;
    //  SetbannerData(webImageUrl);
  }

  useEffect(() => {
    getBannerData();
  }, []);

  // 배너 등록 페이지
  const [isBannerAdd, setIsBannerAdd] = useState(false);
  const hello = () => {
    if (isManager) {
      setIsBannerAdd(true);
    } else {
      setIsBannerAdd(false);
    }
  };

  return (
    <div>
      {isManager ? <button onClick={hello}>배너 등록</button> : null}
      {isBannerAdd && (
        <div className="spm-modal">
          <>
            <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div>
            <div className="spm-modal-box">
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div
                className="spm-modal-img-inner"
                onClick={() => {
                  //addImage[0] = 사진 링크 넣기
                }}
              >
                <div className="spm-add-img">
                  <AddIcon />
                </div>
              </div>
              <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
              <div className="spm-modal-img-box">
                <div className="spm-modal-img-inner"></div>
                <div className="spm-modal-img-inner"></div>
                <div className="spm-modal-img-inner"></div>
                <div className="spm-modal-img-inner"></div>
              </div>
              <div className="mprdetail-content-btn-box">
                <button className="mprdetail-content-btn">등록</button>
                <button className="mprdetail-content-btn mprdetail-content-btn-left">
                  취소
                </button>
              </div>
            </div>
          </>
        </div>
      )}

      <Slider {...settings} className="main-crousel">
        {/*  {getData.map(
          (
            data: {
              productId: any;
              name: any;
              storeName: any;
              price: any;
              raiting: any;
              image: any;
              status: any;
              isCake: any;
              resultPrice: any;
              salePrice: any;
              reviewCount: any;
            },
            idx: any
          ) => {}
        )} */}

        {bannerData.map((data) => {
          return (
            <>
              <img src={data.webImageUrl} alt="profile" />
              <span>{data.orders}</span>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
