import getChannelMems from "./getChannelMems";

const getDMUsers = async ({ channels }) => {
    let sortChannelUsers = [];
    
    await Promise.all(channels.map(async (channel) => {
        const getmembers = await getChannelMems({ id: channel.id });
        
        getmembers.forEach((member) => {
            sortChannelUsers.push(member.user_id);
        });
    }));

    let starIndex = 0;
    sortChannelUsers = sortChannelUsers.sort((a, b) => a - b)
        .filter((value, index) => sortChannelUsers.indexOf(value) === index);

    return sortChannelUsers;
}
export default getDMUsers;
