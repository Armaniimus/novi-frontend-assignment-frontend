import React from 'react';
import Router from './Router/Router';
import './css/grid.css';
import './css/main.css';

import HandleCookie from './functions/HandleCookie';
HandleCookie.init();

const App = () => {
    return (
        <React.Fragment>
            <Router />
        </React.Fragment>
    );
}

export default App;