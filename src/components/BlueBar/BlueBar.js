import React from 'react';
import RawStyles from './BlueBar.module.css';

const BlueBar = ({children}) => {
    return (
        <div className={ RawStyles['blue-bar'] }>
            <span>{children}</span>
        </div>
    );
}

export default BlueBar;