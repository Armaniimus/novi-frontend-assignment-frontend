import React, { useEffect, useState } from 'react';
import Globals from '../functions/Globals';

import Login from './Login';
import Overview from './Overview';

const Home = () => {
    const accountLvl = Globals.getAccountLvl();

    const [renderedElement, setRenderedElement] = useState( <React.Fragment/> );
    
    useEffect( () => {
        let element = null;
        if      (accountLvl === 0)              { element = <Login />; }
        else if (Math.floor(accountLvl) > 0)    { element = <Overview/>; }

        setRenderedElement( element );
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountLvl]);
    
    return renderedElement;
}

 export default Home;