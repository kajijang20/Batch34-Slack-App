import React, { useState } from "react";
import "./Messagespage.scss";

import DisplayDMList from "../../components/DisplayDMList/DisplayDMList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";

const Messagespage = () => {
    const [recipientId, setRecipientId] = useState(0);
    const [chatName, setChatName] = useState("<Chat Email>");

    return (
        <div className="message-page">
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
