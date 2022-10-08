import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'src/styles/main/home/MainAd.scss';

import { Link } from 'react-router-dom';
import Banner_Static_TestData from 'src/testdata/main/Banner_Static_TestData';

function MainAd() {
  const [data, setData] = useState({
    webImageUrl: "",
    mobileImageUrl: "",
    link: "",
  });

  let isComponentMounted = true;

  useEffect(() => {
    setData(Banner_Static_TestData());
    // axios({
    //     url: '/app/banner/static',
    //     method: 'GET',
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       if (isComponentMounted) {
    //         setImage(res.data.result.webImageUrl);            
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return () => {
      isComponentMounted = false;
    }
  }, []);

  return (
    <div className="main-ad-flex">
      <div className="main-ad">
        <>
          <Link to={data.link}>
            <img src={data.webImageUrl} alt="" />
          </Link>
        </>

        {/* <img className="main-ad-img" src={image} alt="advertise image"/> */}
      </div>
    </div>
  );
}

export default MainAd;
