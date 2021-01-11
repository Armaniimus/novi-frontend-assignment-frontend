import React, {useState, useEffect} from 'react';

import PageRouting from './PageRouting';

import Header from '../Header';
import Footer from '../Footer';

import Overview from '../pages/Overview';
import FourOFour from '../pages/FourOFour';
import LiedBeheer from '../pages/LiedBeheer';
import AccountBeheer from '../pages/AccountBeheer';
import OverviewSpecific from '../pages/OverviewSpecific';

const checkMatchingPath = (path, currentPath) => {
    const returnObj = {testResult: null, urlVars: {} }
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
                    returnObj.urlVars[newPathItem] = currentPathArray[i];
                    continue;

                } else if (pathArray[i] !== currentPathArray[i]) {
                    returnObj.testResult = false;
                    return returnObj;
                }
            }
            returnObj.testResult = true;
            console.log('returnObj = ')
            console.log(returnObj);
            return returnObj;
        } 
    }
    returnObj.testResult = false;
    return returnObj;
}

const Router = () => {
    const [token, setToken] = useState(0);
    const [accountLvl, setAccountLvl] = useState(0);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [renderedRoute, setRenderedRoute] = useState(null);
    const [urlVars, setUrlVars] = useState('');

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

    // useEffect( () => {
    //     if (cookie exists) {
    //         setToken(cookie);
    //     }
    // }, [] );

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
                path: '/404',
                page: <FourOFour />,
                requiredLvl: 0
            },
            {
                path: '/accountbeheer',
                page: <AccountBeheer />,
                requiredLvl: 2
            },
            {
                path: '/liedbeheer',
                page: <LiedBeheer />,
                requiredLvl: 2
            },
        ];

        let fourOfour = true;
        routes.map( ({path, page, requiredLvl }) => {
            const {testResult, urlVars} = checkMatchingPath(path, currentPath);
            console.log(testResult);
            console.log(urlVars);
            if (testResult) {
                // console.log(newUrlVars);
                setUrlVars(urlVars);
                fourOfour = false;
                
                setRenderedRoute(
                    <React.Fragment>
                        <Header accountLvl={accountLvl} />
                        <PageRouting accountLvl={accountLvl} requiredLvl={requiredLvl} setGlobals={setGlobals} inputPage={page} />
                        <Footer />
                    </React.Fragment>
                );
            } 
            return null;
        });

        if (fourOfour) {
            const navEvent = new PopStateEvent('popstate');
            window.history.pushState({}, '', '/');
            window.dispatchEvent(navEvent);
        }
    }, [currentPath, accountLvl, token]);

    return (
        <React.Fragment>
            {renderedRoute}
        </React.Fragment>
    );
}

export default Router;