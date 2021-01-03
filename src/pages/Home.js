import React, {useState, useEffect} from 'react';
import Login from './Login';
import Overview from './Overview';

const Home = ({accountLvl}) => {
    const [page, setPage] = useState(<Login />);

    useEffect( () => {
        if (accountLvl > 0) {
            setPage(<Overview />);
        } else {
            setPage(<Login />);
        }
    }, [accountLvl]);

    return (
        <div>
            {page}
        </div>
    );
}

export default Home;