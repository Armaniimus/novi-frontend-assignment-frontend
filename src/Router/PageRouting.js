import React, {useState, useEffect} from 'react';
import Login from '../pages/Login';

const navEvent = new PopStateEvent('popstate');

const PageRouting = ( {accountLvl, requiredLvl, setGlobals, inputPage} ) => {
    const [page, setPage] = useState(<Login setGlobals={setGlobals} />);

    useEffect( () => {
        window.history.pushState({}, '', '/overview');
        window.dispatchEvent(navEvent);
    }, [accountLvl] );

    useEffect( () => {
        if (accountLvl < requiredLvl) {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(navEvent);
        } else { 
            setPage(inputPage);
        }
    }, [accountLvl, setPage, inputPage, requiredLvl]);

    return (
        <main className='container main'>
            {page}
        </main>
    );
}

export default PageRouting;