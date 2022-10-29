import React from 'react';
import { Link } from "react-router-dom";

interface LocationProps {
    getData: {
        locationId: number, 
        locationName: string,
    }[],
    setLocationIndexF: Function,
}

function Location({ getData, setLocationIndexF }: LocationProps) { 
    return (
        <select
            id="lp-select-location"
            onChange={(e)=>{setLocationIndexF(e.target.value)}}
        >
            <option disabled selected>
            시/군 선택
            </option>
            {getData.map((data: { locationId: number, locationName: string })=>{
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