import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.scss";
import { SiteLogo } from "../../assets/icons";

const Homepage = () => {
    const navigate = useNavigate();

    const handleRoute = () => {
        navigate("./login");
    }

    return (
        <div className="homepage">
            <div className="homepage-logo"> 
                <SiteLogo />
                <h2> Star Stream </h2>
            </div>
            <div className="homepage-content">
                <h4> Understand this, my dear brothers and sisters: 
                You must all be quick to listen, slow to speak, 
                and slow to get angry. </h4>
                <p> James 1:19 (NLT) </p>
            </div>
            <button onClick={handleRoute}> Login </button>
        </div>
    );

}

export default Homepage;