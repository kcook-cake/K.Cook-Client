import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'src/styles/main/home/MainAd.scss';

import { Link } from 'react-router-dom';

function MainAd() {
  const [image, setImage] = useState('');

  let isComponentMounted = true;
  useEffect(() => {
    axios({
        url: '/app/banner/static',
        method: 'GET',
      })
      .then((res) => {
        if (res.data) {
          if (isComponentMounted) {
            setImage(res.data.result.webImageUrl);            
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      isComponentMounted = false;
    }
  }, []);

  return (
    <div className="main-ad-flex">
      <div className="main-ad">
        <>
          <Link to="/Cake">
            <img src={image} alt="" />
          </Link>
        </>

        {/* <img className="main-ad-img" src={image} alt="advertise image"/> */}
      </div>
    </div>
  );
}

export default MainAd;
