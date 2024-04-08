import { DataLogin } from "../Api";

const userId = async (inputLogin) => {
    const data = await DataLogin(inputLogin);
    console.log("data: ", data);
    if (data.data === undefined) {
        return false;
    } else {
        return data.data.id;
    }
}

export default userId;
