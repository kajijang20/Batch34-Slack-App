import React, { useState, useEffect } from "react";
import "./Messages.scss";

import DisplayDMList from "../../components/DisplayDMList/DisplayDMList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";

const Messagespage = () => {
    
    return(
        <div className="message">
            <div className="message-page-sidebar">
                <DisplayDMList />
            </div>
            <div className="message-page-chat">
                <div className="message-page-chat-messages">
                    <DisplayChat receiver="User"/>
                </div>
                <div className="message-page-chat-send">
                    <SendMessages receiver="User"/>
                </div>
            </div>
        </div>
    );
}
  
export default Messagespage;
