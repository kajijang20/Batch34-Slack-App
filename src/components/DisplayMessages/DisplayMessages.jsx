import React, { useState, useEffect, useRef } from "react";
import "./DisplayMessages.scss";

import FindMessages from "../../utils/helper/getMessages";

const DisplayMessages = ({ receiver }) => {
    const userId = parseInt(localStorage.getItem("UserId")); 
    const [messageList, setMessageList] = useState([]);
    const messagesContainerRef = useRef(null);
    
    useEffect(() => {
        const fetchMessagesList = async () => {
            const sentmessages = await FindMessages(receiver);
            const updatedMessages = sentmessages.filter((message) => !messageList.find((m) => m.id === message.id));
            setMessageList([...messageList, ...updatedMessages]);
            // scroll down not at the last message but the one before, ok for now
            if (updatedMessages.length > 0) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }

        const interval = setInterval(() => {
            fetchMessagesList();
        }, 1000); // Fetch messages every second

        //messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        return () => clearInterval(interval);
    }, [receiver, messageList]);    

    return (
        <div className="messages-list">
            <div className="messages-list-header">
                ChatName
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayMessages;
