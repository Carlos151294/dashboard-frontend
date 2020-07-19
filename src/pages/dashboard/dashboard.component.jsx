import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PublicationList from '../../components/publicationList/publicationList.component';
import { fetchPublications } from '../../redux/publications/publications.actions';

import './dashboard.styles.scss';

const DashboardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPublications())
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <PublicationList />
        </div>
    );
}

export default DashboardPage;