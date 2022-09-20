import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/main/card/LengthSlide.scss';

import star from 'src/utils/star';

import MakePrice from 'src/utils/MakePrice';

interface Props {
  getData: any;
  resize: number;
  slidePx: number;
}

function LengthSlide_One({ getData, resize, slidePx }: Props) {
  return (
    <>
      {getData.map(
        (
          data: {
            image: any;
            name: any;
            price: any;
            storeName: any;

            productId: any;
            popularRank: any;

            status: any;
            isCake: any;

            raiting: any;
            salePrice: any;
            resultPrice: any;
            reviewCount: any;
          },
          idx: any
        ) => {
          return (
            <Link to={'/Cake/' + data.productId}>
              <li
                className="lengthslide-flex"
                style={{
                  top: 5,
                  left: resize <= 767 ? 165 * idx : 300 * idx + 10,
                  transform: `translateX(${slidePx}px)`,
                  transition: '0.5s ease',
                }}>
                <div className="lengthslide">
                  <div className="lengthslide-img">
                    <div className="lengthslide-img-inner">
                      {data.image === null || data.image === undefined || data.image === ""?
                        <div>
                          ~준비중 입니다~
                        </div>:
                        <img src={data.image} />
                      }
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
                      {data.name === null || data.name === undefined || data.name === ""?
                        "~준비중 입니다~":
                        data.name
                      }
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

export default LengthSlide_One;
