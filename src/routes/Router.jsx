import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
//import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/",
                element: <Register />
            },
        ]
    },
]);

export default router;