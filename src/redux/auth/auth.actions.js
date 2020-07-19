import { AuthActionTypes } from "./auth.types";
import AuthService from "../../services/authService";
import TokenTimer from '../../utils/tokenTimer';

export const loginStart = () => ({
    type: AuthActionTypes.LOGIN_START
});

export const loginSuccess = data => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: data
});

export const loginFail = error => ({
    type: AuthActionTypes.LOGIN_FAIL,
    payload: error
});

export const logoutSuccess = () => ({
    type: AuthActionTypes.LOGOUT_SUCCESS
});

export const login = emailEntered => async dispatch => {
    dispatch(loginStart());

    try {
        const { data: { authData: { token, expiresIn, firstName, lastName, email, userId } } } = await AuthService.login({ email: emailEntered });
        sessionStorage.setItem('token', token);
        dispatch(setAuthTimer(expiresIn));
        dispatch(loginSuccess({ expiresIn, user: {firstName, lastName, email, userId} }))
    } catch (error) {
        dispatch(loginFail(error));
    }
};

export const logout = () => dispatch => {
    sessionStorage.removeItem('token');
    const tokenTimer = TokenTimer.getTokenTimer();
    clearTimeout(tokenTimer);
    dispatch(logoutSuccess());
};

const setAuthTimer = (duration) => dispatch => {
    const tokenTimer = setTimeout(() => {
        dispatch(logout());
    }, duration * 1000);
    TokenTimer.setTokenTimer(tokenTimer);
};
