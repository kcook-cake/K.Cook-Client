import React from 'react';
import '../../../styles/main/cake/Cake_MobileCard.scss';

import Delete from '../../../assets/cake-bar-delete.svg';

interface Props {
  getData: any;
  setSelectAllF: any;
}

function CakeBarCard({ getData, setSelectAllF }: Props) {
  return (
    <>
      {getData.map((data: {}) => {
        return (
          <div className="cake-bar-card">
            <div style={{ display: 'flex' }}>
              {/* 서울 텍스트 */}
              {data}
              <img
                src={Delete}
                className="cake-bar-delete"
                onClick={() => {
                  var selectData: any = [];
                  for (var i = 0; i < getData.length; i++)
                    if (getData[i] != data)
                      selectData[selectData.length] = getData[i];
                  setSelectAllF(selectData);
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CakeBarCard;
