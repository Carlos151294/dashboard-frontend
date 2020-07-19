import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth.actions';
import './loginpage.styles.scss';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = async () => {
        await dispatch(login());
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;