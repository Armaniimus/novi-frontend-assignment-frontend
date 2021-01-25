import React from 'react';
import '../css/button.css';

const Button = ({className, callback, children, type}) => {
    if (callback === '') {
        callback = () => {
            return;
        }
    }

    return (
        <button onClick={callback} className={`btn ${className}`} type={type}>{children}</button>
    );
}

export default Button;