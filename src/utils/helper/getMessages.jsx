import React, { useState, useEffect } from "react";
import { DataRetrieveMessage } from "../Api";

import { getHeaders } from "./getHeaders";

const getMessages = async({ recipientId, receiver }) => {
    const headers = getHeaders(); 
    if (recipientId){
        const messages = await DataRetrieveMessage({ receiver_id: recipientId, receiver_class: receiver }); 
        //console.log("retrieve messages: ", getmessages);
        return (messages.data);
    } else {
        return;
    }
}

export default getMessages;
