import React from 'react';
import 'src/styles/common/kcook-select/SelectBar.scss';

import Delete from 'src/assets/cake-bar-delete.svg';

interface Props {
  getData: string[];
  setSelectAllF: Function;
  searchChangeF: Function;
}

function SelectBar({ getData, setSelectAllF, searchChangeF }: Props) {
  return (
    <>
      {getData.map((data: string, idx: number) => {
        return (
          <div key={idx} className="cake-bar-card">
            <div style={{ display: 'flex' }}>
              {/* 서울 텍스트 */}
              {data}
              <img
                src={Delete}
                className="cake-bar-delete"
                onClick={() => {
                  let selectData: string[] = [];
                  for (let i = 0; i < getData.length; i++)
                    if (getData[i] != data)
                      selectData[selectData.length] = getData[i];
                  setSelectAllF(selectData);
                  searchChangeF(selectData);
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
