import React from 'react';

import './button.styles.scss';

const Button = ({ children, ...props }) => (
  <button className="button-container" {...props}>
    {children}
  </button>
);

export default Button;
