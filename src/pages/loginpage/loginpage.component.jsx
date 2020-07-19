import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth.actions';
import './loginpage.styles.scss';
import Button from '../../components/button/button.component';
import FormInput from '../../components/formInput/formInput.component';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        dispatch(login(email));
    };

    return (
        <div>
            <FormInput
                label="Email"
                hint="You can use oyster@gmail.com for testing this app"
                onChange={event => setEmail(event.target.value.trim())}
                value={email}
            />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginPage;