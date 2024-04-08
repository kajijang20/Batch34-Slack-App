import { DataAllUserschannels, DataChannelDetails } from "../../utils/Api";
import { StarIcon1, StarIcon2, StarIcon3, StarIcon4, StarIcon5 } from "../../assets/icons";

const FindChannels = async () => {
    try {

        const starIcon = [<StarIcon1 />, <StarIcon2 />, <StarIcon3 />, <StarIcon4 />, <StarIcon5 />];
        const id = parseInt(localStorage.getItem("UserId"));
        // SHOULD PARSE INSTEAD
        const headers = JSON.parse(localStorage.getItem("headers"));
        const userchannels = [];

        const datausers = await DataAllUserschannels(headers);

        if (datausers.hasOwnProperty("errors")) {
            return []
        }
        const channels = datausers.data;

        const channelDetailPromises = channels.map(channel => DataChannelDetails({ id: channel.id }));
        const channelDetails = await Promise.all(channelDetailPromises);

        let starIndex = 0;
        channelDetails.forEach(channelDetail => {
            const members = channelDetail.data.channel_members;
            const isUserMember = members.some(member => member.user_id === id);

            if (isUserMember) {
                const link = "/channels/" + channelDetail.data.id;
                const icon = starIcon[starIndex];
                userchannels.push({ ...channelDetail, link, icon });

                starIndex = (starIndex + 1) % 5;
            }
        });

        localStorage.setItem("UserChannels", JSON.stringify(userchannels));
        console.log("user channels: ", userchannels);
        return userchannels;
    } catch (error) {
        console.error(error)

    }
}

export default FindChannels;
