import React from 'react';
import { Link } from "react-router-dom";

interface LocationProps {
    getData: any,
    setLocationIndexF: any,
}

function Location({ getData, setLocationIndexF }: LocationProps) { 
    return (
        <select
            id="lp-select-location"
            onClick={()=>{
                setLocationIndexF($("#lp-select-location option:selected").val());
            }}
        >
            <option disabled selected>
            시/군 선택
            </option>
            {getData.map((data: { locationId: any, locationName: any })=>{
                return (
                    <option
                        value={data.locationId}
                        className="lp-option-locations"
                    >{data.locationName}</option>
                )
                })
            }
        </select>
    );
}


export default Location;