import React from "react";

import { DataAllUserschannels } from "../Api";
import { StarIcon1, StarIcon2, StarIcon3, StarIcon4, StarIcon5 } from "../../assets/icons";
import { getHeaders } from "./getHeaders";

const getChannels = async () => {
    const starIcon = [<StarIcon1 />, <StarIcon2 />, <StarIcon3 />, <StarIcon4 />, <StarIcon5 />];
    const headers = getHeaders();
    const userchannels = [];
    const datausers = await DataAllUserschannels(headers);
    //console.log("datausers: ", datausers);

    if (datausers.hasOwnProperty("errors")) {
        return "[]";
    } else {
        const channels = datausers.data;
        let starIndex = 0;
        channels.map((channel) => {
            const icon = starIcon[starIndex];
            userchannels.push({ ...channel, icon });
            starIndex = (starIndex + 1) % 5;
        });
    
        localStorage.setItem("UserChannels", JSON.stringify(userchannels));
        //console.log("user channels: ", userchannels);
        return userchannels;
    }
}

export default getChannels;
