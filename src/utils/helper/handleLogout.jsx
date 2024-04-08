import { useNavigate } from "react-router-dom";

const HandleLogout = () => {
    const navigate = useNavigate();
    console.log("redirecting to login");
    navigate("/login");
}

export default HandleLogout;