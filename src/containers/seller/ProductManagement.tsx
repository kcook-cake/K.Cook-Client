/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../assets/seller/copybtn.svg';
import addIcon from '../../assets/seller/spm-add.png';

import SPMCard from 'src/components/seller/spm-ssr/SPMCard';
import SPM_Add from 'src/components/seller/spm-ssr/SPM_Add';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import List2Option from 'src/utils/List2Option';
import SPM_Update from 'src/components/seller/spm-ssr/SPM_Update';
import SPM_TestData from 'src/testdata/SPM_TestData';

function ProductManagement(session: any, auth: any,) {
  const [num, setNum] = useState(0);
  const [oriShow, setOriShow] = useState<any>([]);
  let [oriData, setOriData] = useState([]);

  const [addShow, setAddShow] = useState(false);

  const [resize, setResize] = useState([0, 0]);
  const handleResize = () => {
    setResize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    LinkClick('ProductManagement');
    sellerLinkClick('ProductManagement');

    let isComponentMounted = true;
    oriData = SPM_TestData();
    for (var i = 0; i < oriData.length; i++) {
      oriShow[i] = true;
      oriData[i].optionsList = List2Option(oriData[i].optionsList);
    }
    setOriShow(oriShow);
    setOriData(oriData);

    //get /api/store/cake?storeId=0
    /*
    axios({
        url: "",
        method: "GET",
      }).then((res)=>{
        if (res.data) {
          if (isComponentMounted) {
            oriData = [res.data.result];
            for (var i = 0; i < oriData.length; i++) {
              oriShow[i] = true;
              oriData[i].optionsList = List2Option(oriData[i].optionsList);
            }
            setOriShow(oriShow);
            setOriData(oriData);
          }
        }
      }).catch((err)=>{
      })
    */

    setResize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => {
      isComponentMounted = false;
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <div className="seller-mypage-top-flex">
        <div className="spm-ssr-mobile-box">
          {/* title */}
          <div className="seller-mypage-top spm-ssr-title">
            <div className="seller-mypage-front-title">상품관리</div>
            <div className="seller-mypage-middle-title">
              현재 판매 중인 상품입니다
            </div>
          </div>
          <div
            className="mobile"
            style={{ width: '5px', height: '25px' }}
          ></div>

          <div className="seller-content">
            {oriData.map((data: any, idx: number) => {
              return (
                <div key={idx}>
                  {oriShow[idx] ? 
                    (
                      <SPMCard
                        idx={idx}
                        NumF={()=>setNum(num+1)}
                        auth={auth}
                        oriShow={oriShow}
                        oriData={oriData[idx]}
                      />
                    ) : (
                      <SPM_Update
                        idx={idx}
                        NumF={()=>setNum(num+1)}
                        resize={resize}
                        oriShow={oriShow}
                        getUpdateData={oriData[idx]}
                      />
                    )
                  }
                </div>
              );
            })}
            {addShow&&
              <SPM_Add
                NumF={()=>setNum(num+1)} resize={resize}
                setAddShowF={setAddShow}
              />
            }
          </div>
        </div>

        {/* addButton */}
        <div className="spm-bottom">
          <button className="mobile spm-bottom-inner spm-bottom-left">
            <CopyBtn />
          </button>
          <button
            className="spm-bottom-inner spm-bottom-middle"
            onClick={() => {
              setAddShow(true);
            }}>
            {resize[0]>767? 
              <AddIcon />:
              <img src={addIcon}/>
            }
          </button>
          <button
            className="mobile spm-bottom-inner spm-bottom-right"
            onClick={() => {
              setAddShow(false);
              for (var i = 0; i < oriShow.length; i++) oriShow[i] = true;
              setNum(num + 1);
            }}
          >
            <CloseBtn />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
