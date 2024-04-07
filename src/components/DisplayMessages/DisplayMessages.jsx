import React, { useState, useEffect } from 'react';
import "./DisplayMessages.scss";

import FindMessages from '../FindMessages.jsx/FindMessages';

const DisplayMessages = (receiver) => {
    const userId = parseInt(localStorage.getItem("UserId")); 
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        const fetchMessagesList = async () => {
            const sentmessages = await FindMessages(receiver.receiver);
            const updatedMessages = sentmessages.filter((message, index, self) => (self.findIndex(m => m.id === message.id) === index));
            setMessageList(updatedMessages);
        }
        fetchMessagesList();
    }, []);

    return (
        <div className="messages-list">
            <div className="messages-list-header">
                ChatName
            </div>
            <div className="messages-list-main">
                {messageList.map((item) => {
                    let position = item.sender.id === userId ? "right" : "left";
                    return (
                        <div key={item.id} className="messages-content">
                            <div className={`messages-name ${position}`}>
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
