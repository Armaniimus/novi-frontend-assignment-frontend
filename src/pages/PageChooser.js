import React, {useState, useEffect} from 'react';
import Login from './Login';

const PageChooser = ( {accountLvl, requiredLvl, setGlobals, inputPage} ) => {
    const [page, setPage] = useState(<Login setGlobals={setGlobals} />);
    
    useEffect( () => {
        if (accountLvl < requiredLvl) {
            setPage(<Login setGlobals={setGlobals}/>);
        } else {
            setPage(inputPage);
        }
    }, [accountLvl, setPage, inputPage, requiredLvl, setGlobals]);

    return (
        <main className='container main'>
            {page}
        </main>
    );
}

export default PageChooser;