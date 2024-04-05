import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Homepage from "../pages/Homepage/Homepage";
import Friendspage from "../pages/Friendspage/Friendspage";
import Messagespage from "../pages/Messages/Messages";
import Login from "../pages/Login/Login";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const PrivateRoute = ({ path, element }) => {
        return isLoggedIn ? element : <Navigate to="/login" />;
    }

    const router = createBrowserRouter([
        {
            path: "/homepage",
            element: <PrivateRoute 
                        path="/homepage"
                        element={<> <Sidebar /> <Homepage /> </>}
                     />,
        },
        {
            path: "/friends",
            element: <PrivateRoute 
                        path="/friends"
                        element={<> <Sidebar /> <Friendspage /> </>}
                     />,
        },
        {
            path: "/messages",
            element: <PrivateRoute 
                        path="/messages"
                        element={<> <Sidebar /> <Messagespage /> </>}
                     />,
        },
        {
            path: "/login",
            element: <Login onLogin={handleLogin} />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
