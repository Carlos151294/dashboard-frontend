import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth.actions';
import './loginpage.styles.scss';
import Button from '../../components/button/button.component';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        dispatch(login(email));
    };

    return (
        <div>
            <div className="form-group">
                <input className="form-input" onChange={event => setEmail(event.target.value)} value={email} />
                <label className={`form-input-label ${email.length ? 'shrink' : ''}`}>
                    Email
                </label>
            </div>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginPage;