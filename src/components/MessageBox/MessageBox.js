import React from 'react';
import RawStyles from './MessageBox.module.css';

const MessageBox = ({children}) => {
    if (children === '') {
        return <React.Fragment/>
    } else {
        return <div className={RawStyles.messageBox}>{children}</div>;
    }
}

export default MessageBox