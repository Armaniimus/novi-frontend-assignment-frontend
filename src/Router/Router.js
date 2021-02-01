import React, {useState, useEffect} from 'react';
import Compare from '../functions/Compare';

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
    const [debounceRoutes, setDebounceRoutes] = useState(0);
    const [debounceRouteCheck, setDebounceRouteCheck] = useState(0);

    const [routes, setRoutes] = useState([]);
    const [token, setToken] = useState(0);
    const [accountLvl, setAccountLvl] = useState(0);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [urlVars, setUrlVars] = useState({});
    const [routeParams, setRouteParams] = useState({page: null, requiredLvl: 0});
    const [renderedDispatchPage, setRenderedDispatchPage] = useState(null);

    const setGlobals = {
        setAccountLvl   : setAccountLvl,
        setToken        : setToken
    }

    //set a default value
    useEffect( () => {
        setRouteParams({
            page: <Login setGlobals={setGlobals}/>, 
            requiredLvl: 0
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect( () => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        
        window.addEventListener('popstate', onLocationChange );
        window.addEventListener('hashchange', onLocationChange );

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [currentPath, accountLvl, token, urlVars]);


    useEffect( () => {
        clearTimeout(debounceRoutes);
        setDebounceRoutes(
            setTimeout(() => {
                setRoutes([
                    {
                        path: '/',
                        page: <Home token={token} accountLvl={accountLvl} setGlobals={setGlobals}/>,
                        requiredLvl: 0
                    },
                    {
                        path: '/logout',
                        page: <Logout setGlobals={setGlobals}/>,
                        requiredLvl: 1
                    },
                    {
                        path: '/overview',
                        page: <Overview token={token}/>,
                        requiredLvl: 1
                    },
                    {
                        path: '/overview/{id}',
                        page: <OverviewSpecific token={token} urlVars={urlVars}/>,
                        requiredLvl: 1
                    },
                    {
                        path: '/accountbeheer',
                        page: <AccountBeheer token={token}/>,
                        requiredLvl: 2
                    },
                    {
                        path: '/liedbeheer',
                        page: <LiedBeheer token={token} />,
                        requiredLvl: 2
                    },
                    {
                        path: '/liedbeheer/{id}',
                        page: <LiedBeheerSpecific token={token} urlVars={urlVars}/>,
                        requiredLvl: 2
                    },
                    {
                        path: '/404',
                        page: <FourOFour />,
                        requiredLvl: 0
                    },
                ]);
            }, 50)
        );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, urlVars, accountLvl] );

    useEffect( () => {
        clearTimeout(debounceRouteCheck);
        setDebounceRouteCheck( 
            setTimeout ( () => {
                let fourOfour = true;
                routes.map( ({path, page, requiredLvl }) => {
                    const {testResult, newUrlVars} = checkMatchingPath(path, currentPath);

                    if (testResult) {
                        fourOfour = false;
                                        
                        if ( Compare.compare(urlVars, newUrlVars) === false ) {
                            setUrlVars(newUrlVars);

                        } else {
                            setRouteParams( {page: page, requiredLvl: requiredLvl} );
                        }
                    }
                    return null;
                });

                if (fourOfour) {
                    const navEvent = new PopStateEvent('popstate');
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(navEvent);
                    console.info('navigation','404');
                }
            } , 50)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath, accountLvl, routes]);

    useEffect( () => {
        clearTimeout(debounceDispatch);
        setDebounceDispatch( 
            setTimeout(() => {
                setRenderedDispatchPage(<DispatchPage accountLvl={accountLvl} requiredLvl={routeParams.requiredLvl} setGlobals={setGlobals} inputPage={routeParams.page} />);
            }, 100)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountLvl, routeParams]);

    return (
        <React.Fragment>
            <Header accountLvl={accountLvl} />
            {renderedDispatchPage}
            <Footer />
        </React.Fragment>
    );
}

export default Router;