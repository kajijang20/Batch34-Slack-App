import { DataChannelDetails } from "../Api";
import { getHeaders } from "./getHeaders";

const getChannelMems = async ({ id }) => {
    const headers = getHeaders();
    const datamembers = await DataChannelDetails({id: id});
    return (datamembers.data.channel_members);
}

export default getChannelMems;
