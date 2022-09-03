import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainCrousel.scss';

import getAxios from 'src/utils/getAxios';
import BannerSlider from '../card/BannerSlide';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import ImageModal from 'src/components/main/home/image-modal/ImageModal';

interface Props {
  session: any,
  auth: any,
}

function Crousel({session, auth}: Props) {
  const [num, setNum] = useState(0);

  const [files, setFiles] = useState('');
  const onLoadFile = (e: any) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  // 배너 등록 페이지
  const [bannerShow, setBannerShow] = useState(false);
  const [bannerImage, setBannerImage] = useState<any>([]);

  const [image, setImage] = useState<any>([]);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    axios.get(`https://prod.kcook-cake.com/app/banner/carousel`).then((res) => {
      for (var i = 0; i < 4; i++) image[i] = res.data.result[i].webImageUrl;
      setBannerImage(image);
    });
  }, []);

  return (
    <>
      <ImageModal
        num={num}
        setNum={setNum}
        resize={resize}
        imageModalShow={bannerShow}
        setImageModalShowF={setBannerShow}
        imageData={image}
        setImageDataF={setBannerImage}
      />

      <div
        className="crousel"
        onClick={auth.accountId == 31 ? () => setBannerShow(true) : () => {}}
      >
        <BannerSlider auth={auth.accountId == 31} getData={image} />
      </div>
    </>
  );
}

export default Crousel;
