import { useState } from "react";
import "src/styles/main/card/cake-store/SelectBox.scss";

import selectAllow from "src/assets/selectArrow.png";

interface Props {
    cakestoreTF: any,
    selectWindow: any,
    SelectCloseF: any,
}

export default function SelectBox({ 
    cakestoreTF,
    selectWindow,
    SelectCloseF,
  }: Props) {

    return (
        <>
            {selectWindow[0][1] == ""?
                null:
                <div 
                    className="cake-select cake-select-one-flex"
                    onClick={()=>{
                        SelectCloseF();
                        if (selectWindow[0][0]) selectWindow[0][0] = false;
                        else selectWindow[0][0] = true;
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
            }
            
            <div 
                className="pc cake-select"
                onClick={() => {
                    SelectCloseF();
                    if (selectWindow[1][0]) selectWindow[1][0] = false;
                    else selectWindow[1][0] = true;
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

            <div
                className="pc cake-select"
                onClick={() => {
                    SelectCloseF();
                    if (selectWindow[3][0]) selectWindow[3][0] = false;
                    else selectWindow[3][0] = true;
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

            {selectWindow[0][4] == ""?
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
