import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import 'src/styles/main/card/BannerSlide.scss';

interface Props {
  auth: boolean;
  getData: {
    webImageUrl: string, 
    mobileImageUrl: string, 
    link: string,
  }[];
}

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightOutlined />
    </div>
  );
};
const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

export default function BannerSlider({ auth, getData }: Props) {
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

  return (
    <div>
      <Slider {...settings} className="main-crousel">
        {getData.map((data: { webImageUrl: string, mobileImageUrl: string, link: string, }, idx: number) => {
          return (
            <div key={idx}>
                <Link to={data.link}>
                  <img
                    src={data.webImageUrl}
                    alt={'profile'}
                  />
                </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
