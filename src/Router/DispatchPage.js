import React, {useState, useEffect} from 'react';
import Globals from '../functions/Globals';

import Login from '../pages/Login';

const navEvent = new PopStateEvent('popstate');

const DispatchPage = ( {requiredLvl, inputPage} ) => {
    const [page, setPage] = useState(<Login />);
    const [debounceDispatch, setDebounceDispatch] = useState(0);
    const pageConst = Globals.pageConst;


    useEffect( () => {
        clearTimeout(debounceDispatch)
        setDebounceDispatch (
            setTimeout( () => {
                const accountLvl = Globals.getAccountLvl();
                
                if (accountLvl === 0 && window.location.pathname !== '/') {
                    window.history.pushState({}, '', `${pageConst}/`);
                    window.dispatchEvent(navEvent);
        
                } else if (accountLvl === 0 && window.location.pathname === '/') {
                    setPage(<Login />);
                    console.log('navigation', 'set Loginpage', accountLvl);

                } else if (accountLvl < requiredLvl) {
                    window.history.pushState({}, '', `${pageConst}/overview`);
                    window.dispatchEvent(navEvent);
                    console.info('navigation', 'too low accountlvl');
                } else { 
                    setPage(inputPage);
                    console.log('navigation', 'default page', accountLvl);
                }
            } , 50)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputPage, requiredLvl]);

    return (
        <main className='main'>
            {page}
        </main>
    );
}

export default DispatchPage;