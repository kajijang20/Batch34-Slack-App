import React, { useState, useEffect } from 'react';
import { DataRetrieveMessage } from '../../utils/Api';

const FindMessages = async(receiver) => {
    //const headers = JSON.stringify(localStorage.getItem("headers"));
    const id = localStorage.getItem("UserId");
    //const messages = await DataRecentMessage(headers);
    //console.log("recent messages: ", messages);
    const getmessages = await DataRetrieveMessage({receiver_id: id, receiver_class: receiver});
    //console.log("retrieve messages: ", getmessages);

    return (getmessages.data);
}

export default FindMessages;
