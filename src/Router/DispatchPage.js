import React, {useState, useEffect} from 'react';
import Login from '../pages/Login';

const navEvent = new PopStateEvent('popstate');

const DispatchPage = ( {accountLvl, requiredLvl, setGlobals, inputPage} ) => {
    const [page, setPage] = useState(<Login setGlobals={setGlobals} />);
    const [debounceDispatch, setDebounceDispatch] = useState(0);


    useEffect( () => {
        clearTimeout(debounceDispatch)
        setDebounceDispatch (
            setTimeout( () => {
                if (accountLvl === 0 && window.location.pathname !== '/') {
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(navEvent);
        
                } else if (accountLvl === 0 && window.location.pathname === '/') {
                    setPage(<Login setGlobals={setGlobals} />);
                    console.log('navigation', 'set Loginpage', accountLvl);

                } else if (accountLvl < requiredLvl) {
                    window.history.pushState({}, '', '/overview');
                    window.dispatchEvent(navEvent);
                    console.info('navigation', 'too low accountlvl');
                } else { 
                    setPage(inputPage);
                    console.log('navigation', 'default page', accountLvl);
                }
            } , 50)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountLvl, inputPage, requiredLvl]);

    return (
        <main className='container main'>
            {page}
        </main>
    );
}

export default DispatchPage;