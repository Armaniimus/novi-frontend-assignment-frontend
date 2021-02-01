import React from 'react';

import RawStyles from './Button.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const Button = ({className, callback, children, type}) => {
    const classNames = styles.get(className + ' btn');

    if (callback === '') {
        callback = () => {
            return;
        }
    }

    return (
        <button onClick={callback} className={classNames} type={type}>{children}</button>
    );
}

export default Button;