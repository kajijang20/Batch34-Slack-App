import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

//import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const PrivateRoute = ({ path, element }) => { // can declare outside -- use prop (isLoggedIn)
        return isLoggedIn ? element : <Navigate to="/login" />;
    }

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Outlet />, // dont declare sidebar too many times
        children: [
        {
            path: "/dashboard",
            element: <PrivateRoute 
                        path="/dashboard" 
                        //element={<> <Sidebar /> <Dashboard /> </>} 
                        element={<Dashboard />} 
                     />,
        },
        {
            path: "/login",
            element: <Login onLogin={handleLogin} />,
        },
        ],},
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
