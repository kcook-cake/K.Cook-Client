import { useState } from "react";
import classNames from 'classnames';
import "src/styles/main/card/cake-store/SelectBox.scss";

import selectAllow from "src/assets/selectArrow.png";

interface Props {
    cakestoreTF: any,
    NumF: any,

    selectBox: any,
    selectWindow: any,
    SelectCloseF: any,
    setSelectAllF: any,
}

export default function SelectBox({ 
    cakestoreTF,
    NumF,

    selectBox,
    selectWindow,
    SelectCloseF,
    setSelectAllF,
  }: Props) {

    return (
        <>
            <div 
                className="pc cake-select"
                onClick={() => {
                    SelectCloseF();
                    if (selectWindow[1][0]) selectWindow[1][0] = false;
                    else selectWindow[1][0] = true;
                    NumF();
                }}>
                <div style={{ display: "flex" }}>
                    <button id="cake-select-three" className="cake-select-button">
                        {selectWindow[1][1]}
                    </button>
                    <div className="cake-select-img">
                        <img src={selectAllow}/>
                    </div>
                </div>
            </div>

            <div
                className="pc cake-select"
                onClick={() => {
                    SelectCloseF();
                    if (selectWindow[2][0]) selectWindow[2][0] = false;
                    else selectWindow[2][0] = true;
                }}>
                <div style={{ display: "flex" }}>
                    <button id="cake-select-two" className="cake-select-button">
                        {selectWindow[2][1]}
                    </button>
                    <div className="cake-select-img">
                        <img src={selectAllow}/>
                    </div>
                </div>
            </div>

            {cakestoreTF?
            <div
                className={classNames('pc', 'cake-select', {
                    "store-nouse": selectBox[2],
                })}
                onClick={() => {
                    SelectCloseF();
                    if (selectWindow[3][0]) selectWindow[3][0] = false;
                    else selectWindow[3][0] = true;
                    NumF();
                }}>
                <div style={{ display: "flex" }}>
                    <button id="cake-select-four" className="cake-select-button">
                        {selectWindow[3][1]}
                    </button>
                    <div className="cake-select-img">
                        <img src={selectAllow}/>
                    </div>
                </div>
            </div>
            :null}

            {cakestoreTF?
                <div
                    className="pc cake-select"
                    onClick={() => {
                        SelectCloseF();
                        if (selectWindow[4][0]) selectWindow[4][0] = false;
                        else selectWindow[4][0] = true;
                    }}>
                    <div style={{ display: "flex" }}>
                        <button id="cake-select-two" className="cake-select-button">
                            {selectWindow[4][1]}
                        </button>
                        <div className="cake-select-img">
                            <img src={selectAllow}/>
                        </div>
                    </div>
                </div>
            :null}
        </>
    );
}
