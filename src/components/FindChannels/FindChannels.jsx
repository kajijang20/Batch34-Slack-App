import { DataAllUserschannels } from "../../utils/Api";
import { StarIcon1, StarIcon2, StarIcon3, StarIcon4, StarIcon5 } from "../../assets/icons";

const FindChannels = async () => {
    const starIcon = [<StarIcon1 />, <StarIcon2 />, <StarIcon3 />, <StarIcon4 />, <StarIcon5 />];
    const id =  parseInt(localStorage.getItem("UserId"));
    const headers = JSON.stringify(localStorage.getItem("headers"));
    const userchannels = [];
    //console.log("userId: ", id);
    const datausers = await DataAllUserschannels(headers);
    //console.log("datausers: ", datausers); 
    const channels = datausers.data;
    //console.log("channels: ", channels);

    let starIndex = 0;
    channels.forEach((item) => {
        if (item.owner_id === id) { 
            if (starIndex === 4) {
                item.icon = starIcon[starIndex];
                starIndex = 0;
            } else {
                item.icon = starIcon[starIndex];
                starIndex++;
            }
            userchannels.push(item);
        } 
    })

    localStorage.setItem("UserChannels", JSON.stringify(userchannels));
    //console.log("user channels: ", userchannels);
    return userchannels;
}

export default FindChannels;
