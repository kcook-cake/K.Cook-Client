import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainAd.scss';

import adimg from '../../../assets/main-ad.png';
import { Link } from 'react-router-dom';
import ChangeAdModal from './ChangeAdModal';

interface Props {
  session: any;
  auth: any;
}

function MainAd({ session, auth }: Props) {
  const [image, setImage] = useState('');
  useEffect(() => {
    axios.get(`https://prod.kcook-cake.com/app/banner/static`).then((res) => {
      setImage(res.data.result.webImageUrl);
      // for (var i=0; i<4; i++)
      //     image[i] = res.data.result[i].webImageUrl;
      // setBannerImage(image);
    });
  }, []);
  const [changeAd, setChangeAd] = useState(false);

  return (
    <div className="main-ad-flex">
      <div className="main-ad">
        <ChangeAdModal
          //      num={num}
          //        setNum={setNum}
          //          resize={resize}
          imageModalShow={changeAd}
          setImageModalShowF={setChangeAd}
          imageData={image}
          //            setImageDataF={setBannerImage}
        />
        <>
          <img src={image} alt="" />
          {auth.accountId == 31 && (
            <button onClick={() => setChangeAd(true)}>광고 변경</button>
          )}
        </>

        {/* <img className="main-ad-img" src={image} alt="advertise image"/> */}
      </div>
    </div>
  );
}

export default MainAd;
