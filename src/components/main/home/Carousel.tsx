import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainCrousel.scss';

// import getAxios from 'src/utils/getAxios';
import BannerSlider from 'src/components/main/common/BannerSlide';

// import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import ImageModal from 'src/components/main/home/image-modal/BannerModal';

interface Props {
  session: any;
  auth: any;
}

function Crousel({ session, auth }: Props) {
  const [num, setNum] = useState(0);

  //  const [files, setFiles] = useState('');
  /* const onLoadFile = (e: any) => {
    const file = e.target.files;
    setFiles(file);
  }; */

  // 배너 등록 페이지
  const [bannerShow, setBannerShow] = useState(false);
  const [bannerImage, setBannerImage] = useState<any>([]);
  const [data, setData] = useState([]);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
      setResize(window.innerWidth);
      window.addEventListener('resize', handleResize);

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
      <ImageModal
        TF={true}
        num={num}
        setNum={setNum}
        resize={resize}
        imageModalShow={bannerShow}
        setImageModalShowF={setBannerShow}
        imageData={bannerImage}
        setImageDataF={setBannerImage}
      />

      <div
        className="crousel"
        onClick={auth.accountId === 31 ? () => setBannerShow(true) : () => {}}>
        <BannerSlider auth={auth.accountId === 31} getData={bannerImage} />
      </div>
    </>
  );
}

export default Crousel;
