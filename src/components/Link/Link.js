import React from 'react';

// eslint-disable-next-line
import RawStyles from './Link.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const pageConst = "/projectFiles/projecten/novi-frontend";

const Link = ({ className, href, children }) => {
    className = (className === undefined ? '':className);

    const navEvent = new PopStateEvent('popstate');

    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', `${href}`);
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} href={href} className={styles.get(className)}>
            {children}
        </a>
    );
}

export default Link;