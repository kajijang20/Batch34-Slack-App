import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DataSignup, DataLogin } from "../../utils/Api";
import { SiteLogo } from "../../assets/icons";

import { handleCreateUser } from "../../components/CreateUser.jsx/CreateUser";

const Login = ({ onLogin }) => {
    const [inputLogin, setInputLogin] = useState({
        email: "",
        password: "",
    });

    const [inputSignup, setInputSignup] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [isLoginForm, setIsLoginForm] = useState(true);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const datalogin = await DataLogin(inputLogin);
        console.log("data: ", datalogin);
        if (datalogin.data.id) {
            onLogin();
            navigate("/dashboard");
            toast.success("Welcome to the Star Stream!");
            setInputLogin({ email: "", password: ""});
        } else {
            toast.error("Your email or password is wrong.")
        }  
    }

    const handleSignup = async () => {
        const isValidUser = handleCreateUser(inputSignup);
        if (isValidUser) {
            const datasignup = await DataSignup(inputSignup);
            if (datasignup) {
                toast.success("Account creation successful!");
                setInputSignup({ email: "", password: "", password_confirmation: "" });
            } else {
                toast.error("The email already exists.");
            }
        }
    };

    const handleKeyPressLogin = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleKeyPressSignup = (e) => {
        if (e.key === "Enter") {
            handleSignup();
        }
    };

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
        setInputLogin({ email: "", password: ""});
        setInputSignup({ email: "", password: "", password_confirmation: "" });
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (isLoginForm) {
          setInputLogin({
            ...inputLogin,
            [name]: value,
          });
        } else {
          setInputSignup({
            ...inputSignup,
            [name]: value,
          });
        }
    };
    
    return (
        <div className="login">
            <ToastContainer />
            <div className="login-main">
                <div className="login-logo"> 
                    <p className="login-logo-img"> <SiteLogo /> </p>
                    <p className="login-logo-txt"> Star Stream </p>
                </div>

                <h6 className="login-details-header">
                    <span> Log In </span>
                    <span> Sign Up </span>
                </h6>
                
                <div className="toggle">
                    <input type="checkbox" onClick={toggleForm} id="toggle"/>
                    <label htmlFor="toggle"></label>
                </div>

                <div className={`login-wrap ${isLoginForm ? "login-wrap-front" : "login-wrap-back"}`}>
          {isLoginForm ? (
            <div className="login-wrap">
              <div className="login-wrap-front">
                <div className="login-details">
                  <h2 className="login-title"> Login </h2>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={inputLogin.email}
                    className="login-email-txt"
                    autoComplete="off"
                    onChange={handleInput}
                    onKeyPress={handleKeyPressLogin}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={inputLogin.password}
                    className="login-password-txt"
                    onChange={handleInput}
                    onKeyPress={handleKeyPressLogin}
                  />
                  <button onClick={handleLogin} className="login-btn">
                    Login
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="login-wrap">
              <div className="login-wrap-back">
                <div className="signup-details">
                  <h2 className="signup-title"> Sign-up </h2>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={inputSignup.email}
                    className="signup-email-txt"
                    autoComplete="off"
                    onChange={handleInput}
                    onKeyPress={handleKeyPressSignup}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={inputSignup.password}
                    className="signup-password-txt"
                    onChange={handleInput}
                    onKeyPress={handleKeyPressSignup}
                  />
                  <input
                    type="password"
                    name="password_confirmation"
                    placeholder="retype password"
                    value={inputSignup.password_confirmation}
                    className="signup-password-txt"
                    onChange={handleInput}
                    onKeyPress={handleKeyPressSignup}
                  />
                  <button onClick={handleSignup} className="signup-btn">
                    Sign-up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Login;