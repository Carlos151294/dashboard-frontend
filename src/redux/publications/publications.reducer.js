import { PublicationsActionTypes } from './publications.types';

const INITIAL_STATE = {
    publications: [],
    loading: false,
    success: null,
    error: null
}

const publicationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PublicationsActionTypes.FETCH_PUBLICATIONS_START:
            return {
                ...state,
                loading: true,
                success: null,
                error: null
            };
        case PublicationsActionTypes.FETCH_PUBLICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                publications: action.payload
            };
        case PublicationsActionTypes.FETCH_PUBLICATIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default publicationsReducer;