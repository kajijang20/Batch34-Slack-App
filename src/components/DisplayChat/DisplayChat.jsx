import React, { useState, useEffect, useRef } from "react";
import "./DisplayChat.scss";

import getMessages from "../../utils/helper/getMessages";
import getDateMessage from "../../utils/helper/getDateMessage";

const DisplayChat = ({ recipientId, receiver, chatname }) => {
    const userId = parseInt(localStorage.getItem("UserId"));
    const [messageList, setMessageList] = useState([]);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        setMessageList([]); // Reset messageList when recipientId or receiver changes
        const interval = setInterval(() => {
            fetchMessagesList();
        }, 1000);

        return () => clearInterval(interval);
    }, [recipientId, receiver]);

    const fetchMessagesList = async () => {
        const sentmessages = await getMessages({ recipientId, receiver });
        if (sentmessages) {
            const newMessages = sentmessages.filter((message) => (message.receiver.id === recipientId) && (!messageList.find((m) => m.id === message.id)));
            if (newMessages.length > 0) {
                const updatedMessages = [...newMessages];
                setMessageList(updatedMessages);
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }
    };

    return (
        <div className="messages-list">
            <div className="messages-header">
                {chatname}
            </div>
            <div className="messages-list-main" ref={messagesContainerRef}>
            {messageList.map((item) => {
                let position = item.sender.id === userId ? "right" : "left";
                return (
                    <div key={item.id} className={`messages-content ${position}`}>
                        <div className="messages-name">
                        User ID: {item.sender.id}
                        </div>
                        <div className={`messages-body ${position}`}>
                            {item.body}
                        </div>
                        <div className="messages-time">
                            {getDateMessage(item.created_at)}    
                        </div> 
                    </div>
                );                
            })}
            </div>
        </div>
    );
}

export default DisplayChat;
