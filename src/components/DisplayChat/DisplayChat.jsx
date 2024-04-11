import React, { useState, useEffect, useRef } from "react";
import "./DisplayChat.scss";

import getMessages from "../../utils/helper/getMessages";
import getDateMessage from "../../utils/helper/getDateMessage";

const DisplayChat = ({ recipientId, receiver, chatname }) => {
    const userId = parseInt(localStorage.getItem("UserId"));
    const [messageList, setMessageList] = useState([]);
    const messagesContainerRef = useRef(null);
    
    useEffect(() => {
        const fetchMessagesList = async () => {
            const sentmessages = await getMessages({ recipientId, receiver });
            if (sentmessages) {
                const updatedMessages = sentmessages.filter((message) => !messageList.find((m) => m.id === message.id));
                if (updatedMessages.length > 0) {
                    setMessageList(prevMessages => [...prevMessages, ...updatedMessages]);
                    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                }
            }
        }
        const interval = setInterval(() => {
            fetchMessagesList();
        }, 1000); // Fetch messages every second
    
        return () => clearInterval(interval);
    }, [recipientId, receiver, messageList]); 
    
    useEffect(() => {
        setMessageList([]);
    }, [recipientId, receiver]);

    //console.log("message list: ", messageList);

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
