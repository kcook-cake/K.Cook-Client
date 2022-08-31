import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/main/card/CakeCard.scss';

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

  // 아래의 example 대신 api가 작동된 이후에는,
  // 아래 배열을 삭제하고,
  // get으로 받은 response값중 url값을
  // examplespopular에 넣으면 됨.
  const examplespopular = [
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'https://sunstat.com/wp-content/uploads/2019/01/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%B0%B0%EA%B2%BD%EC%9D%B4%EB%AF%B8%EC%A7%80.png',
    },
    {
      url: 'data:image/jpeg;base64,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',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
    {
      url: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg',
    },
  ];
  const getPopularProduct = () => {
    axios
      .get('https://prod.kcook-cake.com​/app​/popular-products')
      .then((res) => {
        // 인기상품들의 이미지 url을 데이터에 담기 예정 (api 작동되면)
        setPopularProductData(res.data.result);
        console.log('popularProductData', popularProductData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //   useEffect(() => {
  //     getPopularProduct();
  //   }, [getPopularProduct]);

  useEffect(() => {
    for (var i = 0; i < getData.length; i++) {
      if (getData[i].image === null) {
        getData[i].image = examplespopular[i];
      }
    }
  }, [getPopularProduct, getData, examplespopular]);

  return (
    <>
      {/* <button onClick={() => getPopularProduct()}>인기순 </button> */}
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
            <Link
              className={
                'cake-store-card-' + (idx > 7 && cakeDetail ? 'dummy' : '')
              }
              to={'/Cake/0'}
            >
              <div className="cakecard-flex" key={data.productId}>
                <div className="cakecard">
                  <div className="cakecard-img-flex">
                    {data.image == null ? (
                      <div className="cakecard-img-none">~준비중 입니다~</div>
                    ) : (
                      <img src={data.image.url} className="cakecard-img" />
                    )}
                  </div>
                  <div className="cakecard-info">
                    <div className="card-top-info">
                      <div className="card-rating-star">
                        {star(data.raiting, '')}
                      </div>
                      <div className="card-review">
                        {'리뷰 ' + data.reviewCount}
                      </div>
                    </div>
                    <div className="card-shop-name">{data.storeName}</div>
                    <div className="card-cake-name">{data.name}</div>
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
