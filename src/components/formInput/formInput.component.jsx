import React from 'react';

import './formInput.styles.scss';

const FormInput = ({ label, hint, onChange, ...otherProps }) => {
    return (
        <div className="form-group">
            <input className="form-input" onChange={onChange} {...otherProps} />
            {
                label &&
                (<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </label>)

            }
            {hint && <span><i>{hint}</i></span>}
        </div>
    );
};

export default FormInput;