import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleCreateEmail = (email) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailFormat)) {
        toast.error("Please enter a valid email address.");
        return null;
    }
    return email;
};

const handleCreatePassword = (password) => {
    const passwordFormat = /^[a-zA-Z0-9]{8,12}$/;
    if (!password.match(passwordFormat)) {
        toast.error("Password must be between 8 to 12 characters and only alphanumeric.");
        return null;
    }
    return password;
};

const handleRePassword = (repassword, password) => {
    if (repassword !== password) {
        toast.error("Password and re-type password are not the same.");
        return null;
    }
    return repassword;
}

export const handleCreateUser = (inputSignup) => {
    const validEmail = handleCreateEmail(inputSignup.email);
    const validPassword = handleCreatePassword(inputSignup.password);
    const validRePassword = handleRePassword(inputSignup.password_confirmation, validPassword);

    if (!validEmail || !validPassword || !validRePassword) {
        return false;
    }
    return true;
}
