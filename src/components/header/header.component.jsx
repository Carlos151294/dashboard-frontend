import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../redux/auth/auth.actions';
import './header.styles.scss';

const Header = () => {
    const dispatch = useDispatch();
    const { isLogged } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="header-container">
            <Link className="brand" to="dashboard">
                <img className="logo" src={require('../../assets/oyster-logo.png')} alt="LOGO" />
                <div className="brandname nav-option">Dashboard</div>
            </Link>
            <div className="nav-options">
                <div className="nav-option">
                    <Link to="contact">Contact</Link>
                </div>
                {!isLogged &&
                    <div className="nav-option">
                        <Link to="login">Login</Link>
                    </div>
                }
                {isLogged &&
                    <div className="nav-option">
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;
