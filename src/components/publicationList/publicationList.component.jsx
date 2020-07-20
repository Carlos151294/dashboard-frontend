import React from 'react'
import { useSelector } from 'react-redux';

import './publicationList.styles.scss';

const PublicationList = () => {
    const { publications } = useSelector(state => state.publications);

    return (
        <div>
            <h1>List of available books</h1>
            {
                publications.map((item) => (
                    <div className="book-item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default PublicationList;
