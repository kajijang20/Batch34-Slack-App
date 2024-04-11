import React, { useState } from "react";
import "./Channelspage.scss";

import DisplayChannelsList from "../../components/DisplayChannelsList/DisplayChannelsList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";


const Channelspage = () => {
    const [recipientId, setRecipientId] = useState(0);
    const [chatName, setChatName] = useState("<Chat Name>");

    return (
        <div className="channels-page">
            <div className="channels-page-sidebar">
            <DisplayChannelsList setRecipientId={setRecipientId} setChatName={setChatName} />
            </div>
            <div className="channels-page-chat">
                <div className="channels-page-chat-messages">
                    <DisplayChat recipientId={recipientId} receiver="Channel" chatname={chatName}/>
                </div>
                <div className="channels-page-chat-send">
                    <SendMessages recipientId={recipientId} receiver="Channel"/>
                </div>
            </div>
        </div>  
    );
}
  
export default Channelspage;
