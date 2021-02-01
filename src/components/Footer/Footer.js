import React from 'react';
import RawStyles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={RawStyles['footer']}>
            <div className={RawStyles['copyright-line']}>&copy;De Hoopkaap</div>
        </footer>
    );
}

export default Footer;