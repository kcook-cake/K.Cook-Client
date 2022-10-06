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
    auth: any,

    oriShow: any,
    oriData: any,
}

function SPMCard({ 
        idx, NumF, auth,
        oriShow, oriData,
    }: Props) {

    useEffect(()=>{
        if (oriData.isTodayCake)
            $('input:checkbox[name="spmcard-show-'+idx+'"]').prop('checked',true);
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
                                {oriData.productImage1==="" || oriData.productImage1===null || oriData.productImage1===undefined ?
                                    <div className="spmcard-img-inner">
                                        <AddIcon/>
                                    </div>:
                                    <img src={oriData.productImage1} />
                                }
                            </div>
                        </div>
                        <div className="spmcard-content-inner">
                            <div className="spmcard-title">{oriData.name}</div>
                            {oriData.optionsList.map((option: { optionNumber: number, optionName: string, itemList: any[], }, idx: number)=>{
                                return (
                                    <div key={idx} style={{ display: "flex", }}>
                                        {option.optionName}:&nbsp;
                                        {option.itemList.map((item: { itemNumber: number, itemName: string, }, idx2: number)=>{
                                            return (
                                                <div key={idx2}>
                                                    {item.itemName}
                                                    {(item.itemNumber===option.itemList.length-1)? null: <>,&nbsp;</>}
                                                </div>
                                            );
                                        })}
                                        <br/>
                                    </div>
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
                    {/* {auth.accountId === 31 &&
                        <label className="switch-button">
                            <input
                                name={'spmcard-show-'+idx}
                                type='checkbox'
                                onClick={() => {
                                    //노출
                                }}
                                // checked={false} //노출 여부 판단 후 적음
                            />
                            <span className="onoff-switch"></span>
                        </label>
                    } */}
                </div>
            </div>
    </>
  );
}

export default SPMCard;
