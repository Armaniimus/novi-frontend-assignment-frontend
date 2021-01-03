import React, {useState, useEffect} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Overview from '../pages/Overview';
import Login from '../pages/Login';
import FourOFour from '../pages/FourOFour';
import PageChooser from '../pages/PageChooser';

const Router = () => {
    const [accountLvl, setAccountLvl] = useState(0);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [renderedRoute, setRenderedRoute] = useState(null);

    const onLogin = () => {
        setAccountLvl();
    }

    const Routes = [

        {
            path: '/',
            page: <Overview accountLvl={accountLvl}/>,
            requiredLvl: 1
        },
        {
            path: '/login',
            page: <Login accountLvl={accountLvl}/>,
            requiredLvl: 0
        },
        {
            path: '/404',
            page: <FourOFour accountLvl={accountLvl}/>,
            requiredLvl: 0
        },
    ];
    
    const handleFourOFour = () => {
        const navEvent = new PopStateEvent('popstate');
        window.history.pushState({}, '', '/404');
        window.dispatchEvent(navEvent);
    }
    
    const handleRegular = (page, required) => {
        setRenderedRoute(
            <React.Fragment>
                <Header />
                <PageChooser accountLvl={accountLvl} requiredLvl={required} inputPage={page} />
                <Footer />
            </React.Fragment>
        );
    }

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
        let fourOFour = true;
        Routes.map( ({path}) => {
            if (window.location.pathname === path) {
                fourOFour = false;
            }
        });
        
        if (fourOFour) {
            handleFourOFour();
        } else {
            Routes.map( ({path, page, requiredLvl }) => {
                if ( path === currentPath ) {
                    handleRegular(page, requiredLvl);
                }
            });          
        }
    }, [currentPath]);

    return (
        <React.Fragment>
            {renderedRoute}
        </React.Fragment>
    );
}

export default Router;