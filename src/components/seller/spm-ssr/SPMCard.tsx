import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/seller/spm-ssr/SPMCard.scss';
import kcook from 'src/utils/kcook';

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
    idx: number,
    NumF: Function,
    auth: {
        accountId: number,
        address: string,
        dateOfBirth: string,
        email: string,
        nickname: string,
        phoneNumber: string,
    },

    oriShow: boolean[],
    oriData: {
        cakeId: number,
        name: string,
        price: number,
        todayCake: boolean,
        todayShow: boolean,
        maxToday: number,
        image1: string,
        image2: string,
        image3: string,
        image4: string,
        image5: string,
        optionsList: Props2[],
    },
}

interface Props2 {
    optionId: number,
    optionNumber: string,
    optionName: string,
    itemList: Props3[],
}

interface Props3 {
    itemId: number,
    itemNumber: number,
    itemType: string,
    itemName: string,
    itemPrice: number,
    itemChild: Props4[],
}

interface Props4 {
    type: number,
    array: number[],
}

function SPMCard({ 
        idx, NumF, auth,
        oriShow, oriData,
    }: Props) {

    useEffect(()=>{
        if (oriData.todayCake) $('input:checkbox[name="spmcard-show-'+idx+'"]').prop('checked',true);
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
                                {oriData.image1==="" || oriData.image1===null || oriData.image1===undefined || oriData.image1.length===133 ?
                                    <div className="spmcard-img-inner">
                                        <AddIcon/>
                                    </div>:
                                    <img src={oriData.image1} />
                                }
                            </div>
                        </div>
                        <div className="spmcard-content-inner">
                            <div className="spmcard-title">{oriData.name}</div>
                            {oriData.optionsList.map((option: Props2, idx: number)=>{
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
                    <Link to={kcook() + "/ProductManagement/0"}>
                        <div className="spmcard-tap-btn">
                            <img src={setting}/>
                        </div>
                    </Link>
                    {auth.accountId === 31 &&
                        <label className="switch-button">
                            <input
                                name={'spmcard-show-'+idx}
                                type='checkbox'
                                onChange={() => {
                                    //patch /api/store/is-today-cake
                                    /*
                                        axios({
                                            url: '',
                                            method: '',
                                            data: {
                                                todayCake: oriData.todayCake,
                                            },
                                        })
                                    */
                                    if (oriData.todayCake) oriData.todayCake = false;
                                    else oriData.todayCake = true;
                                    NumF();
                                }}
                                checked={oriData.todayCake} //노출 여부 판단 후 적음
                            />
                            <span className="onoff-switch"></span>
                        </label>
                    }
                </div>
            </div>
    </>
  );
}

export default SPMCard;
