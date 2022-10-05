import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainCrousel.scss';

import BannerSlider from 'src/components/main/common/BannerSlide';

interface Props {
  session: any;
  auth: any;
}

function Crousel({ session, auth }: Props) {

  // 배너 등록 페이지
  const [bannerImage, setBannerImage] = useState<any>([]);
  const [data, setData] = useState([]);

  useEffect(() => {
      let isComponentMounted = true;
      axios({
          url: '/app/banner/carousel',
          method: 'GET',
        })
        .then((res) => {
          if (res.data) {
            if (isComponentMounted) {
              setData(res.data.result);              
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        isComponentMounted = false;
      }
    },[] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    var newRes = [...data];
    newRes.sort((a: any, b: any) => a.orders - b.orders);
    setBannerImage(newRes);
  }, [data]);

  return (
    <>
      <div className="crousel">
        <BannerSlider auth={auth.accountId === 31} getData={bannerImage} />
      </div>
    </>
  );
}

export default Crousel;
