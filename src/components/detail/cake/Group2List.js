import React, { useState, useEffect } from "react";

const Group2List = (list) => {
    let chList = [];
    let n = 0;
    for (var i=0; i<list.length; i++) {
        for (var j=0; j<list[i].timesList.length; j++) {
            chList[n] = {
                groupId: list[i].groupId,
                groupTF: list[i].groupTF,
                time: list[i].timesList[j],
            }
            n++;
        }
    }
    return (chList);
}

export default Group2List;