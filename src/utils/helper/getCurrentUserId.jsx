import { DataLogin } from "../Api";

const userId = async (inputLogin) => {
    const data = await DataLogin(inputLogin);
    //console.log("data: ", data);
    return data.data === undefined ? false : data.data.id;
}

export default userId;
