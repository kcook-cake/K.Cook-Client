import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/seller/spm-ssr/SPMCard.scss';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
// import { ReactComponent as SettingIcon } from '../../../assets/seller/spr-setting.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
// import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

// import leftArrow from '../../../assets/left-arrow.svg';
// import rightArrow from '../../../assets/right-arrow.svg';
import setting from '../../../assets/seller/spm-setting.png';

interface Props {
    idx: any,
    NumF: any,

    oriShow: any,
    oriData: any,
}

function SPMCard({ 
        idx, NumF,
        oriShow, oriData,
    }: Props) {

    useEffect(()=>{
    },[]);
    
    return (
        <>
            <div className="spmcard">
                <div className="spmcard-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = false;
                            NumF();
                        }}>
                        <DragBtn/>
                    </div>
                    <div className="spmcard-content">
                        <div className="spmcard-img">
                            <div className="spm-add-update-img-inner">
                                {oriData.image[0]==="" || oriData.image[0]===null || oriData.image[0]===undefined ?
                                    <div className="spmcard-img-inner">
                                        <AddIcon/>
                                    </div>:
                                    <img src={oriData.image[0]} />
                                }
                            </div>
                        </div>
                        <div className="spmcard-content-inner">
                            <div className="spmcard-title">{oriData.name}</div>
                            {oriData.newOptionsList.map((option: { optionNumber: any, optionName: any, itemList: any, })=>{
                                return (
                                    <>
                                        {option.optionName}:&nbsp;
                                        {option.itemList.map((item: { itemNumber: any, itemName: any, })=>{
                                            return (
                                                <>
                                                    {item.itemName}
                                                    {(item.itemNumber===option.itemList.length-1)? null: <>,&nbsp;</>}
                                                </>
                                            );
                                        })}
                                        <br/>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="spm-tap">
                    <button
                        onClick={()=>{
                            alert("삭제");
                            // setAddDiv(false);
                        }}>
                        <CloseBtn/>
                    </button>
                    <button
                        className="spmcard-tap-btn"
                        onClick={()=>{
                            alert("복제");
                        }}>
                        <CopyBtn/>
                    </button>
                    <Link to="/ProductManagement/0">
                        <div className="spmcard-tap-btn">
                            <img src={setting}/>
                        </div>
                    </Link>
                    <label className="switch-button">
                        <input
                            id='studies_togetherTrue'
                            type='checkbox'
                            onClick={() => {
                                //노출
                            }}
                            // checked={false} //노출 여부 판단 후 적음
                        />
                        <span className="onoff-switch"></span>
                    </label>
                </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SPMCard;
