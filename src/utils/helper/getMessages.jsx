import React, { useState, useEffect } from "react";
import { DataRetrieveMessage } from "../Api";
import { getHeaders } from "./getHeaders";

const FindMessages = async(receiver) => {
    const headers = getHeaders(); 
    const id = localStorage.getItem("UserId"); 
    //const messages = await DataRecentMessage(headers); 
    //console.log("recent messages: ", messages); 
    const getmessages = await DataRetrieveMessage({ receiver_id: 3, receiver_class: receiver }); 
    console.log("retrieve messages: ", getmessages);

    return (getmessages.data);
}

export default FindMessages;
