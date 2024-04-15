import { getHeaders } from "./helper/getHeaders";

const base_url = "http://206.189.91.54/api/v1";

export const DataSignup = async (input) => {
    const response = await fetch(`${base_url}/auth/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("cannot create user.", response.statusText);
    }
}

export const DataLogin = async ({email, password}) => {
    const response = await fetch(`${base_url}/auth/sign_in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const headers = {
        "access-token": response.headers.get("access-token"),
        "client": response.headers.get("client"),
        "expiry": response.headers.get("expiry"),
        "uid": response.headers.get("uid"),
    }
    localStorage.setItem("headers", JSON.stringify(headers));
    const data = await response.json();
    return data;
}

export const DataSendMessage = async ({ receiver_id, receiver_class, body }) => {
    const response = await fetch(`${base_url}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
        body: JSON.stringify({ receiver_id, receiver_class, body }),
    });
    const data = await response.json();
    return data;
}

export const DataRetrieveMessage = async ({ receiver_id, receiver_class }) => {
    const response = await fetch(`${base_url}/messages?receiver_id=${receiver_id}&receiver_class=${receiver_class}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
    });
    const data = await response.json();
    return data;
}

export const DataRecentMessage = async () => {
    const response = await fetch(`${base_url}/users/recent`, {
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
    });
    const data = await response.json();
    return data;
}

export const DataCreateChannel = async ({ name, user_ids }) => {
    const response = await fetch(`${base_url}/channels`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
        body: JSON.stringify({ name, user_ids }),
    });
    const data = await response.json();
    return data;
}

export const DataAllUserschannels = async () => {
    const response = await fetch(`${base_url}/channels`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
    });
    const data = await response.json();
    return data;
}

export const DataChannelDetails = async ({ id }) => {
    const response = await fetch(`${base_url}/channels/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
    });
    const data = await response.json();
    return data;
}

export const DataAddMem = async ({ id, member_id }) => {
    const response = await fetch(`${base_url}/channel/add_member`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
        body: JSON.stringify({ id, member_id }),
    });
    const data = await response.json();
    return data;
}

export const DataAllUsers = async () => {
    const response = await fetch(`${base_url}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...getHeaders(),
        },
    });
    const data = await response.json();
    return data;
}
