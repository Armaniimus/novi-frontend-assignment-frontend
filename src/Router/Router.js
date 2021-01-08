import React, {useState, useEffect} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Overview from '../pages/Overview';
import Login from '../pages/Login';
import FourOFour from '../pages/FourOFour';
import PageChooser from '../pages/PageChooser';

const Router = () => {
    const [token, setToken] = useState(0);
    const [accountLvl, setAccountLvl] = useState(0);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [renderedRoute, setRenderedRoute] = useState(null);

    useEffect( () => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        
        window.addEventListener('popstate', onLocationChange );
        window.addEventListener('hashchange', onLocationChange );

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    useEffect( () => {
        const setGlobals = {
            setAccountLvl   : setAccountLvl,
            setToken        : setToken
        }
    
        const routes = [
            {
                path: '/',
                page: <Overview token={token}/>,
                requiredLvl: 1
            },
            {
                path: '/404',
                page: <FourOFour />,
                requiredLvl: 0
            },
        ];

        let fourOFour = true;
        routes.map( ({path}) => {
            if (window.location.pathname === path) {
                fourOFour = false;
            }
            return null;
        });
        
        if (fourOFour) {
            const navEvent = new PopStateEvent('popstate');
            window.history.pushState({}, '', '/404');
            window.dispatchEvent(navEvent);
        } else {
            routes.map( ({path, page, requiredLvl }) => {
                if ( path === currentPath ) {
                    setRenderedRoute(
                        <React.Fragment>
                            <Header />
                            <PageChooser accountLvl={accountLvl} requiredLvl={requiredLvl} setGlobals={setGlobals} inputPage={page} />
                            <Footer />
                        </React.Fragment>
                    );
                }
                return null;
            });          
        }
    }, [currentPath, accountLvl, token]);

    return (
        <React.Fragment>
            {renderedRoute}
        </React.Fragment>
    );
}

export default Router;