import React, {useState, useEffect} from 'react';
import Login from './Login';

const PageChooser = ( {accountLvl, requiredLvl, inputPage} ) => {
    const [page, setPage] = useState(<Login />);
    
    useEffect( () => {
        if (accountLvl < requiredLvl) {
            setPage(<Login />);
        } else {
            setPage(inputPage);
        }
    }, [requiredLvl]);

    return (
        <React.Fragment>
            {page}
            {/* <div>{accountLvl}</div> */}
        </React.Fragment>
    );
}

export default PageChooser;