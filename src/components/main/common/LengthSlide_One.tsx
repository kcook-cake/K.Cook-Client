import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/main/card/LengthSlide.scss';

import star from 'src/utils/star';

import MakePrice from 'src/utils/MakePrice';

interface Props {
  getData: {
    productId: number,
    image1: string,
    name: string,
    storeName: string,
    price: number,
    reviewCount: number,
  }[];
  resize: number;
  slidePx: number;
}

function LengthSlide_One({ getData, resize, slidePx }: Props) {
  return (
    <>
      {getData.map(
        (
          data: {
            productId: number,
            image1: string,
            name: string,
            storeName: string,
            price: number,
            reviewCount: number,
          },
          idx: number
        ) => {
          return (
            <Link key={idx} to={'/Cake/' + data.productId}>
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
                      {data.image1 === null || data.image1 === undefined || data.image1 === "" || data.image1.length === 133?
                        <div>
                          ~준비중 입니다~
                        </div>:
                        <img src={data.image1} />
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
