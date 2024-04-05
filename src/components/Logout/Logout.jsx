import { useNavigate } from "react-router-dom";

const handleLogout = () => {
    const navigate = useNavigate();
    console.log("redirecting to login");
    localStorage.setItem("headers", "");
    navigate("/login");
}

export default handleLogout;
