import React, { useState, useEffect } from "react";

const Cake_Detail_TestData = () => {
    //get /api/cake/{cakeId}
    return ([
        {
            groupId: 384,
            groupTF: false,
            timesList: [
                "10:00",
                "11:00",
                "12:00",
                "13:00",
            ],
        },
        {
            groupId: 385,
            groupTF: true,
            timesList: [
                "13:00",
                "14:00",
            ],
        },
    ]);
}

export default Cake_Detail_TestData;