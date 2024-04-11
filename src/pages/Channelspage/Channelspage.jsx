import React, { useState } from "react";
import "./Channelspage.scss";

import DisplayChannelsList from "../../components/DisplayChannelsList/DisplayChannelsList";
import DisplayChat from "../../components/DisplayChat/DisplayChat";
import SendMessages from "../../components/SendMessages/SendMessages";

import { getRecipientId } from "../../utils/helper/getRecipientId";
import { getChatName } from "../../utils/helper/getChatName";

const Channelspage = () => {
    const [recipientId, setRecipientId] = useState(getRecipientId());
    const [chatName, setChatName] = useState(getChatName());

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
