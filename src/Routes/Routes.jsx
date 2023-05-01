import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/signup',
                element : <Signup/>
            }
        ]
    }
])

export default router;