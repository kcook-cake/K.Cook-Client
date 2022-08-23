import Slider from "react-slick";

import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import Crousel1 from "../../../assets/crousel1.jpg";

import "src/styles/main/card/BannerSlide.scss";
// import "./banner-theme.scss";

interface Props {
  getData: any;
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

export default function ya({ getData }: Props) {
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
    dotsClass: "dots_custom",
    // dotsClass에 dots를 커스텀 해줄 class명을 넣어준 뒤
    // 해당 컴포넌트에 css 파일을 불러온다.
  };

  /* 
서버에서 받은 데이터를
배열에 넣고 map함수를 이용해서 

array.map((data)=> {
  <div>
    <img src={data.img} alt="profile" />
  </div>
})
 
하면 될듯
*/

  return (
    <div>
      <Slider {...settings} className="main-crousel">
        {getData.map(
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
          ) => {
            return (
              <>
                <img src={Crousel1} alt="profile" />
                {/* {data.image == ""? 
                    <div className="lengthwise-img-none">~준비중 입니다~</div>:
                    <img src={data.image}/>
                  } */}
              </>
            );
          }
        )}
      </Slider>
    </div>
  );
}
