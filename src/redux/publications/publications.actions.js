import { PublicationsActionTypes } from "./publications.types";
import { getPublications } from "../../services/publicationsService";

export const fetchPublicationsStart = () => ({
    type: PublicationsActionTypes.FETCH_PUBLICATIONS_START
});

export const fetchPublicationsSuccess = publications => ({
    type: PublicationsActionTypes.FETCH_PUBLICATIONS_SUCCESS,
    payload: publications
});

export const fetchPublicationsFail = error => ({
    type: PublicationsActionTypes.FETCH_PUBLICATIONS_FAIL,
    payload: error
});

export const fetchPublications = () => async dispatch => {
    dispatch(fetchPublicationsStart());

    try {
        const { data: { publications } } = await getPublications();
        dispatch(fetchPublicationsSuccess(publications));
    } catch(error) {
        dispatch(fetchPublicationsFail(error))
    }
};
