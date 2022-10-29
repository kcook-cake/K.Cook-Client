import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainCrousel.scss';

import BannerSlider from 'src/components/main/common/BannerSlide';
import Banner_Slide_TestData from 'src/testdata/main/Banner_Slide_TestData';

interface Props {
  session: boolean;
  auth: {
    accountId: number,
    address: string,
    dateOfBirth: string,
    email: string,
    nickname: string,
    phoneNumber: string,
  };
}

function Crousel({ session, auth }: Props) {

  // 배너 등록 페이지
  const [bannerImage, setBannerImage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
      let isComponentMounted = true;
      setData(Banner_Slide_TestData());
      // axios({
      //     url: '/app/banner/carousel',
      //     method: 'GET',
      //   })
      //   .then((res) => {
      //     if (res.data) {
      //       if (isComponentMounted) {
      //         setData(res.data.result);              
      //       }
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      return () => {
        isComponentMounted = false;
      }
    },[] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <>
      <div className="crousel">
        <BannerSlider auth={auth.accountId === 31} getData={bannerImage} />
      </div>
    </>
  );
}

export default Crousel;
