import { AuthActionTypes } from "./auth.types";

const INITIAL_STATE = {
    isLogged: false,
    user: null,
    expiresIn: null,
    loading: false,
    error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AuthActionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged: true,
                expiresIn: action.payload.expiresIn,
                user: { ...action.payload.user }
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogged: false,
                expiresIn: null,
                user: null
            };
        default:
            return state;
    }
}

export default authReducer;