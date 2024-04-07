import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Channelspage.scss";

import { DataChannelDetails } from "../../utils/Api";

import DisplayChannelsList from "../../components/DisplayChannelsList/DisplayChannelsList";
import DisplayMessages from "../../components/DisplayMessages/DisplayMessages";

const Channelspage = () => {

    return (
        <div className="channels-page">
            <div className="channels-page-sidebar">
                <DisplayChannelsList />
            </div>
            <div className="channels-page-chat">
                <DisplayMessages receiver="Channel"/>
            </div>
        </div>
        
    );   
}
  
export default Channelspage;
