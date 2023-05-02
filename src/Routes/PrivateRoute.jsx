import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div></div>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;