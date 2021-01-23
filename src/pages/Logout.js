import { useEffect } from 'react';

const Logout = ({setGlobals}) => {
    useEffect( () => {
        setGlobals.setToken(0);
        setGlobals.setAccountLvl(0);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
}

export default Logout;