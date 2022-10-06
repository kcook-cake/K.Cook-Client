import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const KCOOKScroll = (TF) => {
    if (TF) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "overlay";
}

export default KCOOKScroll;