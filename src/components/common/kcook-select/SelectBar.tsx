import React from 'react';
import 'src/styles/common/kcook-select/SelectBar.scss';

import Delete from 'src/assets/cake-bar-delete.svg';

interface Props {
  getData: any;
  setSelectAllF: any;
}

function SelectBar({ getData, setSelectAllF }: Props) {
  return (
    <>
      {getData.map((data: {}, idx: number) => {
        return (
          <div key={idx} className="cake-bar-card">
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

export default SelectBar;
