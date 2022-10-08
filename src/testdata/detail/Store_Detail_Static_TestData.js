import React, { useState, useEffect } from "react";

const Store_Detail_Static_TestData = () => {
    // get /api/store-detail
    return ({
        storeId: 0,
        name: "유니아케이크",
        likes: 10,
        likeStatus: false,
        intro: "소개",
        date: "2022-10-11",
        phone: "010-1111-1111",
        location: "위치",
        logoImage: "",
        image1: "https://image.wconcept.co.kr/productimg/image/img0/52/300728752_VO48242.jpg",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
    });
}

export default Store_Detail_Static_TestData;