import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
    const { user, loading } = use(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;