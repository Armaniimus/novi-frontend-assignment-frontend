import React, { useEffect, useState } from 'react';
import Login from './Login';
import Overview from './Overview';

const Home = ({token, accountLvl, setGlobals}) => {
    const [renderedElement, setRenderedElement] = useState( <React.Fragment/> );
    
    useEffect( () => {
        let element = null;
        if      (accountLvl === 0)              { element = <Login setGlobals={setGlobals}/>; }
        else if (Math.floor(accountLvl) > 0)    { element = <Overview token={token}/>; }

        setRenderedElement( element );
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountLvl, token]);
    
    return renderedElement;
}

 export default Home;