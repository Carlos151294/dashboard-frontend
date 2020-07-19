import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import publicationsReducer from './publications/publications.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    publications: publicationsReducer
});

export default rootReducer;