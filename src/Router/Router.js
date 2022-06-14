import React, {useState, useEffect} from 'react';
import Compare from '../functions/Compare';
import Globals from '../functions/Globals';

import DispatchPage from './DispatchPage';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Overview from '../pages/Overview';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import FourOFour from '../pages/FourOFour';
import LiedBeheer from '../pages/LiedBeheer';
import LiedBeheerSpecific from '../pages/LiedBeheerSpecific';
import AccountBeheer from '../pages/AccountBeheer';
import OverviewSpecific from '../pages/OverviewSpecific';

const pageConst = Globals.pageConst;

const routes = [
    {
        path: `${pageConst}/`,
        page: <Home/>,
        requiredLvl: 0
    },
    {
        path: `${pageConst}/logout`,
        page: <Logout/>,
        requiredLvl: 1
    },
    {
        path: `${pageConst}/overview`,
        page: <Overview/>,
        requiredLvl: 1
    },
    {
        path: `${pageConst}/overview/{id}`,
        page: <OverviewSpecific/>,
        requiredLvl: 1
    },
    {
        path: `${pageConst}/accountbeheer`,
        page: <AccountBeheer/>,
        requiredLvl: 2
    },
    {
        path: `${pageConst}/liedbeheer`,
        page: <LiedBeheer />,
        requiredLvl: 2
    },
    {
        path: `${pageConst}/liedbeheer/{id}`,
        page: <LiedBeheerSpecific/>,
        requiredLvl: 2
    },
    {
        path: `${pageConst}/404`,
        page: <FourOFour />,
        requiredLvl: 0
    },
    {
        path: `${pageConst}/login`,
        page: <Login />,
        requiredLvl: 0
    }
];

const checkMatchingPath = (path, currentPath) => {
    const returnObj = {testResult: null, newUrlVars: {} }
    if (path === currentPath) {
        returnObj.testResult = true;
        return returnObj;
    }

    const search1 = path.search('{');
    if ( search1 !== -1) {
        const pathArray = path.split('/');
        const currentPathArray = currentPath.split('/');

        if (pathArray.length === currentPathArray.length) {

            for( let i=0; i<pathArray.length; i++) {
                const search2 = pathArray[i].search('{');
                const search3 = pathArray[i].search('}');

                if (search2 !== -1 && search3 !== -1) {
                    const newPathItem = pathArray[i].slice(1, -1);
                    returnObj.newUrlVars[newPathItem] = currentPathArray[i];
                    continue;

                } else if (pathArray[i] !== currentPathArray[i]) {
                    returnObj.testResult = false;
                    return returnObj;
                }
            }
            returnObj.testResult = true;

            return returnObj;
        } 
    }
    returnObj.testResult = false;
    return returnObj;
}

const Router = () => {
    const [debounceDispatch, setDebounceDispatch] = useState(0);
    const [debounceRouteCheck, setDebounceRouteCheck] = useState(0);

    const [reload, setReload] = useState(0);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [routeParams, setRouteParams] = useState({page: null, requiredLvl: 0});
    const [renderedDispatchPage, setRenderedDispatchPage] = useState(null);
    

    //set a default value
    useEffect( () => {
        Globals.setReloadFunc( setReload );        
    }, []);

    useEffect( () => {
        routeCheck();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    //setup page reload
    useEffect( () => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        
        window.addEventListener('popstate', onLocationChange );
        window.addEventListener('hashchange', onLocationChange );

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [currentPath, reload]);

    const routeCheck = () => {
        let fourOfour = true;
        routes.map( ({path, page, requiredLvl }) => {
            const {testResult, newUrlVars} = checkMatchingPath(path, currentPath);

            if (testResult) {
                fourOfour = false;
                                
                if ( Compare.compare(Globals.getUrlVars(), newUrlVars) === false ) {
                    Globals.setUrlVars(newUrlVars);
                    setRouteParams( {page: page, requiredLvl: requiredLvl} );

                } else {
                    setRouteParams( {page: page, requiredLvl: requiredLvl} );
                }
            }
            return null;
        });

        if (fourOfour) {
            const navEvent = new PopStateEvent('popstate');
            window.history.pushState({}, '', `${pageConst}/`);
            window.dispatchEvent(navEvent);
            console.info('navigation','404');
        }
    }

    useEffect( () => {
        clearTimeout(debounceRouteCheck);
        setDebounceRouteCheck( 
            setTimeout ( () => {
                routeCheck();
            } , 50)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath, reload]);

    useEffect( () => {
        clearTimeout(debounceDispatch);
        setDebounceDispatch( 
            setTimeout(() => {
                setRenderedDispatchPage(<DispatchPage requiredLvl={routeParams.requiredLvl} inputPage={routeParams.page} />);
            }, 100)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routeParams, reload]);

    return (
        <React.Fragment>
            <Header/>
            {renderedDispatchPage}
            <Footer />
        </React.Fragment>
    );
}

export default Router;