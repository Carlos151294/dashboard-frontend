import React from 'react'
import './container.styles.scss';

const Container = ({ children, className }) => {
    return (
        className ? (<div className={"main-container " + className} > {children}</div>)
            : (<div className="main-container" > {children}</div>)
    );
}

export default Container;
