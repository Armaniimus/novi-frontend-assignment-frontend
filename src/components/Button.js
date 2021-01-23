import React from 'react';
import '../css/button.css';

const Button = ({className, callback, children}) => {
    if (callback === '') {
        callback = () => {
            return;
        }
    }

    return (
        <button onClick={callback} className={`btn ${className}`}>{children}</button>
    );
    
    
}

export default Button;