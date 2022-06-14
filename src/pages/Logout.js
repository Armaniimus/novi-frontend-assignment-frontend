import { useEffect } from 'react';
import Globals from '../functions/Globals';
import HandleCookie from '../functions/HandleCookie';

const pageConst = Globals.pageConst;

const Logout = () => {
    useEffect( () => {
        Globals.setToken('');
        Globals.setAccountLvl(0);
        HandleCookie.destroyCookie();
        Globals.reload();
    
        const navEvent = new PopStateEvent('popstate');
        window.history.pushState({}, '', `${pageConst}/`);
        window.dispatchEvent(navEvent);

        // eslint-disable-next-line
    }, []);
    return null;
}

export default Logout;