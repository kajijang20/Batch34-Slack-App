import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Channelspage.scss";

import ListChannels from "../../components/ListChannels/ListChannels";

const Channelspage = () => {
    // const [channels, setChannels] = useState([]);
    // const [currentPage, setCurrentPage] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const channelsData = await FindChannels();
    //         setChannels(channelsData);
    //         console.log("all channel users: ", channelsData);
    //     }
    //     fetchData();
    // }, []);

    // const handleItemClick = (item) => {
    //     setCurrentPage(item.name);
    // }

    // return(
    //     <div className="channels">
    //         <div className="channels-main">
    //             channelspage
    //             {channels.map((item) => (
    //                 <Link className="item-link"
    //                     key={item.id}
    //                     to={"/channels/" + item.name}
    //                     onClick={() => handleItemClick(item)}
    //                 >
    //                 <p className={currentPage === item.name ? 'selected' : ''}>
    //                     {item.name}
    //                 </p>
    //                 </Link>
    //             ))}
    //         </div>
    //     </div>
    // )
    return (
        <ListChannels />
    );   
}
  
export default Channelspage;
