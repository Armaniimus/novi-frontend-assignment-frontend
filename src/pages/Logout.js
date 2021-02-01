import { useEffect } from 'react';
import Globals from '../functions/Globals';

const Logout = () => {
    useEffect( () => {
        Globals.setToken('');
        Globals.setAccountLvl(0);
        Globals.reload();
    
        // eslint-disable-next-line
    }, []);
    return null;
}

export default Logout;