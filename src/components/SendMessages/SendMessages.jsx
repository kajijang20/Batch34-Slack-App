import React, { useState } from "react";
import "./SendMessages.scss";

import { DataSendMessage } from '../../utils/Api';

const SendMessages = ({ recipientId, receiver }) => {
    const headers = JSON.stringify(localStorage.getItem("headers")); 
    const [body, setBody] = useState("");

    const handleSend = async() => {
        if (body.trim() !== "") {
            const sendmessage = await DataSendMessage({ receiver_id: recipientId, receiver_class: receiver, body: body });
            //console.log("sent message: ", sendmessage.data);
            setBody("");
            return sendmessage;
        }
    }

    const handleKeyPressSend = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="messages-sent">
            <div className="messages-sent-main">
                <div className="message-sent-content">
                    <input type="text"
                        name="body"
                        placeholder="Type your message here"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="mesage-sent-body"
                        autoComplete="off"
                        onKeyPress={handleKeyPressSend}
                    />
                    <button onClick={handleSend} className="send-btn">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SendMessages;
