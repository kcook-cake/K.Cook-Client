import { useState } from 'react';
import classNames from 'classnames';
import 'src/styles/common/kcook-select/SelectWindow.scss';

import X from 'src/assets/x.svg';

interface Props {
  width: any;
  NumF: any;
  selectWindow: any;
  selectDataOne: any;
}

export default function SelectWindowOne({
  width,
  NumF,
  selectWindow,
  selectDataOne,
}: Props) {
  const SelectOneF = (str: string, num: number, length: number) => {
    $('#cake-select-li-' + num).css('color', '#ea5450');
    selectWindow[0] = [false, str, length];
    NumF();
  };

  return (
    <>
      {selectWindow[0][0] ? (
        <div
          className="cake-select-absolute-one"
          style={{ left: width + 1060 + 'px' }}
        >
          <div className="cake-select-top"></div>
          <ul className="cake-select-ul">
            {selectDataOne[0].map((data: any, idx: any) => {
              return (
                <li
                  className={classNames('cake-select-li', {
                    'cake-select-li-top': idx == 0,
                    'cake-select-li-bottom': idx == selectDataOne[0].length - 1,
                  })}
                  onClick={() => {
                    SelectOneF(data, idx + 1, 8 * data.length);
                  }}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}
