import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import MainContent from "../Components/MainContent";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <MainContent />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ],
        
    },
    {
        
            path: '*',
            element: <Error />
        
    }
])

export default router;