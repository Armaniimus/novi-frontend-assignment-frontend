import React from 'react';

import RawStyles from './Link.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const Link = ({ className, href, children }) => {
    const navEvent = new PopStateEvent('popstate');

    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', href);
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} href={href} className={styles.get(className)}>
            {children}
        </a>
    );
}

export default Link;