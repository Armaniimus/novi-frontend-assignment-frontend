import React from 'react';

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
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
}

export default Link;