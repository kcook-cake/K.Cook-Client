import { useState } from "react";
import "src/styles/common/kcook-select/SelectBox.scss";

import selectAllow from "src/assets/selectArrow.png";

interface Props {
    NumF: Function,
    selectWindow: (boolean | string | number) [][],
}

export default function SelectBoxOne({ 
    NumF,
    selectWindow,
  }: Props) {

    return (
        <>
            <div 
                className="cake-select cake-select-one-flex"
                onClick={()=>{
                    if (selectWindow[0][0]) selectWindow[0][0] = false;
                    else selectWindow[0][0] = true;
                    NumF();
                }}>
                <div style={{ display: "flex", }}>
                    <button id="cake-select-one" className="cake-select-button">
                        {selectWindow[0][1]}
                    </button>
                    <div className="cake-select-img">
                        <img src={selectAllow}/>
                    </div>
                </div>
            </div>
        </>
    );
}
