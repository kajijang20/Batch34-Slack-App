import React, { useState, useEffect } from "react";
import "./Messagespage.scss";

import DisplayDMList from "../../components/DisplayDMList/DisplayDMList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";

import getDMUsers from "../../utils/helper/getDMUsers";

const Messagespage = () => {
    const [recipientId, setRecipientId] = useState(0);
    const [chatName, setChatName] = useState("");
    
    const channels = JSON.parse(localStorage.getItem("UserChannels"));
    //console.log("channels: ", channels);
    //console.log("channels message type: ", typeof(channels));
    if (channels !== null) {
        getDMUsers({ channels }).then((sortChannelUsers) => {
            localStorage.setItem("DmList", JSON.stringify(sortChannelUsers));
        });
    }
    

    return(
        <div className="message">
            <div className="message-page-sidebar">
                <DisplayDMList setRecipientId={setRecipientId} setChatName={setChatName}/>
            </div>
            <div className="message-page-chat">
                <div className="message-page-chat-messages">
                    <DisplayChat recipientId={recipientId} receiver="User" chatname={chatName}/>
                </div>
                <div className="message-page-chat-send">
                    <SendMessages recipientId={recipientId} receiver="User"/>
                </div>
            </div>
        </div>
    );
}
  
export default Messagespage;
