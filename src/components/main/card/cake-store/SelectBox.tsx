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
                className={classNames('pc', 'cake-select', {
                    "store-nouse": selectBox[0],
                })}
                onClick={() => {
                    SelectCloseF();
                    if (!cakestoreTF) {
                        selectBox[1] = true;
                        if (!selectBox[2]) setSelectAllF([]);
                        selectBox[0] = false;
                        selectBox[2] = true;
                    }
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

            {cakestoreTF || selectBox[1] ?
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
            :null}

            <div
                className={classNames('pc', 'cake-select', {
                    "store-nouse": selectBox[2],
                })}
                onClick={() => {
                    SelectCloseF();
                    if (!cakestoreTF) {
                        selectBox[1] = false;
                        if (!selectBox[0]) setSelectAllF([]);
                        selectBox[0] = true;
                        selectBox[2] = false;
                    }
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

            {selectWindow[4][1] == ""?
                null:
                <div 
                    className="pc cake-select"
                    onClick={() => {
                        SelectCloseF();
                        if (selectWindow[4][0]) selectWindow[4][0] = false;
                        else selectWindow[4][0] = true;
                    }}>
                    <div style={{ display: "flex" }}>
                        <button id="cake-select-five" className="cake-select-button">
                            {selectWindow[4][1]}
                        </button>
                        <div className="cake-select-img">
                            <img src={selectAllow}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
