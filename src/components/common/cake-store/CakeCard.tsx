import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/common/cake-store/CakeCard.scss';

import star from 'src/utils/star';

import { start } from 'repl';
import axios from 'axios';
import { render } from '@testing-library/react';

interface Props {
  getData: any;
  cakeDetail: any;
}

function CakeCard({ getData, cakeDetail }: Props) {
  // 상품 인기순 조회 API

  const [popularProductData, setPopularProductData] = useState<any[]>([]);

  return (
    <>
      {/* <button onClick={() => getPopularProduct()}>인기순 </button> */}
      {getData.map(
        (
          data: {
            image: any,
            name: any,
            popularRank: any,
            price: any,
            storeName: any,
          },
          idx: any,
        ) => {
          return (
            <Link key={idx} to={'/Cake/0'}>
              <div className="cakecard-flex">
                <div className="cakecard">
                  <div className="cakecard-img">
                    <div className="cakecard-img-inner">
                      {data.image===null || data.image===undefined || data.image===""?
                        <div className="cakecard-img-none">~준비중 입니다~</div>:
                        <img src={data.image} />
                      }
                    </div>
                  </div>
                  <div className="cakecard-info">
                    <div className="card-top-info">
                      {data.storeName===null || data.storeName===undefined || data.storeName===""? 
                        "~준비중 입니다~":
                        data.storeName
                      }
                      <div className="card-review">{'리뷰 ' + 27}</div>
                    </div>
                    <div className="cakecard-card-cake-name">{data.name}</div>
                    <div className="card-minprice">
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '~'}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </>
  );
}

export default CakeCard;