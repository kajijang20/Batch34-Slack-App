import React, { useState } from "react";
import "./Messagespage.scss";

import DisplayDMList from "../../components/DisplayDMList/DisplayDMList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";

const Messagespage = () => {
    const [dmId, setDmId] = useState(0);
    const [chatEmail, setChatEmail] = useState("<User Email>");

    return (
        <div className="message">
            <div className="message-page-sidebar">
                <DisplayDMList setRecipientId={setDmId} setChatName={setChatEmail}/>
            </div>
            <div className="message-page-chat">
                <div className="message-page-chat-messages">
                    <DisplayChat recipientId={dmId} receiver="User" chatname={chatEmail}/>
                </div>
                <div className="message-page-chat-send">
                    <SendMessages recipientId={dmId} receiver="User"/>
                </div>
            </div>
        </div>
    );
}

export default Messagespage;
