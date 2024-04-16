import { useNavigate } from "react-router-dom";

const useHandleLogout = () => {
    const navigate = useNavigate();
    console.log("redirecting to login");
    navigate("/login");
}

export default useHandleLogout;