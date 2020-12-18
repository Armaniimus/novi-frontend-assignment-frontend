import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import './App.css';

/* pages */
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Router>
                <header className="App">
                    <nav>
                      <ul>
                        <li>
                          <NavLink
                            exact to="/"
                            activeClassName="selected">
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            activeClassName="selected">
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}
export default App;
