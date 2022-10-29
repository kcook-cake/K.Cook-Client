import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main/card/LengthSlide.scss';

// import star from 'src/utils/star';

import MakePrice from 'src/utils/MakePrice';

interface Props {
  getData: {
    productId: number;
    name: string;
    storeName: string;
    price: number;
    raiting: number;
    image: string;
    status: string;
    isCake: string;
    resultPrice: number;
    salePrice: number;
    reviewCount: number;
  }[];
  resize: number;
  slidePx: number;
}

function LengthSlideTwo({ getData, resize, slidePx }: Props) {
  return (
    <>
      {getData.map(
        (
          data: {
            productId: number;
            name: string;
            storeName: string;
            price: number;
            raiting: number;
            image: string;
            status: string;
            isCake: string;
            resultPrice: number;
            salePrice: number;
            reviewCount: number;
          },
          idx: number
        ) => {
          return (
            <Link to="/Cake/0">
              <li
                className="lengthslide-flex"
                style={{
                  top: idx % 2 === 0 || resize <= 767 ? 0 : 500,
                  left:
                    resize <= 767
                      ? 170 * idx
                      : idx % 2 === 0
                      ? 150 * idx + 10
                      : 150 * (idx - 1) + 10,
                  transform: `translateX(${slidePx}px)`,
                  transition: '0.5s ease',
                }}
              >
                <div className="lengthslide">
                  <div className="lengthslide-img">
                    <div className="lengthslide-img-inner">
                      {data.image === null ? (
                        <div className="lengthslide-img-none">
                          ~준비중 입니다~
                        </div>
                      ) : (
                        <img src={data.image} alt="lengthslide-img" />
                      )}
                    </div>
                  </div>
                  <div className="lengthslide-info">
                    <div className="card-top-info">
                      원모먼트
                      <div className="card-review">
                        {'리뷰 ' + data.reviewCount}
                      </div>
                    </div>
                    <div className="lengthslide-card-cake-name">
                      {data.name}
                    </div>
                    <div className="card-minprice">{MakePrice(data.price)}</div>
                  </div>
                </div>
              </li>
            </Link>
          );
        }
      )}
    </>
  );
}

export default LengthSlideTwo;
