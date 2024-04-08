import React, { useState } from "react";
import "./Channelspage.scss";

import DisplayChannelsList from "../../components/DisplayChannelsList/DisplayChannelsList";
import DisplayMessages from "../../components/DisplayMessages/DisplayMessages";
import SendMessages from "../../components/SendMessages/SendMessages";

const Channelspage = () => {

    return (
        <div className="channels-page">
            <div className="channels-page-sidebar">
                <DisplayChannelsList />
            </div>
            <div className="channels-page-chat">
                <div className="channels-page-chat-messages">
                    <DisplayMessages receiver="User"/>
                </div>
                <div className="channels-page-chat-send">
                    <SendMessages receiver="User"/>
                </div>
            </div>
        </div>
        
    );   
}
  
export default Channelspage;
