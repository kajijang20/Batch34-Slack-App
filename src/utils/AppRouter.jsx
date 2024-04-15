import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { getHeaders } from "./helper/getHeaders";
import Homepage from "../pages/Homepage/Homepage";
import Sidebar from "../components/Sidebar/Sidebar";
import Channelspage from "../pages/Channelspage/Channelspage";
import Messagespage from "../pages/Messagespage/Messagespage";
import Login from "../pages/Login/Login";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(getHeaders());

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const PrivateRoute = ({ path, element }) => {
        return isLoggedIn ? element : <Navigate to="/login" />;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/channels",
            element: <PrivateRoute 
                        path="/channels"
                        element={<> <Sidebar /> <Channelspage /> </>}
                     />,
            children: [
                {
                    path: ":channel_id",
                    element: <> <Sidebar /> <Channelspage /> </>,
                },
            ],
        },
        {
            path: "/messages",
            element: <PrivateRoute 
                        path="/messages"
                        element={<> <Sidebar /> <Messagespage /> </>}
                     />,
            children: [
                {
                    path: ":user_id",
                    element: <> <Sidebar /> <Messagespage /> </>,
                },
            ],
        },
        {
            path: "/login",
            element: <Login onLogin={handleLogin} />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
