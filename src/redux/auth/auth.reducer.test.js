import { AuthActionTypes } from './auth.types';
import authReducer from './auth.reducer';

const initialState = {
    isLogged: false,
    user: null,
    expiresIn: null,
    loading: false,
    error: null
};

it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
});

describe('Login', () => {
    it('should handle LOGIN_START', () => {
        expect(authReducer(initialState, {
            type: AuthActionTypes.LOGIN_START
        })).toEqual({
            ...initialState,
            loading: true,
            error: null
        });
    });

    it('should handle LOGIN_FAIL', () => {
        expect(authReducer(initialState, {
            type: AuthActionTypes.LOGIN_FAIL,
            payload: 'Authentication error'
        })).toEqual({
            ...initialState,
            error: 'Authentication error',
            loading: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(authReducer(initialState, {
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: { expiresIn: 3600, user: {} }
        })).toEqual({
            ...initialState,
            isLogged: true,
            expiresIn: 3600,
            user: {}
        });
    });
});

describe('Logout', () => {

    it('should handle LOGOUT_SUCCESS', () => {
        expect(authReducer(initialState, {
            type: AuthActionTypes.LOGOUT_SUCCESS
        })).toEqual({
            ...initialState,
            isLogged: false,
            expiresIn: null,
            user: null
        });
    });
});