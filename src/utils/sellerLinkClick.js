import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const sellerLinkClick = (i) => {
    $(".ss-link").css("color", "#999999");
        $(".ss-link").css("background", "#fff");
        $(".ss-link").css("stroke", "#fff");
        $(".ss-link text").css("stroke", "#999999"); $(".ss-link circle").css("stroke", "#999999"); $(".ss-link path").css("stroke", "#999999"); $(".ss-link tspan").css("stroke", "#999999"); $(".ss-link ellipse").css("stroke", "#999999"); $(".ss-link line").css("stroke", "#999999");

        $(".ss-link."+i).css("color", "#fff");
        $(".ss-link."+i).css("background", "#ea5450");
        $(".ss-link."+i).css("stroke", "#ea5450");
        $(".ss-link."+i+" text").css("stroke", "#fff"); $("."+i+" circle").css("stroke", "#fff"); $("."+i+" path").css("stroke", "#fff"); $("."+i+" tspan").css("stroke", "#fff"); $("."+i+" ellipse").css("stroke", "#fff"); $("."+i+" line").css("stroke", "#fff");
}

export default sellerLinkClick;